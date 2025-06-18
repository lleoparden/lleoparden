import bikoParkImage from '../assets/images/projects/biko-park.png';
import chessImage from '../assets/images/projects/oop-chess.png';
import bubbleImage from '../assets/images/projects/bubble.png';
import sortImage from '../assets/images/projects/sort.png';
import memeImage from '../assets/images/projects/2oolameme.png';

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
        primaryColor: '#f68e4e',         // keep
        secondaryColor: '#f7ddcd',       // keep
        textOnPrimary: '#ffffff',        // keep
        textOnSecondary: '#000000',      // new
        background: '#1a0f0a',           // new
        cardBackground: '#2d1810',       // new
        cardBorder: '#f68e4e',           // keep
        textOnSecondary: '#2d1810',
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
        technologies: [
          'Java', 'Java Swing', 'Object-Oriented Programming', 'IntelliJ IDEA', 'Design Patterns'
        ],
        primaryColor: '#729453',         // keep
        secondaryColor: '#eaebd0',       // keep
        textOnPrimary: '#ffffff',        // keep
        textOnSecondary: '#000000',      // new
        background: '#1a0f0a',           // new
        cardBackground: '#2d1810',       // new
        cardBorder: '#729453',           // keep
        textOnSecondary: '#2d1810',
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
        technologies: [
          'Kotlin', 'Firebase', 'Firebase Realtime Database', 'Firebase Authentication',
          'Android Studio', 'Material Design', 'MVVM Architecture'
        ],
        primaryColor: '#cbbde3',         // keep
        secondaryColor: '#09090a',       // keep
        textOnPrimary: '#ffffff',        // keep
        textOnSecondary: '#000000',      // new
        background: '#1a0f0a',           // new
        cardBackground: '#2d1810',       // new
        cardBorder: '#cbbde3',           // keep
        textOnSecondary: '#2d1810',
        image: bubbleImage,
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
        primaryColor: '#20aae4',         // keep
        secondaryColor: '#ffffff',       // keep
        textOnPrimary: '#ffffff',        // keep
        textOnSecondary: '#000000',      // new
        background: '#1a0f0a',           // new
        cardBackground: '#2d1810',       // new
        cardBorder: '#20aae4',           // keep
        textOnSecondary: '#2d1810',
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
      },'sorting-visualizer': {
  slug: 'sorting-visualizer',
  title: 'Sorting Algorithm Visualizer',
  description: 'A C++ application that visually demonstrates how common sorting algorithms work.',
  primaryColor: '#39ff14',         // keep
  secondaryColor: '#00ff00',       // keep
  textOnPrimary: '#00ff00',        // keep
  textOnSecondary: '#39ff14',      // new
  background: '#1a0f0a',           // new
  cardBackground: '#111111',       // new
  Background: '#0d0d0d', 
  cardBorder: '#00ff00',           // keep
  textOnSecondary: '#2d1810',
  longDescription: 'The Sorting Algorithm Visualizer is a desktop application that helps learners understand how different sorting algorithms function through animated visual feedback. It supports multiple algorithms like bubble sort, selection sort, insertion sort, and more. The application features bar visualizations that change in real-time as the sorting progresses.',
  technologies: [
    'C++', 'SFML', 'Object-Oriented Design', 'Visual Studio Code', 'Algorithm Design', 'Git'
  ],
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
      github: 'https://github.com/lleoparden/Chat_Application'
    },
    {
      slug: '2ool-a-meme',
      title: '2ool a Meme App',
      description: 'App for a game brand featuring chat and e-commerce.',
      technologies: ['Kotlin', 'Firebase', 'Android Studio'],
      image: memeImage,
      github: 'https://github.com/lleoparden/2ool_a_meme',
      demo: 'https://2oolameme.com/'
    },{
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
    /*{
      title: 'Weather App',
      description: 'A responsive weather application using OpenWeather API',
      technologies: ['React', 'JavaScript', 'API'],
      category: 'React',
      github: 'https://github.com/yourusername/weather-app',
      demo: 'https://your-weather-app.netlify.app'
    }*/
  ];
};