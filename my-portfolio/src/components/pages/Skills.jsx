import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import TechBadge from '../ui/TechBadge';
import AnimatedWrapper from '../ui/AnimatedWrapper';

const Skills = () => {
  const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      'JavaScript', 'Python', 'Java', 'C++', 'C',
      'Kotlin', 'SQL', 'HTML', 'CSS',
      'JSON', 'XML', 'PHP', 'Assembly'
    ]
  },
  {
    category: 'Mobile Development',
    skills: [
      'Android (XML + Kotlin)', 'Firebase Auth',
      'Firestore', 'Firebase Realtime DB',
      'Push Notifications', 'Local JSON Storage'
    ]
  },
  {
    category: 'Web Development',
    skills: [
      'React', 'Node.js', 'FastAPI', 'Vite',
      'Tailwind CSS', 'Bootstrap', 'JQuery',
      'Framer Motion', 'MDX'
    ]
  },
  {
    category: 'Computer Science Topics',
    skills: [
      'Algorithms', 'Data Structures', 'Object-Oriented Programming (OOP)',
      'Operating Systems', 'System Calls',
      'Software Development', 'Database Design',
      'Spinlocks & Sleeplocks', 'End-to-End Encryption',
      'Agile Practices'
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: [
      'Git', 'Linux', 'Docker', 'GitHub Actions', 'SSH',
      'Firebase Console', 'Figma',
      'Adobe Photoshop', 'Adobe Illustrator',
      'Adobe Premiere Pro', 'Adobe After Effects',
      'Microsoft Office', 'MCP'
    ]
  },
  {
    category: 'Soft Skills',
    skills: [
      'Problem-Solving', 'Critical Thinking', 'Teamwork',
      'Communication', 'Adaptability', 'Time Management',
      'Content Creation', 'Media Outreach'
    ]
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      'Scikit-learn', 'Pandas', 'NumPy',
      'Ensemble Learning', 'Tkinter GUI Integration'
    ]
  },
  {
    category: 'IDE',
    skills: [
      'VSCode', 'IntelliJ IDEA', 'Android Studio',
      'Visual Studio', 'Jupyter Notebook', 'NetBeans'
    ]
  },
  {
    category: 'Databases',
    skills: [
      'MySQL', 'Firestore', 'Redis',
      'TinyDB', 'MongoDB (basic)'
    ]
  },
  {
    category: 'Game Development',
    skills: [
      'SFML'
    ]
  }
];



  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Skills & Technologies" 
          subtitle="Technologies I work with"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedWrapper key={category.category} delay={categoryIndex * 0.2}>
              <div className="bg-zinc-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <TechBadge key={skillIndex} tech={skill} />
                  ))}
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
