import React from 'react';
import {
  Code2, Database, Settings, Paintbrush, Terminal, BrainCog, 
  FileText, FileCode2, Globe, Cpu, Users
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
  };

  const getColorByTech = (tech) => {
    const t = tech.toLowerCase();
    if (['javascript', 'jquery', 'php', 'sql', 'mysql'].some(x => t.includes(x))) return 'blue';
    if (['html', 'css', 'bootstrap'].some(x => t.includes(x))) return 'orange';
    if (['firebase', 'git', 'linux'].some(x => t.includes(x))) return 'green';
    if (['sfml', 'game'].some(x => t.includes(x))) return 'pink';
    if (['photoshop', 'illustrator', 'figma'].some(x => t.includes(x))) return 'teal';
    if (['microsoft','word', 'excel', 'powerpoint'].some(x => t.includes(x))) return 'yellow';
    if (['time', 'problem', 'team', 'communication', 'adapt', 'critical'].some(x => t.includes(x))) return 'gray';
    if (['c++', 'c', 'java', 'kotlin', 'python'].some(x => t.includes(x))) return 'purple';
    return color; // fallback to provided or default 'gray'
  };

  const getIconByTech = (tech) => {
    const t = tech.toLowerCase();
    if (['sql', 'mysql', 'firebase'].some(x => t.includes(x))) return <Database size={14} />;
    if (['git', 'linux'].some(x => t.includes(x))) return <Terminal size={14} />;
    if (['photoshop', 'illustrator', 'figma'].some(x => t.includes(x))) return <Paintbrush size={14} />;
    if (['bootstrap', 'jquery', 'html', 'css'].some(x => t.includes(x))) return <FileCode2 size={14} />;
    if (['javascript', 'php'].some(x => t.includes(x))) return <Globe size={14} />;
    if (['team', 'communication', 'adapt'].some(x => t.includes(x))) return <Users size={14} />;
    if (['problem', 'critical', 'thinking'].some(x => t.includes(x))) return <BrainCog size={14} />;
    if (['word', 'excel', 'powerpoint'].some(x => t.includes(x))) return <FileText size={14} />;
    if (['game', 'sfml'].some(x => t.includes(x))) return <Cpu size={14} />;
    if (['c++', 'c', 'java', 'kotlin', 'python'].some(x => t.includes(x))) return <Code2 size={14} />;


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
