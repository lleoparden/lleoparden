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
                I'm a dedicated Computer Science student at Ain Shams University, currently wrapping up my second year. 
                Beyond the classroom, I'm passionate about building meaningful software — from engaging web experiences to intelligent desktop applications and Android apps.
              </p>

              <p className="text-lg text-gray-300 mb-6">
                My journey has included diverse hands-on projects: a multiplayer puzzle game built with C++ & SFML, a full OOP-based chess game in Java with custom game modes, and an eCommerce app in Kotlin using Firebase. 
                I’m constantly exploring new technologies — be it modern React stacks, machine learning in Python, or secure offline messaging on Android.
              </p>

              <p className="text-lg text-gray-300">
                Whether I’m designing UI, solving algorithmic problems, or optimizing back-end systems, I enjoy bridging creativity with logic. 
                When I’m not coding, I’m probably reading, sketching new UI concepts, or exploring open-source tools.
              </p>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.3}>
            <div className="bg-zinc-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-gray-300">
                <li><strong>Location:</strong> New Cairo, Egypt</li>
                <li><strong>Experience:</strong> 2+ years (projects, internships & training)</li>
                <li><strong>Education:</strong> B.Sc. in Computer Science, Ain Shams University</li>
                <li><strong>Interests:</strong> Full-Stack Development, Game Design, AI, Open Source</li>
              </ul>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default About;
