import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedWrapper from '../ui/AnimatedWrapper';

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      href: 'mailto:your.email@example.com',
      icon: Mail,
      color: 'text-red-400 hover:text-red-300',
      description: 'your.email@example.com'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: Github,
      color: 'text-gray-400 hover:text-white',
      description: '@yourusername'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      icon: Linkedin,
      color: 'text-blue-400 hover:text-blue-300',
      description: 'linkedin.com/in/yourusername'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/yourusername',
      icon: Twitter,
      color: 'text-sky-400 hover:text-sky-300',
      description: '@yourusername'
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Let's connect and build something amazing together"
        />
        
        <AnimatedWrapper>
          <div className="text-center mb-12">
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid sm:grid-cols-2 gap-6">
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <AnimatedWrapper key={link.name} delay={index * 0.1}>
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="block bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all"
                >
                  <div className="flex items-center mb-3">
                    <IconComponent className={`mr-3 ${link.color} transition-colors`} size={24} />
                    <h3 className="text-lg font-semibold text-white">{link.name}</h3>
                  </div>
                  <p className="text-gray-400">{link.description}</p>
                </motion.a>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;