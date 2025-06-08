import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import AnimatedWrapper from '../ui/AnimatedWrapper';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <AnimatedWrapper>
          <h1 className="text-9xl font-bold text-gray-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            <Home className="mr-2" size={20} />
            Back Home
          </Link>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default NotFound;