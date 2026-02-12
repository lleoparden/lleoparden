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
        longDescription: `SONiC-GUI is a large-scale, production-oriented project designed to simplify and modernize 
  SONiC network administration. Its foundation is a React-based graphical interface paired with a modular FastAPI backend, 
  enabling real-time monitoring, VLAN and port management, and system health visualization.  

  In addition to the GUI, SONiC-GUI integrates a custom Gemini-powered chatbot that allows administrators to 
  perform operations through natural language. Tasks such as creating VLANs, checking port states, or retrieving 
  device health can be triggered via conversational commands, making network management faster and more intuitive.  

  The backend leverages Redis for real-time state management, TinyDB for lightweight persistence, and secure 
  SSH communication. SONiC-GUI also incorporates CI/CD pipelines with Docker and GitHub Actions, as well as 
  exploratory integrations with LangChain and MCP, extending it toward next-generation network automation.`,
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
          'Graphical dashboard for SONiC administration',
          'Authentication with WebSockets and JWT tokens',
          'Real-time operational and administrative status monitoring',
          'VLAN management with full CRUD operations',
          'Port operations with live device feedback',
          'System health metrics (speed, usage, temperature, fans, PSU)',
          'Gemini-powered chatbot for natural language operations',
          'FastAPI backend with Redis and TinyDB integration',
          'CI/CD pipelines using Docker and GitHub Actions',
          'Experimental AI automation via LangChain and MCP'
        ],
        challenges: [
          'Synchronizing real-time networking data with frontend components',
          'Ensuring secure SSH and WebSocket communications',
          'Balancing lightweight persistence (TinyDB) with real-time needs (Redis)',
          'Integrating Gemini chatbot to safely trigger device operations from natural language',
          'Building scalable modular backend endpoints with FastAPI',
          'Experimenting with emerging AI frameworks (LangChain, MCP) in production-like systems'
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
