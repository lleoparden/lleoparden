import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedWrapper from '../ui/AnimatedWrapper';

const About = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="About Me" 
          subtitle="Get to know me better"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedWrapper>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love creating digital experiences that are not only functional but also beautiful 
                and user-friendly.
              </p>
              
              <p className="text-lg text-gray-300 mb-6">
                With a background in computer science and years of hands-on experience, 
                I specialize in React, Node.js, and modern development practices. 
                I'm always eager to learn new technologies and tackle challenging problems.
              </p>

              <p className="text-lg text-gray-300">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or enjoying a good book on software architecture.
              </p>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.3}>
            <div className="bg-zinc-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-gray-300">
                <li><strong>Location:</strong> Your City, Country</li>
                <li><strong>Experience:</strong> X+ years</li>
                <li><strong>Education:</strong> Your Degree</li>
                <li><strong>Interests:</strong> Web Development, UI/UX, Open Source</li>
              </ul>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default About;