import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import TechBadge from './TechBadge';

const ProjectCard = ({ project, type = 'full' }) => {
  if (type === 'small') {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="bg-zinc-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all"
      >
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <TechBadge key={index} tech={tech} size="sm" />
          ))}
        </div>
        <div className="flex space-x-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -10 }}
      className="bg-zinc-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all"
    >
      {project.image && (
        <div className="h-48 bg-gray-700 overflow-hidden">
          <img
            src='\public\images\projects\biko-park.png'
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            View Details →
          </Link>
          <div className="flex space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;