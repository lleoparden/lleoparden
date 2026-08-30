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
                I’m a Computer Science undergraduate at Ain Shams University, currently completing my second year (expected graduation 2027). 
                Over the past two years, I’ve built a solid foundation in problem solving, algorithms, and software development, while working on practical projects that combine creativity with technical depth.
              </p>

              <p className="text-lg text-gray-300 mb-6">import React from 'react';import SectionHeader from '../ui/SectionHeader';import AnimatedWrapper from '../ui/AnimatedWrapper';const About = () => {  return (    <div className="py-20 px-4">      <div className="max-w-4xl mx-auto">        <SectionHeader          title="About Me"          subtitle="A Glimpse Into My Journey"        />        <div className="grid md:grid-cols-2 gap-12 items-center">          <AnimatedWrapper>            <div className="prose prose-invert max-w-none">              <p className="text-lg text-gray-300 mb-6">                I’m a Computer Science student at Ain Shams University’s Faculty of Computer and Information Sciences, expected to graduate in 2027.              </p>              <p className="text-lg text-gray-300 mb-6">                I build practical software across full-stack web development, backend APIs, mobile applications, AI-enabled tools, and network systems. My work includes React and FastAPI applications, Android and React Native apps, containerized local RAG systems, self-hosted LLM workflows, and network-management software.              </p>              <p className="text-lg text-gray-300">                I am a Co-Owner of TrustFlow, where I help build the product end to end alongside the project’s other founder, contributing across product features and UI/UX. I also work as a freelance web developer, building client applications with React, Python, and FastAPI.              </p>            </div>          </AnimatedWrapper>          <AnimatedWrapper delay={0.3}>            <div className="bg-zinc-800 rounded-lg p-8 border border-gray-700">              <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>              <ul className="space-y-3 text-gray-300">                <li><strong>Location:</strong> New Cairo, Cairo, Egypt</li>                <li><strong>Education:</strong> B.Sc. Computer Science, Ain Shams University — Expected 2027</li>                <li><strong>Current Focus:</strong> Full-Stack Development, Backend Systems, AI-Enabled Tools, and Network Software</li>                <li><strong>Core Tools:</strong> React, Python, FastAPI, React Native, Kotlin, Firebase, Docker, and REST APIs</li>                <li><strong>Achievement:</strong> Ranked 68th in the ECPC qualification round</li>              </ul>            </div>          </AnimatedWrapper>        </div>      </div>    </div>  );};export default About;
                My journey so far includes creating a multiplayer puzzle-platformer in C++ & SFML, a JavaFX-based chess game with unique modes and AI, 
                an Android eCommerce app powered by Firebase, a secure offline-first chat application, and a desktop ML tool for obesity risk assessment using Tkinter and Python. 
                I’m also diving into systems programming by building a basic operating system from scratch with C and Assembly.
              </p>

              <p className="text-lg text-gray-300">
                I’m passionate about full-stack web development (React, Node.js/FastAPI), mobile development, and AI/ML applications. 
                Beyond coding, I’m exploring freelancing, contributing to open-source projects, and refining my design sense to deliver polished, impactful software.
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
                <li><strong>Current Focus:</strong> Full-Stack Web Development, Systems Programming, AI/ML</li>
                <li><strong>Interests:</strong> Building impactful apps, Game Design, OS Development, Open Source</li>
              </ul>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default About;
