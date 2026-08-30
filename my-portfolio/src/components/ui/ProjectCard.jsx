import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCardHeader from './ProjectCardHeader';
import TechBadge from './TechBadge';

const ProjectCard = ({ project, type = 'full' }) => {
  const compact = type === 'small';

  return (
    <motion.article
      whileHover={{ scale: 1.015, y: compact ? -4 : -7 }}
      className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-700 bg-zinc-800 transition-all hover:border-indigo-400/70"
    >
      <ProjectCardHeader project={project} />

      <div className={`flex flex-1 flex-col ${compact ? 'p-4' : 'p-6'}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-semibold text-white`}>
            {project.title}
          </h3>
          {project.status && (
            <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 text-xs font-semibold text-indigo-200 ring-1 ring-inset ring-indigo-400/30">
              {project.status}
            </span>
          )}
        </div>

        <p className={`text-neutral-300 ${compact ? 'text-sm' : ''} mb-4 line-clamp-3`}>
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <TechBadge key={tech} tech={tech} size={compact ? 'sm' : 'md'} />
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="font-medium text-white transition-colors hover:text-indigo-300"
          >
            View Details →
          </Link>

          <div className="flex space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-white"
              >
                <Github size={compact ? 18 : 20} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-white"
              >
                <ExternalLink size={compact ? 18 : 20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
