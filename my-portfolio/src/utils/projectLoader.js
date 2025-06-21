import bikoParkImage from '../assets/images/projects/biko-park.png';
import chessImage from '../assets/images/projects/oop-chess.png';
import bubbleImage from '../assets/images/projects/bubble.png';
import sortImage from '../assets/images/projects/sort.png';
import memeImage from '../assets/images/projects/2oolameme.png';
import modelImage from '../assets/images/projects/model.png';

export const loadProject = async (slug) => {
  try {
    const projects = {
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
      },
      'obesity-prediction-model': {
        slug: 'obesity-prediction-model',
        title: 'Obesity Prediction Model',
        description: 'A desktop app using machine learning to predict obesity levels based on user input.',
        longDescription: 'This application collects user data (age, weight, height, lifestyle habits) via a Tkinter GUI, calculates BMI, and uses a trained machine learning model to predict obesity levels. It features a clean tabbed UI and ensemble prediction system built in Python.',
        technologies: ['Python', 'Tkinter', 'CustomTkinter', 'Scikit-learn', 'Pandas', 'Matplotlib'],
        primaryColor: '#39ff14',
        secondaryColor: '#00ff00',
        textOnPrimary: '#00ff00',
        textOnSecondary: '#2d1810',
        background: '#1a0f0a',
        cardBackground: '#111111',
        cardBorder: '#00ff00',
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
      image: bikoParkImage,
      github: 'https://github.com/lleoparden/Biko_Park',
      demo: 'https://za3boot-productions.itch.io/biko-park'
    },
    {
      slug: 'oop-chess',
      title: 'OOP Chess',
      description: 'A Java-based chess game with chaos mode and OOP design.',
      technologies: ['Java', 'Java Swing', 'IntelliJ IDEA'],
      image: chessImage,
      github: 'https://github.com/lleoparden/oop-chess'
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
      slug: 'sorting-visualizer',
      title: 'Sorting Algorithm Visualizer',
      description: 'A desktop C++ visual tool for sorting algorithms like bubble and insertion sort.',
      technologies: ['C++', 'SFML', 'Visual Studio Code'],
      image: sortImage,
      github: 'https://github.com/lleoparden/sorting-visualizer'
    },
    {
      slug: 'obesity-prediction-model',
      title: 'Obesity Prediction Model',
      description: 'A desktop app using machine learning to predict obesity levels based on user input.',
      technologies: ['Python', 'Tkinter', 'Scikit-learn'],
      image: modelImage,
      github: 'https://github.com/lleoparden/Obesity_Prediction_model'
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
