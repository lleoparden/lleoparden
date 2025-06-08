import React from 'react';
import { Github, Linkedin, Mail,Facebook,Instagram,} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-400 text-sm mb-4 md:mb-0">
            Mostafa Eid. Built with React & Tailwind CSS.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/lleoparden"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mostafa-eid06/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mostafa.ahmed.nabil.eid@gmail.com"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.facebook.com/mostafa.ahmedeid.5"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/mostafa_eid06/"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
