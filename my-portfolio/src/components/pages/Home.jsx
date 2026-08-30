import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BriefcaseBusiness, Building2, Database, Download, Trophy } from 'lucide-react';
import AnimatedWrapper from '../ui/AnimatedWrapper';

const proofPoints = [
  {
    title: 'TrustFlow',
    label: 'Current flagship',
    detail: 'Co-owner · product and engineering',
    to: '/projects/trustflow',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Orange Business',
    label: 'Industry experience',
    detail: 'Two NSF software internships',
    to: '/experience',
    icon: Building2,
  },
  {
    title: 'Local RAG System',
    label: 'Completed flagship',
    detail: 'FastAPI · ChromaDB · Ollama',
    to: '/projects/local-rag-system',
    icon: Database,
  },
  {
    title: 'ECPC',
    label: 'Competitive programming',
    detail: '68th in the qualification round',
    to: '/experience',
    icon: Trophy,
  },
];

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center px-4 py-8 md:py-10">
      <div className="max-w-6xl w-full mx-auto text-center">
        <AnimatedWrapper delay={0}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Hi, I&apos;m <span className="text-indigo-400">Mostafa Eid</span>
          </motion.h1>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.15}>
          <p className="text-lg md:text-xl text-neutral-300 mb-2">
            Computer Science Student & Software Developer
          </p>
          <p className="text-base text-neutral-400 mb-5 max-w-3xl mx-auto">
            Building full-stack applications, backend systems, and practical local AI/RAG tooling.
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.3}>
          <div className="flex flex-wrap gap-3 justify-center mb-7">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-colors group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <a
              href="/lleoparden/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 border border-neutral-600 hover:border-white text-neutral-300 hover:text-white font-semibold rounded-lg transition-colors"
            >
              <Download className="mr-2" size={18} />
              Resume
            </a>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.45}>
          <div data-home-proof className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            {proofPoints.map(({ title, label, detail, to, icon: Icon }) => (
              <Link
                key={title}
                to={to}
                className="group rounded-xl border border-neutral-700 bg-zinc-800/80 p-3.5 hover:border-indigo-400 transition-colors"
              >
                <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wide mb-1.5">
                  <Icon size={15} aria-hidden="true" />
                  {label}
                </div>
                <h2 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {title}
                </h2>
                <p className="text-xs text-neutral-400 mt-1">{detail}</p>
              </Link>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Home;
