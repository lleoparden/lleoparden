import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import { loadAllProjects, loadSmallProjects } from '../../utils/projectLoader';

const Projects = () => {
  const fullProjects = loadAllProjects();
  const smallProjects = loadSmallProjects();

  // Group small projects by category
  const groupedSmallProjects = smallProjects.reduce((acc, project) => {
    const category = project.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {});

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="My Projects" 
          subtitle="A showcase of my development work and experiments"
        />
        
        {/* Featured Projects */}
        <AnimatedWrapper>
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fullProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} type="full" />
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedWrapper>

        {/* Small Projects by Category */}
        <AnimatedWrapper delay={0.3}>
          <section>
            <h3 className="text-2xl font-semibold text-white mb-8">More Projects</h3>
            {Object.entries(groupedSmallProjects).map(([category, projects], categoryIndex) => (
              <div key={category} className="mb-12">
                <h4 className="text-xl font-medium text-gray-300 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {projects.length}
                  </span>
                  {category}
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, projectIndex) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: (categoryIndex * 0.2) + (projectIndex * 0.1) 
                      }}
                    >
                      <ProjectCard project={project} type="small" />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Projects;