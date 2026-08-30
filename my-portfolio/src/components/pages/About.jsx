import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedWrapper from '../ui/AnimatedWrapper';

const About = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="About Me" 
          subtitle="A Glimpse Into My Journey"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedWrapper>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                I’m a Computer Science student at Ain Shams University’s Faculty of Computer and Information Sciences, with an expected graduation date of 2027. I build full-stack applications, backend systems, and practical local AI/RAG tooling.
              </p>

              <p className="text-lg text-gray-300 mb-6">
                I co-own TrustFlow and help build the product end to end alongside the project’s other founder. My professional experience also includes two software development internships with Orange Business’s Network Software Factory team and ongoing freelance work with React, Python, and FastAPI.
              </p>

              <p className="text-lg text-gray-300">
                My projects span retrieval-augmented generation, mobile development, operating systems, and network management. I also contribute to Odysseus, an open-source AI workspace, where I have had pull requests merged and applied for a maintainer role.
              </p>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.3}>
            <div className="bg-zinc-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-gray-300">
                <li><strong>Location:</strong> New Cairo, Cairo, Egypt</li>
                <li><strong>Education:</strong> B.Sc. Computer Science, Ain Shams University (expected 2027)</li>
                <li><strong>Current Work:</strong> TrustFlow, Orange Business, and freelance web development</li>
                <li><strong>Focus:</strong> Full-stack apps, backend systems, and local AI/RAG tooling</li>
                <li><strong>Achievement:</strong> Ranked 68th in the ECPC qualification round</li>
              </ul>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default About;
