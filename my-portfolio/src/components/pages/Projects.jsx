import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import { loadAllProjects } from '../../utils/projectLoader';

const sections = [
  {
    title: 'Flagship Work',
    description: 'The strongest evidence of product ownership, AI systems work, and full-stack delivery.',
    slugs: ['trustflow', 'local-rag-system', 'sonic-gui'],
    grid: 'lg:grid-cols-3',
    type: 'full',
  },
  {
    title: 'Active Work',
    description: 'Work that is in progress or expected to resume.',
    slugs: ['olympus', 'job-tracker'],
    grid: 'md:grid-cols-2',
    type: 'full',
  },
  {
    title: 'Planned',
    description: 'Clearly labeled concepts that have not been built yet.',
    slugs: ['sentinelcheck'],
    grid: 'md:grid-cols-2 lg:grid-cols-3',
    type: 'small',
  },
  {
    title: 'Selected Builds & Contributions',
    description: 'Additional completed applications, systems work, and open-source contributions.',
    slugs: ['kotlin-chat-application', 'oop-chess', 'fos-educational-os', 'odysseus'],
    grid: 'md:grid-cols-2 lg:grid-cols-4',
    type: 'small',
  },
];

const Projects = () => {
  const projects = loadAllProjects();
  const bySlug = new Map(projects.map((project) => [project.slug, project]));

  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="My Projects"
          subtitle="Flagship product work first, with active and planned work clearly separated"
        />

        {sections.map((section, sectionIndex) => (
          <AnimatedWrapper key={section.title} delay={sectionIndex * 0.08}>
            <section className="pb-16">
              <div className="mb-7 max-w-3xl">
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                <p className="mt-2 text-neutral-400">{section.description}</p>
              </div>
              <div className={`grid gap-6 ${section.grid}`}>
                {section.slugs.map((slug, index) => {
                  const project = bySlug.get(slug);
                  if (!project) return null;

                  return (
                    <motion.div
                      key={slug}
                      className="h-full"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                    >
                      <ProjectCard project={project} type={section.type} />
                    </motion.div>
                  );
                })}
              </div>
            </section>
          </AnimatedWrapper>
        ))}
      </div>
    </div>
  );
};

export default Projects;
