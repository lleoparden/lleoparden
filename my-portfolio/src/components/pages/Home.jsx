import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import AnimatedWrapper from '../ui/AnimatedWrapper';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedWrapper delay={0}>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-indigo-500">
              Mostafa Eid
            </span>
          </motion.h1>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.3}>
          <p className="text-xl md:text-2xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            A Third-Year cs student
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.6}>
          <p className="text-lg text-neutral-500 mb-12 max-w-3xl mx-auto">
            I specialize in developing responsive web and mobile apps and crafting intuitive UIs. My goal is to turn complexity into seamless, impactful digital products.
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.9}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 bg-indigo-400 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <a
              href="/lleoparden/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-neutral-600 hover:border-white text-neutral-300 hover:text-white font-semibold rounded-lg transition-colors"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Home;
