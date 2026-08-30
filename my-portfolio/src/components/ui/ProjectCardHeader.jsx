import { useEffect, useState } from 'react';

const getMonogram = (title = '') => {
  const words = title.replace(/[^a-zA-Z0-9\s]/g, ' ').trim().split(/\s+/).filter(Boolean);
  return words.slice(0, 2).map((word) => word[0]).join('').toUpperCase() || 'P';
};

const ProjectCardHeader = ({ project, className = '' }) => {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => setImageFailed(false), [project.image]);

  const showImage = project.image && !imageFailed;
  const primaryTech = project.technologies?.[0] || 'Project';

  return (
    <div
      data-project-header
      className={`aspect-[16/9] overflow-hidden bg-zinc-900 ${className}`}
    >
      {showImage ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div
          role="img"
          aria-label={`${project.title} project placeholder`}
          className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 via-indigo-950/70 to-zinc-950"
        >
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(165,180,252,0.35)_1px,transparent_0)] [background-size:18px_18px]" />
          <div className="relative text-center">
            <span className="block text-4xl md:text-5xl font-black tracking-tight text-indigo-200/90">
              {getMonogram(project.title)}
            </span>
            <span className="mt-2 inline-block rounded-full border border-indigo-300/20 bg-zinc-950/50 px-3 py-1 text-xs font-medium text-indigo-200">
              {primaryTech}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCardHeader;
