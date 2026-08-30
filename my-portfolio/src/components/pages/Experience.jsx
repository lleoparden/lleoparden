import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import TechBadge from '../ui/TechBadge';
import { Award, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Co-Owner',
      organization: 'TrustFlow',
      duration: 'Ongoing',
      description:
        'Co-own and help build TrustFlow end to end alongside the project’s other founder, contributing across product features and UI/UX.',
      technologies: ['Product Development', 'Full-Stack Development', 'UI/UX'],
    },
    {
      title: 'Software Development Intern',
      organization: 'Orange Business – Network Software Factory Team',
      duration: 'Jul–Oct 2025 & Jul–Aug 2026',
      description:
        'Contributed to network-oriented software solutions across two internship stints and worked in real-world development workflows delivering features aligned with enterprise needs.',
      technologies: ['Network Software Development', 'Agile Practices', 'Team Collaboration'],
    },
    {
      title: 'Freelance Web Developer',
      organization: 'Self-employed',
      duration: 'Ongoing',
      description:
        'Build web applications for clients using React, Python, and FastAPI, covering frontend implementation, backend APIs, and data integration.',
      technologies: ['React', 'Python', 'FastAPI'],
    },
    {
      title: 'IT Job Shadowing',
      organization: 'EFG Hermes',
      duration: 'Aug 2024',
      description:
        'Observed fintech and investment banking operations and took part in Q&A sessions with professionals on the financial technology landscape.',
      technologies: ['Fintech', 'Information Technology'],
    },
  ];

  const certificates = [
    {
      title: 'ECPC Qualification Round – Ranked 68th',
      issuer: 'Egyptian Collegiate Programming Contest',
      year: '68th',
      technologies: ['Problem-Solving', 'Algorithms'],
    },
    {
      title: 'Java Masterclass Certificate',
      issuer: 'Udemy',
      year: 2025,
      technologies: ['Java', 'JavaFX', 'Spring Boot', 'Maven'],
    },
    {
      title: 'Full-Stack PHP Developer',
      issuer: 'ITI (Information Technology Institute)',
      year: 2024,
      technologies: ['PHP', 'MySQL', 'Laravel', 'Bootstrap', 'JavaScript'],
    },
    {
      title: 'CS50x: Introduction to Computer Science',
      issuer: 'HarvardX (edX)',
      year: 2023,
      technologies: ['C', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Experience & Certificates" 
          subtitle="My professional journey and achievements"
        />
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience Section */}
          <AnimatedWrapper delay={0}>
            <div className="bg-zinc-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Experience
              </h3>
              <div className="space-y-4">
                {experiences.map((exp, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-zinc-900 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {exp.duration}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{exp.organization}</p>
                    <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies?.map((tech, techIdx) => (
                        <TechBadge key={techIdx} tech={tech} size="sm" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedWrapper>

          {/* Certificates Section */}
          <AnimatedWrapper delay={0.2}>
            <div className="bg-zinc-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Certificates & Achievement
              </h3>
              <div className="space-y-4">
                {certificates.map((cert, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-zinc-900 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Award size={14} className="mr-1" />
                        {cert.year}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.technologies?.map((tech, techIdx) => (
                        <TechBadge key={techIdx} tech={tech} size="sm" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedWrapper>
        </div>

        {/* Resume Download Link */}
        <AnimatedWrapper delay={0.4}>
          <div className="mt-12 text-center">
            <a 
              href="/lleoparden/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View My Resume
            </a>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Experience;
