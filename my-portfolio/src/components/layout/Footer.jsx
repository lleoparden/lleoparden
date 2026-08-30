import { Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-neutral-700">
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
              href="mailto:most.eid.31@gmail.com"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
