import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import TechBadge from '../ui/TechBadge';
import AnimatedWrapper from '../ui/AnimatedWrapper';

const Skills = () => {
  const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      'C++', 'C', 'Java', 'Python', 'Kotlin', 'HTML', 'CSS',
      'JavaScript', 'PHP', 'SQL', 'JSON', 'XML'
    ]
  },
  {
    category: 'Web & Game Development',
    skills: [
      'React', 'Vite', 'Tailwind CSS', 'JQuery', 'Bootstrap',
      'SFML', 'Firebase', 'MySQL', 'Framer Motion', 'MDX'
    ]
  },
  {
    category: 'Mobile Development',
    skills: [
      'Android (XML + Kotlin)', 'Firebase Realtime DB',
      'Firestore', 'Firebase Auth', 'Local JSON Storage',
      'Push Notifications'
    ]
  },
  {
    category: 'Computer Science Topics',
    skills: [
      'Software Development', 'Object-Oriented Programming (OOP)',
      'Algorithms', 'Data Structures', 'Agile Practices',
      'End-to-End Encryption', 'Database Design'
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: [
      'Git', 'Linux', 'Firebase Console', 'Figma',
      'Adobe Photoshop', 'Adobe Illustrator',
      'Adobe Premiere Pro', 'Adobe After Effects', 'Microsoft Office'
    ]
  },
  {
    category: 'Soft Skills',
    skills: [
      'Time Management', 'Problem-Solving', 'Teamwork',
      'Communication', 'Adaptability', 'Critical Thinking',
      'Content Creation', 'Media Outreach'
    ]
  },
  {
    category: 'IDE',
    skills: [
      'VSCode', 'Visual Studio', 'IntelliJ IDEA',
      'Android Studio', 'Jupyter Notebook', 'NetBeans'
    ]
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      'Scikit-learn', 'Pandas', 'NumPy', 'Ensemble Learning',
      'Tkinter GUI Integration'
    ]
  },
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
