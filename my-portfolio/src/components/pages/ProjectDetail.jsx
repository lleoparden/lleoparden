import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle, Play } from 'lucide-react';
import { loadProject } from '../../utils/projectLoader';
import TechBadge from '../ui/TechBadge';
import AnimatedWrapper from '../ui/AnimatedWrapper';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const projectData = await loadProject(slug);
      setProject(projectData);
      setLoading(false);
    };

    fetchProject();
  }, [slug]);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const youtubeVideoId = getYouTubeVideoId(project.youtubeVideo);

  // Custom styling based on project colors
  const customStyles = {
      background:'#18181b', 
      cardBackground: project?.cardBackground || '#111111',
      cardBorder: project?.cardBorder || project?.secondaryColor || '#00ff00',
      textOnPrimary: project?.textOnPrimary || '#00ff00',
  textOnSecondary: project?.textOnSecondary || '#39ff14',
  };


  return (
    <div 
      className="min-h-screen py-20 px-4"
      style={{ 
        background: customStyles.background,
        transition: 'all 0.3s ease'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <AnimatedWrapper>
          <Link
            to="/projects"
            className="inline-flex items-center mb-8 transition-all duration-300 hover:scale-105"
            style={{ color: project.secondaryColor }}
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Link>
        </AnimatedWrapper>

        {/* Project Header */}
        <AnimatedWrapper delay={0.1}>
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ 
                color: project.primaryColor,
                textShadow: `0 0 20px ${project.primaryColor}40`
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {project.title}
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={{
                    backgroundColor: project.primaryColor,
                    border: `2px solid ${project.secondaryColor}`,
                    color: customStyles.textOnPrimary,
                    boxShadow: `0 4px 20px ${project.primaryColor}30`
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="mr-2" size={20} />
                  Live Demo
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  style={{
                    backgroundColor: customStyles.primaryColor,
                    border: `2px solid ${project.secondaryColor}`,
                    color: project.textOnPrimary
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="mr-2" size={20} />
                  View Code
                </motion.a>
              )}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3 justify-center">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TechBadge tech={tech} />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedWrapper>

        
        {/* Project Details Section - Description First */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-10">
                    
            {/* About This Project */}
            <AnimatedWrapper delay={0.2}>
              <motion.section 
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: '#1e1e1e',
                  border: `2px solid ${project.secondaryColor}30`,
                  boxShadow: `0 8px 24px ${project.primaryColor}30`
                }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-4" style={{ color: project.primaryColor }}>
                  About This Project
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.section>
            </AnimatedWrapper>
              
            {/* Key Features */}
            {project.features && (
              <AnimatedWrapper delay={0.3}>
                <motion.section 
                  className="rounded-2xl p-8"
                  style={{
                    backgroundColor: '#1e1e1e',
                    border: `2px solid ${project.secondaryColor}30`,
                    boxShadow: `0 8px 24px ${project.primaryColor}30`
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold mb-6" style={{ color: project.primaryColor }}>
                    Key Features
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {project.features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start p-4 rounded-xl"
                        style={{
                          backgroundColor: '#2a2a2a',
                          border: `1px solid ${project.secondaryColor}30`
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="mr-3 mt-1 text-green-400" size={20} />
                        <span className="text-gray-300 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </AnimatedWrapper>
            )}
        
            {/* Challenges & Solutions */}
            {project.challenges && (
              <AnimatedWrapper delay={0.4}>
                <motion.section 
                  className="rounded-2xl p-8"
                  style={{
                    backgroundColor: '#1e1e1e',
                    border: `2px solid ${project.secondaryColor}30`,
                    boxShadow: `0 8px 24px ${project.primaryColor}30`
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold mb-6" style={{ color: project.primaryColor }}>
                    Challenges & Solutions
                  </h2>
                  <div className="space-y-6">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        className="rounded-xl p-6 bg-zinc-900 border border-gray-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <p className="text-gray-300">{challenge}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </AnimatedWrapper>
            )}
        
            {/* Video Preview */}
            {youtubeVideoId && (
              <AnimatedWrapper delay={0.5}>
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-center" style={{ color: project.primaryColor }}>
                    <Play className="inline mr-2" size={22} />
                    Project Preview
                  </h2>
                  <div className="relative w-full max-w-4xl mx-auto">
                    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg">
                      <iframe
                        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                        title={`${project.title} Preview`}
                        className="absolute top-0 left-0 w-full h-full rounded-2xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                          boxShadow: `0 12px 30px ${project.primaryColor}40`
                        }}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            )}
        
            {/* Project Image */}
            {project.image && (
              <AnimatedWrapper delay={0.6}>
                <div className="mb-12">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-2xl shadow-2xl"
                    style={{
                      boxShadow: `0 20px 60px ${project.primaryColor}20`
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </AnimatedWrapper>
            )}
          </div>
          
          {/* Right Column - Sidebar Info */}
          <div className="lg:col-span-1">
            <AnimatedWrapper delay={0.6}>
              <motion.div
                className="rounded-2xl p-8 sticky top-24"
                style={{
                  backgroundColor: '#1a1a1a',
                  border: `2px solid ${project.secondaryColor}30`,
                  boxShadow: `0 8px 32px ${project.primaryColor}15`
                }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6" style={{ color: project.primaryColor }}>
                  Project Info
                </h3>
              
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <TechBadge key={index} tech={tech} size="sm" />
                      ))}
                    </div>
                  </div>
                    
                  {project.demo && (
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
                        Live Demo
                      </h4>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm break-all transition-all duration-300 hover:underline"
                        style={{ color: project.secondaryColor }}
                      >
                        {project.demo}
                      </a>
                    </div>
                  )}
        
                  {project.github && (
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
                        Source Code
                      </h4>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm break-all transition-all duration-300 hover:underline"
                        style={{ color: project.secondaryColor }}
                      >
                        {project.github}
                      </a>
                    </div>
                  )}
        
                  {project.youtubeVideo && (
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
                        Video Preview
                      </h4>
                      <a
                        href={project.youtubeVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg transition-all duration-300"
                        style={{
                          backgroundColor: `${project.primaryColor}20`,
                          color: project.secondaryColor,
                          border: `1px solid ${project.secondaryColor}40`
                        }}
                      >
                        <Play className="mr-2" size={16} />
                        Watch on YouTube
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatedWrapper>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;