import sonicGuiImage from '../assets/images/projects/sonic-gui.png';
// import jobTrackerImage from '../assets/images/projects/job-tracker.png';
// import aiPortfolioImage from '../assets/images/projects/ai-portfolio.png';
import bikoParkImage from '../assets/images/projects/biko-park.png';
import chessImage from '../assets/images/projects/oop-chess.png';
import bubbleImage from '../assets/images/projects/bubble.png';
import sortImage from '../assets/images/projects/sort.png';
import memeImage from '../assets/images/projects/2oolameme.png';
import modelImage from '../assets/images/projects/model.png';
import fosImage from '../assets/images/projects/fos.png';
import { te } from 'date-fns/locale';

export const loadProject = async (slug) => {
  try {
    const projects = {
      'sonic-gui': {
        slug: 'sonic-gui',
        title: 'SONiC-GUI',
        description: 'Graphical and AI-assisted management system for the SONiC network operating system.',
        longDescription: `SONiC-GUI is a production-oriented network management platform built to modernize administration of SONiC-based switches. 
The system combines a modular FastAPI backend with a React-based interface to enable structured VLAN/port configuration, 
real-time operational monitoring, and system health visualization.const projectStyle = {  primaryColor: '#6366f1',  secondaryColor: '#a5b4fc',  textOnPrimary: '#ffffff',  textOnSecondary: '#ffffff',  background: '#18181b',  cardBackground: '#18181b',  cardBorder: '#6366f1'};const createProject = (project) => ({ ...projectStyle, ...project });const featuredProjects = [  createProject({    slug: 'trustflow',    title: 'TrustFlow',    ongoing: true,    description: 'A product I co-own and help build end to end alongside the project’s other founder, contributing across product features and UI/UX.',    longDescription: 'TrustFlow is a product I co-own and help build end to end alongside the project’s other founder. My role combines product and engineering responsibility, contributing across product features and UI/UX as the product evolves.',    technologies: ['Product Development', 'UI/UX', 'Software Development'],    github: 'https://github.com/abyssrift/TrustFlow',    features: ['End-to-end product development', 'Product feature development', 'UI/UX contribution'],    challenges: ['Balancing product decisions with implementation', 'Evolving product features alongside the project’s other founder']  }),  createProject({    slug: 'local-rag-system',    title: 'Local RAG System',    description: 'Containerized Retrieval-Augmented Generation system for PDF/DOCX ingestion and natural-language querying through a FastAPI query API.',    longDescription: 'A containerized Retrieval-Augmented Generation system for PDF and DOCX ingestion and natural-language querying. The system handles document parsing, chunking, embeddings, vector retrieval, and LLM-based answers exposed through a FastAPI query API.',    technologies: ['Python', 'FastAPI', 'ChromaDB', 'Ollama', 'Docker'],    github: 'https://github.com/lleoparden/RAG-NLP-project',    features: ['PDF and DOCX ingestion', 'Document parsing and chunking', 'Embeddings and vector retrieval', 'FastAPI query API'],    challenges: ['Structuring a local document-query workflow', 'Connecting ingestion, retrieval, and LLM-based answers']  }),  createProject({    slug: 'job-tracker',    title: 'Job Application Tracking System',    ongoing: true,    description: 'Multi-platform job-application tracker spanning web, mobile, and a browser extension, using FastAPI and Firebase.',    longDescription: 'A multi-platform job-application tracker spanning web, mobile, and a browser extension. It uses a unified FastAPI backend with Firebase Authentication and Firestore, and includes application status tracking, filtering, analytics, CSV/JSON import-export, and in-progress Gmail-based status automation.',    technologies: ['React Native', 'FastAPI', 'Firebase'],    github: 'https://github.com/lleoparden/job-tracker',    features: ['Web, mobile, and browser-extension interfaces', 'Firebase Authentication and Firestore', 'Status tracking, filtering, and analytics', 'CSV/JSON import-export'],    challenges: ['Maintaining a unified backend across platforms', 'Planning Gmail-based status automation']  }),  createProject({    slug: 'sonic-gui',    title: 'SONiC-GUI',    team_project: true,    description: 'AI-assisted network-management system for SONiC OS, combining React, FastAPI, Redis, WebSockets, SSH, JWT, and an LLM-powered chatbot.',    longDescription: 'An AI-assisted network-management system for SONiC OS. The project combines a React interface with FastAPI, Redis, WebSockets, SSH and JWT-secured backend access. It includes a Gemini API and LangChain-based chatbot for exploring natural-language network-management workflows, with Docker and CI/CD tooling.',    technologies: ['React', 'FastAPI', 'Redis', 'WebSockets', 'Docker'],    github: 'https://github.com/omaaartamer/SONiC-GUI-Frontend',    github2: 'https://github.com/omaaartamer/SONiC-GUI-Backend',    features: ['Real-time device monitoring', 'VLAN and port CRUD workflows', 'SSH and JWT-secured backend access', 'Gemini API and LangChain chatbot', 'Docker and CI/CD tooling'],    challenges: ['Connecting network-management workflows to a user-facing interface', 'Exploring natural-language interaction with safe network actions']  }),  createProject({    slug: 'olympus',    title: 'Olympus',    ongoing: true,    description: 'Ongoing, currently paused, self-hosted local AI stack integrating Hermes, Odysseus, and Jarvis through a native orchestration layer.',    longDescription: 'Olympus is an ongoing self-hosted local AI stack integrating Hermes, Odysseus, and Jarvis through a native orchestration layer. It is built around single-GPU local-model workflows and is currently paused, with work expected to resume.',    technologies: ['Python', 'JavaScript', 'Ollama', 'Docker'],    github: 'https://github.com/lleoparden/olympus',    features: ['Self-hosted local AI stack', 'Native orchestration layer', 'Single-GPU local-model workflows'],    challenges: ['Integrating multiple local AI components', 'Designing a cohesive local orchestration workflow']  }),  createProject({    slug: 'chat-application',    title: 'Kotlin Chat Application',    description: 'Android chat application with local persistence, optional Firebase synchronization, group chats, media sharing, voice messages, theming, and offline support.',    longDescription: 'An Android chat application built with local persistence and optional Firebase synchronization. It includes group chats, stories, media uploads, voice messages, theming, and offline support.',    technologies: ['Kotlin', 'Android', 'Firebase'],    github: 'https://github.com/lleoparden/Chat_Application',    features: ['Local persistence and offline support', 'Optional Firebase synchronization', 'Group chats, stories, media, and voice messages'],    challenges: ['Maintaining a useful offline-first chat experience', 'Combining local data with optional cloud synchronization']  }),  createProject({    slug: 'oop-chess',    title: 'OOP Chess',    team_project: true,    description: 'JavaFX chess application built with object-oriented design and an AI opponent using Minimax with alpha-beta pruning.',    longDescription: 'A JavaFX chess application built around object-oriented design, featuring an AI opponent powered by Minimax search with alpha-beta pruning.',    technologies: ['Java', 'JavaFX', 'Minimax', 'Alpha-Beta Pruning'],    github: 'https://github.com/lleoparden/oop-chess',    features: ['JavaFX interface', 'Object-oriented chess implementation', 'Minimax AI with alpha-beta pruning'],    challenges: ['Representing chess rules through object-oriented design', 'Building an AI opponent with game-tree search']  }),  createProject({    slug: 'biko-park',    title: 'Biko Park',    team_project: true,    description: 'A seven-member team project: a multiplayer puzzle-platformer with cooperative gameplay.',    longDescription: 'Biko Park is a seven-member team project: a multiplayer puzzle-platformer with cooperative gameplay.',    technologies: ['C++', 'SFML'],    github: 'https://github.com/lleoparden/Biko_Park',    features: ['Multiplayer puzzle-platformer gameplay', 'Cooperative game design'],    challenges: ['Collaborating in a seven-member team project']  })];const supportingProjects = [  createProject({    slug: 'odysseus-contributor',    title: 'Odysseus — Open-Source Contributor',    description: 'Selected open-source contributions to an AI workspace project, including a merged ArrowUp-to-recall-last-message improvement and a Brain/Cookbook drag-bug fix.',    longDescription: 'Selected open-source contributions to Odysseus, an AI workspace project. These include a merged improvement that lets users press ArrowUp in an empty composer to recall their last message and a Brain/Cookbook drag-bug fix related to an ES module root cause.',    technologies: ['Python', 'Open Source'],    github: 'https://github.com/odysseus-dev/odysseus',    features: ['Merged ArrowUp message-recall improvement', 'Brain/Cookbook drag-bug fix'],    challenges: ['Investigating and resolving an ES module root cause']  }),  createProject({    slug: 'sentinelcheck',    title: 'SentinelCheck',    ongoing: true,    description: 'Planned graduation capstone by a six-person team: an anti-scam application concept for QR codes, SMS/WhatsApp, calls, and payment screenshots.',    longDescription: 'SentinelCheck is a planned graduation capstone by a six-person team. It is an anti-scam application concept intended to help identify fraud across QR codes, SMS and WhatsApp messages, calls, and payment screenshots. Its planned differentiator is scam-focused NLP support for Egyptian Arabic and Arabizi.',    technologies: ['React Native', 'Supabase', 'Hugging Face Spaces'],    features: ['Planned multi-input scam detection', 'Planned Egyptian Arabic and Arabizi scam-NLP support'],    challenges: ['Concept-stage graduation-capstone planning']  }),  createProject({    slug: 'fos-operating-system',    title: 'FOS Educational OS',    team_project: true,    description: 'Educational operating-system work in C covering memory allocation, page-fault handling, paging, and synchronization primitives.',    longDescription: 'Educational operating-system work in C covering memory allocation, page-fault handling, paging, and synchronization primitives.',    technologies: ['C', 'Paging', 'Synchronization'],    github: 'https://github.com/lleoparden/FOS_TEMPLATE',    features: ['Memory allocation', 'Page-fault handling', 'Paging', 'Synchronization primitives'],    challenges: ['Working with low-level operating-system concepts']  })];export const loadProject = async (slug) => {  return [...featuredProjects, ...supportingProjects].find((project) => project.slug === slug) || null;};export const loadAllProjects = () => featuredProjects;export const loadSmallProjects = () => supportingProjects.map(({ features, challenges, longDescription, primaryColor, secondaryColor, textOnPrimary, textOnSecondary, background, cardBackground, cardBorder, ...project }) => ({  ...project,  category: project.slug === 'odysseus-contributor' ? 'Open Source' : project.slug === 'sentinelcheck' ? 'Planned / Concept Stage' : 'Systems Programming'}));

The backend is architected using a layered service design that separates routing, business logic, and persistence concerns, 
improving maintainability and scalability. Communication with SONiC devices occurs through RESTCONF and secure SSH channels 
(AsyncSSH), enabling both structured API-driven operations and CLI-based execution.

To enhance performance and reliability, Redis is used for caching frequently accessed network state (ports, VLANs) and 
implementing rate limiting, while TinyDB provides lightweight persistence for user management. 

Beyond traditional GUI functionality, SONiC-GUI integrates an AI-assisted operations layer powered by Gemini 2.5 Flash. 
The system implements a retrieval-augmented workflow using HuggingFace embeddings and ChromaDB to provide contextual 
awareness over SONiC documentation. A tool-based orchestration layer validates and executes safe network actions 
triggered via natural language.

The application is containerized with Docker and supported by GitHub Actions CI pipelines for linting and automated quality checks, 
demonstrating production-ready DevOps practices.`,
        technologies: [
          'Gemini API ',
          'LangChain ',
          'MCP',
          'FastAPI ',
          'Redis',
          'TinyDB',
          'React ',
          'WebSockets',
          'SSH ',
          'Docker', 'GitHub Actions '
        ],
        github: 'https://github.com/omaaartamer/SONiC-GUI-Frontend',
        github2: 'https://github.com/omaaartamer/SONiC-GUI-Backend',
        features: [
  'Role-based authentication with JWT and protected API routes',
  'Layered FastAPI backend with structured service separation',
  'Real-time VLAN and port CRUD operations via RESTCONF',
  'Secure CLI execution using AsyncSSH',
  'Redis-backed caching and rate limiting for performance and protection',
  'Operational and administrative port status monitoring',
  'System health visualization (CPU, memory, temperature, PSU, fan metrics)',
  'Retrieval-Augmented Generation (RAG) chatbot using HuggingFace embeddings + ChromaDB',
  'Tool-orchestrated Gemini integration for safe natural-language network actions',
  'Dockerized deployment with CI automation via GitHub Actions'
],
        challenges: [
  'Maintaining data consistency between real-time switch state and frontend UI components',
  'Designing secure SSH and RESTCONF communication channels without exposing device credentials',
  'Balancing Redis caching with source-of-truth switch state to prevent stale network configurations',
  'Preventing unsafe or malformed AI-generated network commands through validation layers',
  'Structuring backend services for extensibility while avoiding tight coupling',
  'Managing async concurrency and I/O-bound operations in FastAPI',
  'Experimenting with emerging AI orchestration frameworks (LangChain, MCP) while preserving system stability'
],
        primaryColor: '#fd6a1bff',
        secondaryColor: '#fd6a1bff',
        textOnPrimary: '#ffffff',
        textOnSecondary: '#ffffff',
        background: '#ffffffff',
        cardBackground: '#ffffffff',
        cardBorder: '#fd6a1bff',
        image: sonicGuiImage
      },
      'fos-operating-system': {
  slug: 'fos-operating-system',
  title: 'FOS Educational Operating System',
  description: 'Modular educational operating system built from bootloader to user space, implementing core kernel subsystems and memory management.',
  longDescription: `The FOS Operating System project is a full educational kernel built upon the FOS framework, 
  designed to explore and implement the core mechanisms behind modern operating systems. 
  Developed in C and targeting x86 architecture, the system walks through the complete OS lifecycle — 
  from bootloading and low-level initialization to virtual memory management, scheduling, and user–kernel isolation.

  The bootloader initializes CPU state and memory, loads the kernel into memory, and transfers execution control 
  to the kernel initialization layer. The kernel then configures paging, interrupt handling, trap management, 
  scheduling policies, and launches user-mode programs compiled within the system.

  My primary contributions focused on dynamic kernel memory allocation and advanced page fault handling. 
  I designed and integrated memory allocation mechanisms within the kernel heap and implemented fault handling logic 
  across trap handlers and virtual memory layers to ensure safe recovery, isolation, and correctness under invalid memory access scenarios.

  The system includes working set management, pagefile interaction, synchronization primitives (spinlocks, semaphores, sleep locks), 
  privilege-level separation, and a structured system call interface enabling controlled communication between user and kernel space.

  The entire OS was compiled with GCC and tested under the Bochs emulator, ensuring correct subsystem integration, 
  concurrency safety, and modular extensibility across all kernel layers.`,
  technologies: [
    'C',
    'x86 Architecture',
    'GCC',
    'Bochs Emulator',
    'Paging',
    'Virtual Memory',
    'System Calls',
    'CPU Scheduling',
    'Synchronization Primitives'
  ],
  github: 'https://github.com/lleoparden/FOS_TEMPLATE',
  features: [
    'Custom bootloader and low-level CPU initialization',
    'Kernel heap with dynamic memory allocation',
    'User heap allocator and shared memory system',
    'Virtual memory with paging and working set management',
    'Advanced page fault handling and trap management',
    'CPU scheduling and context switching',
    'Synchronization primitives (spinlocks, semaphores, sleep locks)',
    'System call interface for user–kernel communication',
    'Privilege-level isolation between kernel and user space',
    'Comprehensive testing and modular subsystem validation'
  ],
  challenges: [
    'Designing safe and efficient dynamic memory allocation inside kernel space',
    'Implementing correct page fault handling without breaking isolation guarantees',
    'Managing working sets and page replacement policies',
    'Synchronizing concurrent kernel operations using low-level primitives',
    'Ensuring correct integration between bootloader, memory manager, and scheduler',
    'Debugging low-level faults using Bochs and kernel tracing techniques'
  ],
  primaryColor: '#5a8ad8',
  secondaryColor: '#5a8ad8',
  textOnPrimary: '#ffffff',
  textOnSecondary: '#ffffff',
  background: '#ffffffff',
  cardBackground: '#ffffffff',
  cardBorder: '#5a8ad8',
  image: fosImage
},

      'job-tracker': {
        slug: 'job-tracker',
        title: 'Job Application Tracker',
        description: 'Cross-platform system to track and manage job applications with web, mobile, and extension support.',
        longDescription: 'The Job Application Tracking System helps users manage and organize their job hunt across multiple platforms. It includes a web app, mobile app, and browser extension, all powered by a FastAPI backend and Firebase (Auth + Firestore). Users can save jobs, mark status updates, and analyze application trends from a central dashboard.',
        technologies: ['React', 'TypeScript', 'Vite', 'FastAPI', 'Firebase Auth', 'Firestore', 'React Native'],
        primaryColor: '#20aae4',
        secondaryColor: '#20aae4',
        textOnPrimary: '#ffffff',
        textOnSecondary: '#ffffff',
        background: '#ffffff',
        cardBackground: '#ffffff',
        cardBorder: '#20aae4',
        // image: jobTrackerImage,
        github: 'https://github.com/lleoparden/job-tracker',
        features: [
          'Centralized job tracking dashboard',
          'Web app, mobile app, and browser extension',
          'Firebase authentication and Firestore backend',
          'Status updates with filters and search',
          'Export/Import functionality (CSV/JSON)',
          'Analytics and success rate visualization'
        ],
        challenges: [
          'Designing a unified backend for three platforms',
          'Integrating Firebase Auth securely with FastAPI',
          'Building a seamless browser extension workflow',
          'Synchronizing real-time updates across platforms',
          'Planning Gmail integration for auto-status detection'
        ]
      },

      'ai-portfolio-builder': {
        slug: 'ai-portfolio-builder',
        title: 'AI Portfolio Builder',
        description: 'An AI-powered tool that generates personalized developer portfolios.',
        longDescription: 'The AI Portfolio Builder is a project that leverages AI to automatically generate and customize developer portfolios. Users provide details such as skills, projects, and experiences, and the system creates a professional portfolio website with clean design, responsive layout, and content suggestions powered by AI.',
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'FastAPI', 'OpenAI API', 'Firebase'],
        primaryColor: '#8b5cf6',
        secondaryColor: '#8b5cf6',
        textOnPrimary: '#ffffff',
        textOnSecondary: '#ffffff',
        background: '#ffffff',
        cardBackground: '#ffffff',
        cardBorder: '#8b5cf6',
        // image: aiPortfolioImage,
        github: 'https://github.com/lleoparden/ai-portfolio-builder',
        features: [
          'AI-assisted portfolio content generation',
          'Responsive and modern web design',
          'Dynamic project and skill sections',
          'Customizable themes and layouts',
          'FastAPI backend integration with AI models'
        ],
        challenges: [
          'Integrating AI content generation seamlessly',
          'Designing modular templates for portfolio creation',
          'Balancing automation with user customization',
          'Maintaining responsive design across devices',
          'Handling API limits and performance optimizations'
        ]
      },

      'chat-application-bubble': {
        slug: 'chat-application-bubble',
        title: 'Chat Application (Bubble)',
        description: 'A full-featured chat app with real-time messaging, stories, and media sharing.',
        longDescription: 'Bubble is a modern chat application allowing live text and voice messaging, media sharing, group chats, and temporary story features, all built with security and ease-of-use in mind.',
        technologies: ['Kotlin', 'Firebase', 'Firebase Realtime Database', 'Firebase Authentication', 'Android Studio', 'Material Design', 'MVVM Architecture'],
        primaryColor: '#cbbde3',
        secondaryColor: '#09090a',
        textOnPrimary: '#ffffff',
        textOnSecondary: '#2d1810',
        background: '#1a0f0a',
        cardBackground: '#2d1810',
        cardBorder: '#cbbde3',
        image: bubbleImage,
        github: 'https://github.com/lleoparden/Chat_Application',
        demo: 'https://lleoparden.github.io/Bubble_website/',
        features: [
          'Real-time text and voice messaging',
          'Story sharing and group chat features',
          'Firebase integration for auth and storage'
        ],
        challenges: [
          'Implementing real-time syncing with Firebase',
          'Ensuring privacy and secure messaging',
          'Designing intuitive mobile UX'
        ]
      },

      '2ool-a-meme': {
        slug: '2ool-a-meme',
        title: '2ool a Meme App',
        description: 'An app for a meme-based game brand featuring e-commerce and live chat.',
        longDescription: 'The 2ool a Meme app integrates features like a real-time chat room and an e-commerce page, supporting the branding and merchandising of the game brand.',
        technologies: ['Kotlin', 'Firebase', 'Firebase Firestore', 'Firebase Storage', 'Android Studio', 'MVVM Architecture', 'Retrofit', 'Glide'],
        primaryColor: '#20aae4',
        secondaryColor: '#ffffff',
        textOnPrimary: '#ffffff',
        textOnSecondary: '#2d1810',
        background: '#1a0f0a',
        cardBackground: '#2d1810',
        cardBorder: '#20aae4',
        image: memeImage,
        github: 'https://github.com/lleoparden/2ool_a_meme',
        demo: 'https://2oolameme.com/',
        features: [
          'Live chat community features',
          'E-commerce functionality',
          'Firebase backend for auth and data'
        ],
        challenges: [
          'Combining real-time and e-commerce features',
          'Designing for performance across multiple devices',
          'Managing user data securely with Firebase'
        ]
      },

      'biko-park': {
        slug: 'biko-park',
        title: 'Biko Park',
        description: 'A multiplayer puzzle-platformer inspired by Piko Park with unique gameplay twists.',
        longDescription: 'Biko Park is a multiplayer puzzle-platformer game inspired by Piko Park. It introduces fresh mechanics and cooperative gameplay elements, making teamwork essential to progress through levels.',
        technologies: ['C++', 'SFML', 'Object-Oriented Design', 'Visual Studio Code', 'Tiled Map Editor', 'Git'],
        primaryColor: '#f68e4e',
        secondaryColor: '#f7ddcd',
        textOnPrimary: '#ffffff',
        textOnSecondary: '#2d1810',
        background: '#1a0f0a',
        cardBackground: '#2d1810',
        cardBorder: '#f68e4e',
        image: bikoParkImage,
        github: 'https://github.com/lleoparden/Biko_Park',
        demo: 'https://za3boot-productions.itch.io/biko-park',
        youtubeVideo: 'https://youtu.be/xz7O9LFeNxU',
        features: [
          'Multiplayer gameplay with synchronized puzzles',
          'Inspired by classic co-op puzzle design',
          'Unique level mechanics and interactions'
        ],
        challenges: [
          'Handling multiplayer coordination and input',
          'Designing fair and engaging level challenges',
          'Polishing player interactions for a smooth experience'
        ]
      },

      'oop-chess': {
        slug: 'oop-chess',
        title: 'OOP Chess',
        description: 'A chess game with a GUI and an additional chaos mode.',
        longDescription: 'OOP Chess is a fully object-oriented implementation of chess in Java, featuring a clean GUI and an alternate “chaos mode” that introduces unpredictable events during gameplay.',
        technologies: ['Java', 'Java Swing', 'Object-Oriented Programming', 'IntelliJ IDEA', 'Design Patterns'],
        primaryColor: '#729453',
        secondaryColor: '#eaebd0',
        textOnPrimary: '#ffffff',
        textOnSecondary: '#2d1810',
        background: '#1a0f0a',
        cardBackground: '#2d1810',
        cardBorder: '#729453',
        image: chessImage,
        github: 'https://github.com/lleoparden/oop-chess',
        features: [
          'Standard and chaos mode gameplay',
          'Interactive GUI with move validation',
          'Modular OOP design'
        ],
        challenges: [
          'Managing complex game rules in OOP architecture',
          'Implementing chaos mechanics without breaking core rules',
          'Creating a user-friendly JavaFX interface',
          'Implementing the bot using alpha beta pruning minmax'
        ]
      },

      'obesity-prediction-model': {
        slug: 'obesity-prediction-model',
        title: 'Obesity Prediction Model',
        description: 'A desktop app using machine learning to predict obesity levels based on user input.',
        longDescription: 'This application collects user data (age, weight, height, lifestyle habits) via a Tkinter GUI, calculates BMI, and uses a trained machine learning model to predict obesity levels. It features a clean tabbed UI and ensemble prediction system built in Python.',
        technologies: ['Python', 'Tkinter', 'CustomTkinter', 'Scikit-learn', 'Pandas', 'Matplotlib'],
        primaryColor: '#b6b6ff',
        secondaryColor: '#b6b6ff',
        textOnPrimary: '#b6b6ff',
        textOnSecondary: '#b6b6ff',
        background: '#b6b6ff',
        cardBackground: '#b6b6ff',
        cardBorder: '#b6b6ff',
        image: modelImage,
        github: 'https://github.com/lleoparden/Obesity_Prediction_model',
        features: [
          'Multi-tab interface for user input',
          'BMI calculator with real-time updates',
          'Machine learning model using ensemble techniques',
          'Offline and lightweight desktop app',
          'User-friendly interface with predictions displayed clearly'
        ],
        challenges: [
          'Designing an intuitive yet compact GUI with Tkinter',
          'Preprocessing user inputs correctly for prediction',
          'Integrating scikit-learn model into a GUI app',
          'Ensuring accuracy across different input ranges'
        ]
      },

      'sorting-visualizer': {
        slug: 'sorting-visualizer',
        title: 'Sorting Algorithm Visualizer',
        description: 'A C++ application that visually demonstrates how common sorting algorithms work.',
        longDescription: 'The Sorting Algorithm Visualizer is a desktop application that helps learners understand how different sorting algorithms function through animated visual feedback.',
        technologies: ['C++', 'SFML', 'Object-Oriented Design', 'Visual Studio Code', 'Algorithm Design', 'Git'],
        primaryColor: '#39ff14',
        secondaryColor: '#00ff00',
        textOnPrimary: '#00ff00',
        textOnSecondary: '#2d1810',
        background: '#1a0f0a',
        cardBackground: '#111111',
        cardBorder: '#00ff00',
        image: sortImage,
        github: 'https://github.com/lleoparden/sorting-visualizer',
        features: [
          'Visual representation of sorting algorithms',
          'Supports Bubble Sort, Selection Sort, Insertion Sort, etc.',
          'Real-time bar animations for comparison and swaps',
          'Speed adjustment for animation',
          'Modular code for adding new algorithms'
        ],
        challenges: [
          'Implementing smooth real-time visual updates',
          'Maintaining performance with SFML rendering',
          'Designing reusable sorting logic with animation hooks'
        ]
      }
    };

    return projects[slug] || null;
  } catch (error) {
    console.error('Error loading project:', error);
    return null;
  }
};

export const loadAllProjects = () => {
  return [
    {
      slug: 'sonic-gui',
      title: 'SONiC-GUI',
      team_project: true,
      description: 'Graphical and AI-assisted management system for the SONiC network operating system.',
      technologies: ['React', 'FastAPI', 'Redis'],
      image: sonicGuiImage,
      github: 'https://github.com/omaaartamer/SONiC-GUI-Frontend',
      github2: 'https://github.com/omaaartamer/SONiC-GUI-Backend'
    },
        {
      slug: 'fos-operating-system',
      title: 'FOS Educational Operating System',
      team_project: true,
      description: 'Educational x86 operating system implementing memory management, scheduling, fault handling, and kernel–user isolation.',
      technologies: ['C', 'x86', 'Virtual Memory', 'Paging', 'Scheduling'],
      image: fosImage,
      github: 'https://github.com/lleoparden/FOS_TEMPLATE'
    },
    {
      slug: 'job-tracker',
      ongoing: true,
      title: 'Job Application Tracker',
      description: 'Cross-platform system to manage and track job applications.',
      technologies: ['React', 'FastAPI', 'Firebase'],
      // image: jobTrackerImage,
      github: 'https://github.com/lleoparden/job-tracker'
    },
    {
      slug: 'ai-portfolio-builder',
      ongoing: true,
      title: 'AI Portfolio Builder',
      description: 'AI-powered tool for generating developer portfolios.',
      technologies: ['React', 'FastAPI', 'AI'],
      // image: aiPortfolioImage,
      github: 'https://github.com/lleoparden/ai-portfolio-builder'
    },
    {
      slug: 'chat-application-bubble',
      title: 'Chat Application (Bubble)',
      description: 'A real-time messaging app with stories and media sharing.',
      technologies: ['Kotlin', 'Firebase', 'Android Studio'],
      image: bubbleImage,
      github: 'https://github.com/lleoparden/Chat_Application',
      demo: 'https://lleoparden.github.io/Bubble_website/'
    },
    {
      slug: '2ool-a-meme',
      title: '2ool a Meme App',
      description: 'App for a game brand featuring chat and e-commerce.',
      technologies: ['Kotlin', 'Firebase', 'Android Studio'],
      image: memeImage,
      github: 'https://github.com/lleoparden/2ool_a_meme',
      demo: 'https://2oolameme.com/'
    },
    {
      slug: 'biko-park',
      title: 'Biko Park',
      team_project: true,
      description: 'A multiplayer puzzle-platformer with creative cooperative gameplay.',
      technologies: ['C++', 'SFML', 'Visual Studio Code'],
      image: bikoParkImage,
      github: 'https://github.com/lleoparden/Biko_Park',
      demo: 'https://za3boot-productions.itch.io/biko-park'
    },
    {
      slug: 'oop-chess',
      title: 'OOP Chess',
      team_project: true,
      description: 'A Java-based chess game with chaos mode and OOP design.',
      technologies: ['Java', 'Java Swing', 'IntelliJ IDEA'],
      image: chessImage,
      github: 'https://github.com/lleoparden/oop-chess'
    },
    {
      slug: 'obesity-prediction-model',
      title: 'Obesity Prediction Model',
      team_project: true,
      description: 'A desktop app using machine learning to predict obesity levels based on user input.',
      technologies: ['Python', 'Tkinter', 'Scikit-learn'],
      image: modelImage,
      github: 'https://github.com/lleoparden/Obesity_Prediction_model'
    },
    {
      slug: 'sorting-visualizer',
      title: 'Sorting Algorithm Visualizer',
      description: 'A desktop C++ visual tool for sorting algorithms like bubble and insertion sort.',
      technologies: ['C++', 'SFML', 'Visual Studio Code'],
      image: sortImage,
      github: 'https://github.com/lleoparden/sorting-visualizer'
    }
  ];
};



export const loadSmallProjects = () => {
  return [
    {
      title: 'Tic-Tac-Toe Bot (C++)',
      description: 'Unbeatable C++ Tic-Tac-Toe bot using Minimax with Alpha-Beta pruning.',
      technologies: ['C++', 'Minimax', 'Algorithms'],
      category: 'Algorithms & AI',
      github: 'https://github.com/lleoparden/CPP-Projects/tree/main/tic-tac-toe%20(alpha%20who%20never%20loses)',
    },
    {
      title: 'Tic-Tac-Toe Bot (Java)',
      description: 'Object-oriented Java version of an AI-powered Tic-Tac-Toe bot.',
      technologies: ['Java', 'OOP', 'Algorithms'],
      category: 'Algorithms & AI',
      github: 'https://github.com/lleoparden/Java-Projects',
    },
    {
      title: 'To-Do List App (Java)',
      description: 'A basic desktop task manager app built with Java Swing.',
      technologies: ['Java', 'Swing', 'OOP'],
      category: 'Software Development',
      github: 'https://github.com/lleoparden/Java-Projects',
    },
    {
      title: 'To-Do List App (Kotlin)',
      description: 'Android-based To-Do app using Kotlin and MVVM architecture.',
      technologies: ['Kotlin', 'Android', 'MVVM'],
      category: 'Mobile Development',
      github: 'https://github.com/lleoparden/Kotlin_To-Do_list',
    },
    {
      title: 'Speller (C Spell Checker)',
      description: 'Dictionary-based spell checker implemented in C with hash tables.',
      technologies: ['C', 'DSA', 'Hash Tables'],
      category: 'Algorithms & AI',
      github: 'https://github.com/lleoparden/C-projects',
    },
    {
      title: 'Old Portfolio Website',
      description: 'My original personal portfolio site built with HTML, CSS, and JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web Development',
      github: 'https://github.com/lleoparden/lleoparden.com',
      demo: 'https://lleoparden.github.io/lleoparden.com/'
    }
  ];
};
