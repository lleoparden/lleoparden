import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import TechBadge from './TechBadge';

const ProjectCard = ({ project, type = 'full' }) => {
  let projectData;
  if (project.title && project.description) {
    projectData = project;
  } else if (project.slug && project[project.slug]) {
    projectData = project[project.slug];
  } else {
    const firstKey = Object.keys(project)[0];
    projectData = project[firstKey] || project;
  }
  
  if (type === 'small') {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="bg-zinc-800 rounded-lg p-6 border border-neutral-700 hover:border-neutral-600 transition-all"
      >
        <h3 className="text-lg font-semibold text-white mb-2">{projectData.title}</h3>
        <p className="text-neutral-400 text-sm mb-4">{projectData.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {projectData.technologies?.map((tech, index) => (
            <TechBadge key={index} tech={tech} size="sm" />
          ))}
        </div>
        <div className="flex space-x-3">
          {projectData.github && (
            <a
              href={projectData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {projectData.demo && (
            <a
              href={projectData.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
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
      className="bg-zinc-800 rounded-lg overflow-hidden transition-all border border-neutral-700 hover:border-neutral-600"
    >
      {projectData.image && (
        <div className="h-48 overflow-hidden">
          <img
            src={projectData.image}
            alt={projectData.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOWNhM2FmIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pgo8L3N2Zz4K';
            }}
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {projectData.title}
        </h3>
        {projectData.ongoing && (
          <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-2">
            Ongoing
          </span>
        )}
        {projectData.team_project && (
          <span className="inline-block bg-green-800 text-white text-xs px-2 py-1 rounded-full mb-2 ml-2">
            Team Project
          </span>
        )}

        <p className="text-neutral-300 mb-4 line-clamp-3">
          {projectData.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {projectData.technologies?.map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Link
            to={`/projects/${projectData.slug}`}
            className="text-white font-medium transition-opacity hover:opacity-80"
          >
            View Details →
          </Link>

          <div className="flex space-x-3">
            {projectData.github && (
              <a
                href={projectData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {projectData.github2 && (
            <a
              href={projectData.github2}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          )}
            {projectData.demo && (
              <a
                href={projectData.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
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