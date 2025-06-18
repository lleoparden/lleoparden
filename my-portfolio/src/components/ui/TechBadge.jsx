import React from 'react';
import {
  Code2, Database, Settings, Paintbrush, Terminal, BrainCog, 
  FileText, FileCode2, Globe, Cpu, Users, Monitor, Package,
  Wrench, Layers, GitBranch, BookOpen, Smartphone
} from 'lucide-react';

const TechBadge = ({ tech, size = 'md', color = 'gray' }) => {
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const colors = {
    blue: 'bg-blue-600/20 text-blue-300 border-blue-500/30',
    green: 'bg-green-600/20 text-green-300 border-green-500/30',
    purple: 'bg-purple-600/20 text-purple-300 border-purple-500/30',
    orange: 'bg-orange-600/20 text-orange-300 border-orange-500/30',
    pink: 'bg-pink-600/20 text-pink-300 border-pink-500/30',
    yellow: 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30',
    teal: 'bg-teal-600/20 text-teal-300 border-teal-500/30',
    gray: 'bg-gray-600/20 text-gray-300 border-gray-500/30',
    red: 'bg-red-600/20 text-red-300 border-red-500/30',
    indigo: 'bg-indigo-600/20 text-indigo-300 border-indigo-500/30',
    cyan: 'bg-cyan-600/20 text-cyan-300 border-cyan-500/30',
  };

  const getColorByTech = (tech) => {
    const t = tech.toLowerCase();
    
    // Color Groups by Technology Category
    
    // PROGRAMMING LANGUAGES - Purple
    if (['javascript', 'typescript', 'python', 'java', 'kotlin', 'c++', 'cplusplus', 'c#', 'csharp', 'php', 'ruby', 'go', 'golang', 'rust', 'swift', 'objective-c'].some(x => t.includes(x))) return 'purple';
    if (t === 'c') return 'purple'; // Only match exact 'c' after other c-containing terms
    
    // WEB TECHNOLOGIES - Blue  
    if (['html', 'html5', 'css', 'css3', 'sass', 'scss', 'less', 'tailwind', 'bootstrap', 'material-ui', 'chakra', 'jquery', 'ajax', 'react', 'vue', 'angular', 'node.js'].some(x => t.includes(x))) return 'blue';
    
    // DATABASES - Green
    if (['mysql', 'postgresql', 'postgres', 'sqlite', 'mongodb', 'redis', 'firebase', 'sql', 'nosql'].some(x => t.includes(x))) return 'green';
    
    // DEVOPS & INFRASTRUCTURE - Orange
    if (['docker', 'kubernetes', 'jenkins', 'github actions', 'ci/cd', 'aws', 'azure', 'gcp', 'heroku', 'vercel', 'netlify', 'nginx', 'apache', 'tomcat', 'linux', 'ubuntu', 'debian', 'centos', 'bash', 'shell'].some(x => t.includes(x))) return 'orange';
    
    // VERSION CONTROL & COLLABORATION TOOLS - Red
    if (['git', 'github', 'gitlab', 'bitbucket', 'svn'].some(x => t.includes(x))) return 'red';
    
    // IDES & EDITORS - Indigo
    if (['visual studio code', 'vscode', 'vs code', 'visual studio', 'intellij', 'pycharm', 'webstorm', 'phpstorm', 'eclipse', 'netbeans', 'atom', 'sublime', 'vim', 'neovim', 'emacs', 'nano', 'xcode', 'android studio'].some(x => t.includes(x))) return 'indigo';
    
    // DESIGN & CREATIVE TOOLS - Pink
    if (['photoshop', 'illustrator', 'indesign', 'after effects', 'figma', 'sketch', 'adobe xd', 'invision', 'canva', 'gimp', 'inkscape'].some(x => t.includes(x))) return 'pink';
    
    // FRAMEWORKS & LIBRARIES - Cyan
    if (['django', 'flask', 'fastapi', 'spring', 'laravel', 'symfony', 'rails', '.net', 'dotnet', 'express', 'nextjs', 'nuxt', 'gatsby'].some(x => t.includes(x))) return 'cyan';
    
    // OFFICE & PRODUCTIVITY - Yellow
    if (['microsoft office', 'ms office', 'word', 'excel', 'powerpoint', 'outlook', 'teams', 'google workspace', 'sheets', 'docs', 'slides'].some(x => t.includes(x))) return 'yellow';
    
    // GAME DEVELOPMENT - Teal
    if (['unity', 'unreal', 'godot', 'sfml', 'opengl', 'directx', 'game development', 'game design', 'blender', '3ds max'].some(x => t.includes(x))) return 'teal';
    
    // TESTING & QA - Green (lighter shade, but we'll use green)
    if (['jest', 'mocha', 'cypress', 'selenium', 'junit', 'pytest', 'testing', 'unit testing', 'integration testing', 'e2e testing'].some(x => t.includes(x))) return 'green';
    
    // SOFT SKILLS - Gray
    if (['teamwork', 'team work', 'collaboration', 'communication', 'leadership', 'project management', 'agile', 'scrum', 'problem solving', 'critical thinking', 'analytical', 'time management', 'organization', 'adaptability'].some(x => t.includes(x))) return 'gray';
    
    // MOBILE DEVELOPMENT - Orange (infrastructure-related)
    if (['android', 'ios', 'react native', 'flutter', 'xamarin', 'ionic'].some(x => t.includes(x))) return 'orange';
    
    // PACKAGE MANAGERS & BUILD TOOLS - Cyan (framework-related)
    if (['npm', 'yarn', 'pip', 'composer', 'maven', 'gradle', 'webpack', 'vite', 'rollup'].some(x => t.includes(x))) return 'cyan';
    
    return color; // fallback to provided or default 'gray'
  };

  const getIconByTech = (tech) => {
    const t = tech.toLowerCase();
    
    // Order matters here too! More specific matches first
    // Databases
    if (['mysql', 'postgresql', 'postgres', 'sqlite', 'mongodb', 'redis', 'firebase', 'sql', 'nosql'].some(x => t.includes(x))) return <Database size={14} />;
    
    // Development Tools & Terminal
    if (['git', 'github', 'gitlab', 'bitbucket'].some(x => t.includes(x))) return <GitBranch size={14} />;
    if (['linux', 'ubuntu', 'bash', 'shell', 'terminal', 'docker', 'kubernetes'].some(x => t.includes(x))) return <Terminal size={14} />;
    if (['npm', 'yarn', 'pip', 'composer', 'maven', 'gradle'].some(x => t.includes(x))) return <Package size={14} />;
    
    // IDEs & Editors
    if (['visual studio code', 'vscode', 'vs code', 'visual studio', 'intellij', 'pycharm', 'webstorm', 'phpstorm', 'eclipse', 'netbeans', 'atom', 'sublime', 'vim', 'neovim', 'emacs', 'xcode', 'android studio'].some(x => t.includes(x))) return <Monitor size={14} />;
    
    // Design Tools
    if (['photoshop', 'illustrator', 'figma', 'sketch', 'adobe xd', 'canva', 'gimp', 'inkscape'].some(x => t.includes(x))) return <Paintbrush size={14} />;
    
    // Web Technologies
    if (['html', 'css', 'bootstrap', 'tailwind', 'sass', 'scss', 'less'].some(x => t.includes(x))) return <FileCode2 size={14} />;
    if (['javascript', 'typescript', 'php', 'react', 'vue', 'angular', 'jquery'].some(x => t.includes(x))) return <Globe size={14} />;
    
    // Mobile Development
    if (['android', 'ios', 'react native', 'flutter', 'swift', 'kotlin'].some(x => t.includes(x))) return <Smartphone size={14} />;
    
    // Game Development & Graphics
    if (['unity', 'unreal', 'godot', 'sfml', 'opengl', 'directx', 'game'].some(x => t.includes(x))) return <Cpu size={14} />;
    
    // Programming Languages
    if (['python', 'java', 'c++', 'cplusplus', 'c#', 'csharp', 'ruby', 'go', 'golang', 'rust'].some(x => t.includes(x))) return <Code2 size={14} />;
    if (t === 'c') return <Code2 size={14} />; // Only match exact 'c' after other c-containing terms
    
    // Frameworks & Libraries
    if (['django', 'flask', 'spring', 'laravel', 'rails', '.net', 'dotnet'].some(x => t.includes(x))) return <Layers size={14} />;
    
    // Soft Skills - People & Thinking
    if (['teamwork', 'team work', 'collaboration', 'communication', 'leadership'].some(x => t.includes(x))) return <Users size={14} />;
    if (['problem solving', 'critical thinking', 'analytical'].some(x => t.includes(x))) return <BrainCog size={14} />;
    
    // Office & Documentation
    if (['word', 'excel', 'powerpoint', 'outlook', 'teams', 'microsoft office', 'ms office'].some(x => t.includes(x))) return <FileText size={14} />;
    if (['documentation', 'technical writing', 'markdown'].some(x => t.includes(x))) return <BookOpen size={14} />;
    
    // Testing & DevOps
    if (['testing', 'jest', 'mocha', 'cypress', 'selenium', 'ci/cd', 'devops'].some(x => t.includes(x))) return <Wrench size={14} />;

    return <Settings size={14} />; // fallback icon
  };

  const badgeColor = colors[getColorByTech(tech)] || colors['gray'];

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border font-medium ${sizes[size]} ${badgeColor}`}>
      {getIconByTech(tech)}
      {tech}
    </span>
  );
};

export default TechBadge;