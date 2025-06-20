import React from 'react';
import {
  Code2, Database, Settings, Paintbrush, Terminal, BrainCog, 
  FileText, FileCode2, Globe, Cpu, Users, Monitor, Package,
  Wrench, Layers, GitBranch, BookOpen, Smartphone, Shield, Cloud,
  Bell, Lock, Zap, Layout, Workflow, Lightbulb, Target, Clock
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

    // PROGRAMMING LANGUAGES - Purple
    if (['javascript', 'typescript', 'python', 'java', 'kotlin', 'c++', 'cplusplus', 'c#', 'csharp', 'php', 'ruby', 'go', 'golang', 'rust', 'swift', 'objective-c', 'json', 'xml'].some(x => t.includes(x))) return 'purple';
    if (t === 'c') return 'purple';

    // WEB TECHNOLOGIES - Blue
    if (['html', 'html5', 'css', 'css3', 'sass', 'scss', 'less', 'tailwind', 'tailwind css', 'bootstrap', 'material-ui', 'chakra', 'jquery', 'ajax', 'react', 'vue', 'angular', 'node.js', 'vite', 'framer motion', 'mdx'].some(x => t.includes(x))) return 'blue';

    // DATABASES & DATA - Green
    if (['mysql', 'postgresql', 'postgres', 'sqlite', 'mongodb', 'redis', 'firebase', 'firebase realtime db', 'firestore', 'firebase auth', 'sql', 'nosql', 'local json storage', 'database design'].some(x => t.includes(x))) return 'green';

    // DEVOPS & INFRASTRUCTURE - Orange
    if (['docker', 'kubernetes', 'jenkins', 'github actions', 'ci/cd', 'aws', 'azure', 'gcp', 'heroku', 'vercel', 'netlify', 'nginx', 'apache', 'tomcat', 'linux', 'ubuntu', 'debian', 'centos', 'bash', 'shell', 'firebase console'].some(x => t.includes(x))) return 'orange';

    // VERSION CONTROL - Red
    if (['git', 'github', 'gitlab', 'bitbucket', 'svn'].some(x => t.includes(x))) return 'red';

    // IDES & EDITORS - Indigo
    if (['visual studio code', 'vscode', 'vs code', 'visual studio', 'intellij', 'intellij idea', 'pycharm', 'webstorm', 'phpstorm', 'eclipse', 'netbeans', 'atom', 'sublime', 'vim', 'neovim', 'emacs', 'nano', 'xcode', 'android studio', 'jupyter notebook'].some(x => t.includes(x))) return 'indigo';

    // DESIGN & CREATIVE TOOLS - Pink
    if (['photoshop', 'adobe photoshop', 'illustrator', 'adobe illustrator', 'indesign', 'after effects', 'adobe after effects', 'premiere pro', 'adobe premiere pro', 'lightroom', 'xd', 'adobe xd', 'animate', 'media encoder', 'bridge', 'character animator', 'acrobat', 'adobe', 'figma'].some(x => t.includes(x))) return 'pink';

    // FRAMEWORKS & LIBRARIES - Cyan
    if (['django', 'flask', 'fastapi', 'spring', 'laravel', 'symfony', 'rails', '.net', 'dotnet', 'express', 'nextjs', 'nuxt', 'gatsby', 'sfml', 'scikit-learn', 'pandas', 'numpy', 'ensemble learning', 'tkinter gui integration', 'tkinter'].some(x => t.includes(x))) return 'cyan';

    // OFFICE & PRODUCTIVITY - Yellow
    if (['microsoft office', 'ms office', 'word', 'excel', 'powerpoint', 'outlook', 'teams', 'google workspace', 'sheets', 'docs', 'slides'].some(x => t.includes(x))) return 'yellow';

    // GAME DEVELOPMENT - Teal
    if (['unity', 'unreal', 'godot', 'sfml', 'opengl', 'directx', 'game development', 'game design', 'blender', '3ds max'].some(x => t.includes(x))) return 'teal';

    // TESTING - Green
    if (['jest', 'mocha', 'cypress', 'selenium', 'junit', 'pytest', 'testing', 'unit testing', 'integration testing', 'e2e testing'].some(x => t.includes(x))) return 'green';

    // SOFT SKILLS & ANALYSIS - Gray
    if (['teamwork', 'team work', 'collaboration', 'communication', 'leadership', 'project management', 'agile', 'scrum', 'kanban', 'problem solving', 'problem-solving', 'critical thinking', 'analytical', 'time management', 'organization', 'adaptability', 'team collaboration', 'agile practices', 'content creation', 'media outreach'].some(x => t.includes(x))) return 'gray';

    // MOBILE DEV & NOTIFICATIONS - Orange
    if (['android', 'android (xml + kotlin)', 'ios', 'react native', 'flutter', 'xamarin', 'ionic', 'push notifications'].some(x => t.includes(x))) return 'orange';

    // PACKAGE MANAGERS - Cyan
    if (['npm', 'yarn', 'pip', 'composer', 'maven', 'gradle', 'webpack', 'vite', 'rollup'].some(x => t.includes(x))) return 'cyan';
    
    // COMPUTER SCIENCE DOMAINS - Indigo
    if (['software development', 'information technology', 'it', 'artificial intelligence', 'ai', 'machine learning', 'deep learning', 'cybersecurity', 'security', 'networking', 'cloud computing', 'data science', 'data analytics', 'big data', 'object-oriented programming', 'oop', 'algorithms', 'data structures', 'end-to-end encryption'].some(x => t.includes(x))) return 'indigo';

    return color;
  };

  const getIconByTech = (tech) => {
    const t = tech.toLowerCase();

    if (['mysql', 'postgresql', 'postgres', 'sqlite', 'mongodb', 'redis', 'firebase', 'firebase realtime db', 'firestore', 'sql', 'nosql', 'database design', 'data structures', 'data science', 'data analytics', 'big data'].some(x => t.includes(x))) return <Database size={14} />;
    if (['git', 'github', 'gitlab', 'bitbucket'].some(x => t.includes(x))) return <GitBranch size={14} />;
    if (['linux', 'ubuntu', 'bash', 'shell', 'terminal', 'docker', 'kubernetes'].some(x => t.includes(x))) return <Terminal size={14} />;
    if (['npm', 'yarn', 'pip', 'composer', 'maven', 'gradle'].some(x => t.includes(x))) return <Package size={14} />;
    if (['visual studio code', 'vscode', 'vs code', 'visual studio', 'intellij', 'intellij idea', 'pycharm', 'webstorm', 'phpstorm', 'eclipse', 'netbeans', 'atom', 'sublime', 'vim', 'neovim', 'emacs', 'xcode', 'android studio', 'jupyter notebook'].some(x => t.includes(x))) return <Monitor size={14} />;
    if (['photoshop', 'adobe photoshop', 'illustrator', 'adobe illustrator', 'indesign', 'after effects', 'adobe after effects', 'premiere pro', 'adobe premiere pro', 'lightroom', 'xd', 'adobe xd', 'animate', 'media encoder', 'bridge', 'character animator', 'acrobat', 'adobe', 'figma'].some(x => t.includes(x))) return <Paintbrush size={14} />;
    if (['html', 'css', 'bootstrap', 'tailwind', 'tailwind css', 'sass', 'scss', 'less'].some(x => t.includes(x))) return <FileCode2 size={14} />;
    if (['javascript', 'typescript', 'php', 'react', 'vue', 'angular', 'jquery'].some(x => t.includes(x))) return <Globe size={14} />;
    if (['android', 'android (xml + kotlin)', 'ios', 'react native', 'flutter', 'swift', 'kotlin'].some(x => t.includes(x))) return <Smartphone size={14} />;
    if (['unity', 'unreal', 'godot', 'sfml', 'opengl', 'directx', 'game'].some(x => t.includes(x))) return <Cpu size={14} />;
    if (['python', 'java', 'c++', 'cplusplus', 'c#', 'csharp', 'ruby', 'go', 'golang', 'rust', 'json', 'xml'].some(x => t.includes(x))) return <Code2 size={14} />;
    if (t === 'c') return <Code2 size={14} />;
    if (['django', 'flask', 'spring', 'laravel', 'rails', '.net', 'dotnet', 'scikit-learn', 'pandas', 'numpy', 'ensemble learning'].some(x => t.includes(x))) return <Layers size={14} />;
    if (['teamwork', 'team work', 'collaboration', 'communication', 'leadership', 'team collaboration'].some(x => t.includes(x))) return <Users size={14} />;
    if (['problem solving', 'problem-solving', 'critical thinking', 'analytical', 'artificial intelligence', 'ai', 'machine learning', 'deep learning', 'algorithms'].some(x => t.includes(x))) return <BrainCog size={14} />;
    if (['word', 'excel', 'powerpoint', 'outlook', 'teams', 'microsoft office', 'ms office'].some(x => t.includes(x))) return <FileText size={14} />;
    if (['documentation', 'technical writing', 'markdown', 'mdx'].some(x => t.includes(x))) return <BookOpen size={14} />;
    if (['testing', 'jest', 'mocha', 'cypress', 'selenium', 'ci/cd', 'devops'].some(x => t.includes(x))) return <Wrench size={14} />;
    if (['media outreach', 'content creation', 'financial analysis', 'data analysis', 'research', 'storytelling', 'digital outreach', 'presentation'].some(x => t.includes(x))) return <FileText size={14} />;
    if (['software development', 'object-oriented programming', 'oop'].some(x => t.includes(x))) return <Code2 size={14} />;
    if (['information technology', 'it', 'networking'].some(x => t.includes(x))) return <Monitor size={14} />;
    if (['cybersecurity', 'security', 'end-to-end encryption'].some(x => t.includes(x))) return <Shield size={14} />;
    if (['cloud computing', 'firebase console'].some(x => t.includes(x))) return <Cloud size={14} />;
    if (['push notifications'].some(x => t.includes(x))) return <Bell size={14} />;
    if (['firebase auth', 'local json storage'].some(x => t.includes(x))) return <Lock size={14} />;
    if (['vite', 'framer motion'].some(x => t.includes(x))) return <Zap size={14} />;
    if (['tkinter gui integration', 'tkinter'].some(x => t.includes(x))) return <Layout size={14} />;
    if (['agile practices', 'agile'].some(x => t.includes(x))) return <Workflow size={14} />;
    if (['adaptability'].some(x => t.includes(x))) return <Lightbulb size={14} />;
    if (['time management'].some(x => t.includes(x))) return <Clock size={14} />;
    
    return <Settings size={14} />;
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