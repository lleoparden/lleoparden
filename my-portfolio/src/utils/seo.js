export const SITE_URL = 'https://lleoparden.github.io/lleoparden';

const defaultMetadata = {
  title: 'Mostafa Eid | Software Developer',
  description: 'Portfolio of Mostafa Eid, a software developer building full-stack applications, backend systems, and practical local AI/RAG tooling.',
};

const routes = {
  '/': defaultMetadata,
  '/about': {
    title: 'About | Mostafa Eid',
    description: 'Learn about Mostafa Eid, his computer science education, product work, software internships, and focus on full-stack and AI systems.',
  },
  '/experience': {
    title: 'Experience | Mostafa Eid',
    description: 'Explore Mostafa Eid’s work with TrustFlow, Orange Business, freelance software development, and competitive programming achievements.',
  },
  '/skills': {
    title: 'Skills | Mostafa Eid',
    description: 'Review Mostafa Eid’s practical stack across frontend, backend, mobile, systems, local AI, databases, and software delivery.',
  },
  '/projects': {
    title: 'Projects | Mostafa Eid',
    description: 'See flagship product work, completed software projects, active development, and selected open-source contributions by Mostafa Eid.',
  },
  '/contact': {
    title: 'Contact | Mostafa Eid',
    description: 'Contact Mostafa Eid about software development opportunities, full-stack products, backend systems, and practical AI tooling.',
  },
};

const projectRoutes = {
  trustflow: ['TrustFlow', 'Current flagship product work co-owned and built end to end by Mostafa Eid alongside the project’s other founder.'],
  'local-rag-system': ['Local RAG System', 'A completed containerized retrieval-augmented generation system using FastAPI, ChromaDB, Ollama, and Docker.'],
  'sonic-gui': ['SONiC-GUI', 'A completed AI-assisted network-management platform for SONiC OS with a React interface and FastAPI backend.'],
  olympus: ['Olympus', 'An ongoing, currently paused self-hosted local AI stack designed for practical single-GPU model workflows.'],
  sentinelcheck: ['SentinelCheck', 'A clearly labeled planned graduation-capstone concept for scam detection across messages, calls, QR codes, and payments.'],
  'job-tracker': ['Job Application Tracking System', 'An in-progress multi-platform job application tracker with a FastAPI backend and Firebase services.'],
  'kotlin-chat-application': ['Kotlin Chat Application', 'A completed Android chat application with local persistence, optional Firebase synchronization, and offline support.'],
  'oop-chess': ['OOP Chess', 'A completed object-oriented Java chess game with a graphical interface, chaos mode, and a minimax-based bot.'],
  'fos-educational-os': ['FOS Educational OS', 'Completed educational x86 kernel development covering memory management, faults, scheduling, and isolation.'],
  odysseus: ['Odysseus Contributions', 'Selected merged open-source contributions by Mostafa Eid to the independently owned Odysseus AI workspace.'],
};

const canonicalFor = (pathname) => `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

export const getRouteMetadata = (pathname) => {
  const normalizedPath = pathname !== '/' ? pathname.replace(/\/$/, '') : '/';
  let metadata = routes[normalizedPath];

  if (!metadata && normalizedPath.startsWith('/projects/')) {
    const slug = normalizedPath.split('/').pop();
    const project = projectRoutes[slug];
    if (project) metadata = { title: `${project[0]} | Mostafa Eid`, description: project[1] };
  }

  const found = Boolean(metadata);
  const resolved = metadata || {
    title: 'Page Not Found | Mostafa Eid',
    description: 'The requested portfolio page could not be found.',
  };

  return {
    ...resolved,
    canonical: canonicalFor(normalizedPath),
    robots: found ? 'index, follow' : 'noindex, nofollow',
  };
};
