export const loadProject = async (slug) => {
  try {
    const projects = {
      'biko-park': {
        slug: 'biko-park',
        title: 'Biko Park',
        description: 'A multiplayer puzzle-platformer inspired by Piko Park with unique gameplay twists.',
        longDescription: 'Biko Park is a multiplayer puzzle-platformer game inspired by Piko Park. It introduces fresh mechanics and cooperative gameplay elements, making teamwork essential to progress through levels.',
        technologies: [
          'C++', 'SFML', 'Object-Oriented Design', 'Visual Studio Code', 'Tiled Map Editor', 'Git'
        ],
        primaryColor: '#f59e0b',
        secondaryColor: '#3b82f6',
        image: '/images/projects/biko-park.png',
        github: 'https://github.com/lleoparden/Biko_Park',
        demo: 'https://za3boot-productions.itch.io/biko-park',
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
        technologies: [
          'Java', 'Java Swing', 'Object-Oriented Programming', 'IntelliJ IDEA', 'Design Patterns'
        ],
        primaryColor: '#6366f1',
        secondaryColor: '#1f2937',
        image: '/images/projects/oop-chess.jpg',
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
      'chat-application-bubble': {
        slug: 'chat-application-bubble',
        title: 'Chat Application (Bubble)',
        description: 'A full-featured chat app with real-time messaging, stories, and media sharing.',
        longDescription: 'Bubble is a modern chat application allowing live text and voice messaging, media sharing, group chats, and temporary story features, all built with security and ease-of-use in mind.',
        technologies: [
          'Kotlin', 'Firebase', 'Firebase Realtime Database', 'Firebase Authentication',
          'Android Studio', 'Material Design', 'MVVM Architecture'
        ],
        primaryColor: '#3b82f6',
        secondaryColor: '#1e293b',
        image: '/images/projects/bubble.jpg',
        github: 'https://github.com/lleoparden/Chat_Application',
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
        technologies: [
          'Kotlin', 'Firebase', 'Firebase Firestore', 'Firebase Storage', 'Android Studio',
          'MVVM Architecture', 'Retrofit', 'Glide'
        ],
        primaryColor: '#ec4899',
        secondaryColor: '#0f172a',
        image: '/images/projects/2ool-a-meme.jpg',
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
      },'sorting-visualizer': {
  slug: 'sorting-visualizer',
  title: 'Sorting Algorithm Visualizer',
  description: 'A C++ application that visually demonstrates how common sorting algorithms work.',
  longDescription: 'The Sorting Algorithm Visualizer is a desktop application that helps learners understand how different sorting algorithms function through animated visual feedback. It supports multiple algorithms like bubble sort, selection sort, insertion sort, and more. The application features bar visualizations that change in real-time as the sorting progresses.',
  technologies: [
    'C++', 'SFML', 'Object-Oriented Design', 'Visual Studio Code', 'Algorithm Design', 'Git'
  ],
  primaryColor: '#9333ea',
  secondaryColor: '#1f2937',
  image: '/images/projects/sorting-visualizer.jpg',
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
      slug: 'biko-park',
      title: 'Biko Park',
      description: 'A multiplayer puzzle-platformer with creative cooperative gameplay.',
      technologies: ['C++', 'SFML', 'Visual Studio Code'],
      image: '/images/projects/biko-park.jpg',
      github: 'https://github.com/lleoparden/Biko_Park',
      demo: 'https://za3boot-productions.itch.io/biko-park'
    },
    {
      slug: 'oop-chess',
      title: 'OOP Chess',
      description: 'A Java-based chess game with chaos mode and OOP design.',
      technologies: ['Java', 'Java Swing', 'IntelliJ IDEA'],
      image: '/images/projects/oop-chess.jpg',
      github: 'https://github.com/lleoparden/oop-chess'
    },
    {
      slug: 'chat-application-bubble',
      title: 'Chat Application (Bubble)',
      description: 'A real-time messaging app with stories and media sharing.',
      technologies: ['Kotlin', 'Firebase', 'Android Studio'],
      image: '/images/projects/bubble.jpg',
      github: 'https://github.com/lleoparden/Chat_Application'
    },
    {
      slug: '2ool-a-meme',
      title: '2ool a Meme App',
      description: 'App for a game brand featuring chat and e-commerce.',
      technologies: ['Kotlin', 'Firebase', 'Android Studio'],
      image: '/images/projects/2ool-a-meme.jpg',
      github: 'https://github.com/lleoparden/2ool_a_meme',
      demo: 'https://2oolameme.com/'
    },{
    slug: 'sorting-visualizer',
  title: 'Sorting Algorithm Visualizer',
  description: 'A desktop C++ visual tool for sorting algorithms like bubble and insertion sort.',
  technologies: ['C++', 'SFML', 'Visual Studio Code'],
  image: '/images/projects/sorting-visualizer.jpg',
  github: 'https://github.com/lleoparden/sorting-visualizer'
}

  ];
};

export const loadSmallProjects = () => {
  return [
    {
      title: 'Weather App',
      description: 'A responsive weather application using OpenWeather API',
      technologies: ['React', 'JavaScript', 'API'],
      category: 'React',
      github: 'https://github.com/yourusername/weather-app',
      demo: 'https://your-weather-app.netlify.app'
    },
    {
      title: 'Task Manager',
      description: 'Simple task management tool with local storage',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      category: 'JavaScript',
      github: 'https://github.com/yourusername/task-manager'
    },
    {
      title: 'Calculator',
      description: 'Scientific calculator with advanced operations',
      technologies: ['Python', 'Tkinter'],
      category: 'Python',
      github: 'https://github.com/yourusername/calculator'
    },
    {
      title: 'Color Palette Generator',
      description: 'Generate beautiful color palettes for design projects',
      technologies: ['React', 'CSS'],
      category: 'React',
      github: 'https://github.com/yourusername/color-generator',
      demo: 'https://your-color-generator.netlify.app'
    },
    {
      title: 'Expense Tracker',
      description: 'Track personal expenses with charts and analytics',
      technologies: ['Vue.js', 'Chart.js'],
      category: 'Vue.js',
      github: 'https://github.com/yourusername/expense-tracker'
    },
    {
      title: 'Random Quote Generator',
      description: 'Get inspired with random quotes and share them',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      category: 'JavaScript',
      github: 'https://github.com/yourusername/quote-generator',
      demo: 'https://your-quotes.netlify.app'
    }
  ];
};