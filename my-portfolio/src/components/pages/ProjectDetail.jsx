import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react';
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

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <AnimatedWrapper>
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Link>
        </AnimatedWrapper>

        {/* Project Header */}
        <AnimatedWrapper delay={0.1}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              {project.description}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  style={{ backgroundColor: project.primaryColor }}
                >
                  <ExternalLink className="mr-2" size={20} />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <Github className="mr-2" size={20} />
                  View Code
                </a>
              )}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 justify-center">
              {project.technologies.map((tech, index) => (
                <TechBadge key={index} tech={tech} />
              ))}
            </div>
          </div>
        </AnimatedWrapper>

        {/* Project Image */}
        {project.image && (
          <AnimatedWrapper delay={0.2}>
            <div className="mb-12 text-white">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </AnimatedWrapper>
        )}

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatedWrapper delay={0.3}>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">About This Project</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.longDescription}
                </p>
              </section>
            </AnimatedWrapper>

            {/* Features */}
            {project.features && (
              <AnimatedWrapper delay={0.4}>
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-6">Key Features</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle 
                          className="text-green-400 mr-3 mt-1 flex-shrink-0" 
                          size={20} 
                        />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </AnimatedWrapper>
            )}

            {/* Challenges */}
            {project.challenges && (
              <AnimatedWrapper delay={0.5}>
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Challenges & Solutions</h2>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <p className="text-gray-300">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </AnimatedWrapper>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AnimatedWrapper delay={0.6}>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 sticky top-24">
                <h3 className="text-xl font-semibold text-white mb-4">Project Info</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <TechBadge key={index} tech={tech} size="sm" />
                      ))}
                    </div>
                  </div>

                  {project.demo && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Live Demo</h4>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm break-all"
                      >
                        {project.demo}
                      </a>
                    </div>
                  )}

                  {project.github && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Source Code</h4>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm break-all"
                      >
                        {project.github}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;