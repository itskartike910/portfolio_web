import type {
  ProjectData,
  ExperienceData,
  AchievementData,
  CertificationData,
  SkillItem,
  CapabilityItem,
  SocialLinkItem,
} from '../types/portfolio';

export type {
  ProjectData,
  ExperienceData,
  AchievementData,
  CertificationData,
  SkillItem,
  CapabilityItem,
  SocialLinkItem,
};

// ── Projects ─────────────────────────────────────────────────────────────────

export const allProjects: ProjectData[] = [
  {
    title: "OpenSarthi — Cross-Platform AI Agent & Assistant",
    category: "Desktop & AI Agents",
    duration: "May 2026 – Present",
    description:
      "Open-source cross-platform AI agent with voice interaction, desktop automation, and multi-provider LLM orchestration.",
    detailedDescription:
      "OpenSarthi is an open-source AI desktop agent designed to bridge LLM reasoning with real-world computer interaction. It combines conversational and voice interfaces, multi-provider LLM orchestration, system control, and automation into a cross-platform assistant. Architected using Tauri, React, TypeScript, FastAPI, Python, and Rust, targeting Linux, Windows, macOS, and Android. Features an agentic execution framework with multithreaded task scheduling, self-healing workflows, and real-time streaming responses.",
    technologies: [
      "Tauri", "React", "TypeScript", "Python", "FastAPI", "Rust",
      "PydanticAI", "LangGraph", "WebSockets", "SQLite", "LLM Integration", "Agentic AI",
    ],
    keyFeatures: [
      "Multi-provider LLM orchestration: Gemini, OpenAI, Anthropic, Groq, OpenRouter, and Ollama",
      "Agentic execution framework using PydanticAI and LangGraph with multithreaded task scheduling",
      "Voice interaction pipeline with accessibility-based system control",
      "Conversational memory, token tracking, and configurable agent capabilities",
      "Cross-platform architecture: Linux, Windows, macOS, and Android",
      "Real-time streaming responses with concurrent tool execution and self-healing workflows",
      "Native desktop and mobile runtime support with Tauri + Rust backend",
    ],
    githubUrl: "https://github.com/OpenSarthi/opensarthi",
    projectUrl: "https://github.com/OpenSarthi/opensarthi",
    webAvailable: false,
    androidAvailable: true,
  },
  {
    title: "OmniBrowse — AI Browser Automation Agent",
    category: "AI & Automation",
    duration: "Aug 2025 – Oct 2025",
    description:
      "Intelligent browser automation agent for multi-step web workflows across Chromium-based browsers using natural language tasks.",
    detailedDescription:
      "OmniBrowse is an AI-driven browser extension that executes autonomous web workflows from natural language tasks. Built as a universal Chromium extension supporting Chrome, Edge, Brave, and all Chromium-based browsers. Features sophisticated multi-agent AI system with Task Router, Planner, Navigator, and Validator agents. Implements advanced page analysis and DOM understanding to handle navigation, form actions, and dynamic interactions.",
    technologies: [
      "React", "JavaScript", "Chrome Extension APIs", "Chromium APIs",
      "Gemini AI", "Claude", "OpenAI", "DOM Analysis", "Webpack", "API Integration", "Web Development",
    ],
    keyFeatures: [
      "Multi-Agent AI System: Task Router, Planner, Navigator, and Validator agents",
      "Universal Chromium Compatibility: Chrome, Edge, Brave, Opera, Vivaldi, and Wootzapp Browser",
      "Interactive Sidebar Interface: Real-time task execution and chat with AI agents",
      "Social Media Automation: Automated posting on X/Twitter, LinkedIn, Facebook",
      "E-commerce Automation: Product search, cart management, order placement",
      "Smart DOM Analysis: Advanced element targeting using buildDomTree engine",
      "Task Status Tracking: Real-time progress updates and execution monitoring",
      "Multi-LLM Support: Gemini, Claude, and OpenAI integration",
    ],
    githubUrl: "https://github.com/itskartike910/ai-chatting-agent",
    projectUrl: "https://github.com/itskartike910/ai-chatting-agent",
    webAvailable: true,
    androidAvailable: true,
  },
  {
    title: "TRL Assessment Platform — DRDO Enterprise System",
    category: "Enterprise",
    duration: "Mar 2026 – May 2026",
    description:
      "Full-stack enterprise platform for a DRDO-sponsored Technology Readiness Level (TRL) assessment system, built at IIM Ranchi.",
    detailedDescription:
      "Technology Readiness Level Assessment Platform — a full-stack enterprise web application developed for a DRDO-sponsored project to digitize and manage multi-stage TRL assessments. Supports project lifecycle management, assessment workflows, reporting, and user administration with role-based access control across 3 organizational roles. Built with React, TypeScript, Flask, SQLAlchemy, and PostgreSQL with JWT-based authentication and 30+ RESTful APIs covering 13+ relational entities.",
    technologies: [
      "React", "TypeScript", "Flask", "Python", "SQLAlchemy", "PostgreSQL", "JWT", "RBAC", "REST APIs",
    ],
    keyFeatures: [
      "30+ RESTful APIs with JWT authentication and role-based access control (RBAC)",
      "3 organizational roles with role-aware dashboards and workflow automation",
      "Multi-phase TRL assessment workflow with scheduling and notification services",
      "Report generation and data export capabilities (~60% reduction in manual tracking effort)",
      "13+ relational entities with optimized PostgreSQL data models",
      "Secure session management and user administration module",
      "Project lifecycle management from submission to assessment completion",
    ],
    webAvailable: true,
    androidAvailable: false,
  },
  {
    title: "Few-Shot Skin Cancer Classification",
    category: "Machine Learning",
    duration: "Oct 2024 - Dec 2024",
    description:
      "A Deep Learning Model for the classification of various skin cancer and diseases using few-shot learning techniques.",
    detailedDescription:
      "Developed an advanced deep learning model for skin cancer classification using PyTorch, DeepBDC, ResNet architectures, and ImageNet. The project focuses on few-shot learning with HAM10000 dataset, enabling accurate predictions with minimal labeled data. Implemented Prototypical Learning setup and Mutual Centralized Learning for enhanced performance.",
    technologies: [
      "Python", "Deep Learning", "FewShot Learning", "PyTorch", "DeepBDC", "ResNet", "ImageNet", "HAM10000",
    ],
    keyFeatures: [
      "Implemented an AI Model for Skin Cancer Classification",
      "Utilized ResNet architectures and ImageNet transfer learning",
      "Prototypical Learning setup with Mutual Contrastive Learning",
      "Achieved high accuracy with minimal labeled training data",
      "Comprehensive dataset handling with HAM10000",
    ],
    githubUrl: "https://github.com/itskartike910/DeepBDC_MCL",
    webAvailable: false,
    androidAvailable: false,
  },
  {
    title: "ChatApp (ChatBox)",
    category: "Mobile Development",
    duration: "Nov 2023 - Jan 2024",
    description:
      "A real-time chat application built with Flutter and Firebase, enhanced with AI-powered conversational features.",
    detailedDescription:
      "ChatBox is a feature-rich, real-time chat application built using Flutter and Firebase with integrated AI chat capabilities. In addition to seamless real-time messaging, the application allows users to interact with an AI assistant inside chat conversations using external AI APIs.",
    technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Firebase Auth", "REST APIs", "VS Code"],
    keyFeatures: [
      "User Authentication: Secure sign up and log in using email and password",
      "Real-time Messaging: Send and receive messages instantly with timestamps",
      "AI Chat Integration: Interact with an AI assistant to generate smart responses",
      "Delete Messages: Remove messages from both sender and receiver ends",
      "User Profile: View and update profile information",
      "Search Users: Find and connect with other users easily",
      "Push Notifications: Get notified of new messages",
      "Online Status: See when users are active",
    ],
    githubUrl: "https://github.com/itskartike910/chat_app",
    projectUrl: "https://github.com/itskartike910/chat_app/releases",
    webAvailable: false,
    androidAvailable: true,
  },
  {
    title: "QR Code Scanner & Generator",
    category: "Mobile Development",
    duration: "Sept 2023",
    description:
      "A Flutter application for scanning QR codes and generating custom QR codes for digital information exchange.",
    detailedDescription:
      "A feature-rich Android application built with Flutter that enables users to scan QR codes and generate custom QR codes from text or links.",
    technologies: ["Flutter", "Dart", "QR Code Scanner Plugin", "Android Studio", "VS Code"],
    keyFeatures: [
      "Scan QR Code: Instantly scan and decode QR codes",
      "Generate QR Code: Create QR codes from text or links",
      "Copy to Clipboard: Quick copy functionality for scanned data",
      "Share QR Code: Share generated QR codes with others",
      "History: Save and manage scanned codes",
      "Custom styling for generated QR codes",
    ],
    githubUrl: "https://github.com/itskartike910/qr_code_sg",
    projectUrl: "https://github.com/itskartike910/qr_code_sg/releases",
    webAvailable: false,
    androidAvailable: true,
  },
  {
    title: "Helping Hand (AlertUs)",
    category: "Mobile Development",
    duration: "July 2023",
    description:
      "A community emergency alert app enabling neighbors to request and offer help during emergencies.",
    detailedDescription:
      "Helping Hand (AlertUs) is a community-focused mobile application designed to connect neighbors during emergencies. Built for the ByteVerse Hackathon.",
    technologies: ["Flutter", "Dart", "Firebase", "Cloud Messaging", "Geolocation"],
    keyFeatures: [
      "Emergency alert system with one-tap SOS",
      "Real-time notifications to nearby community members",
      "Location sharing during emergencies",
      "Community chat and coordination",
      "User verification and safety features",
      "Emergency contact management",
      "History of past alerts and responses",
    ],
    githubUrl: "https://github.com/itskartike910/Helping_hand",
    projectUrl: "https://github.com/itskartike910/Helping_hand",
    webAvailable: false,
    androidAvailable: true,
  },
  {
    title: "Tic Tac Toe",
    category: "Game Development",
    duration: "March 2024",
    description: "A fun and interactive Tic Tac Toe game with AI opponent using MinMax algorithm.",
    detailedDescription:
      "An engaging implementation of the classic Tic Tac Toe game built with Flutter. Features both multiplayer and single-player modes with AI powered by MinMax algorithm.",
    technologies: ["Flutter", "Dart", "MinMax Algorithm", "Game AI", "State Management"],
    keyFeatures: [
      "Play with a Friend: Challenge friends in local multiplayer mode",
      "Play with Computer: AI opponent using MinMax algorithm",
      "Scoreboard: Track wins, losses, and draws",
      "Reset Game: Start fresh games instantly",
      "Smooth animations and sound effects",
      "Responsive design for all screen sizes",
      "Game history and statistics",
    ],
    githubUrl: "https://github.com/itskartike910/tic_tac_toe",
    projectUrl: "https://github.com/itskartike910/tic_tac_toe/releases",
    webAvailable: false,
    androidAvailable: true,
  },
  {
    title: "Handwritten Digit Recognizer",
    category: "Machine Learning",
    duration: "May 2023 - July 2023",
    description: "A machine learning model to recognize handwritten digits and numbers with high accuracy.",
    detailedDescription:
      "Built a robust machine learning model using Python and popular ML libraries to recognize handwritten digits from the MNIST dataset.",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook"],
    keyFeatures: [
      "High accuracy digit recognition using MNIST dataset",
      "Neural network implementation with multiple layers",
      "Real-time digit prediction capabilities",
      "Data preprocessing and augmentation techniques",
      "Visualization of training progress and results",
    ],
    githubUrl: "https://github.com/itskartike910/Handwritten_digit_recogniser",
    webAvailable: false,
    androidAvailable: false,
  },
  {
    title: "Currency Converter",
    category: "Web Development",
    duration: "Nov 2024",
    description: "A web-based currency converter application with real-time exchange rates and modern UI.",
    detailedDescription:
      "A practical and user-friendly currency converter web application built with modern web technologies. Supports 150+ currencies with real-time rates.",
    technologies: ["JavaScript", "HTML", "CSS", "API Integration", "Responsive Design"],
    keyFeatures: [
      "Real-time currency conversion with live exchange rates",
      "Support for 150+ global currencies",
      "Clean and intuitive user interface",
      "Responsive design for mobile and desktop",
      "Exchange rate history and trends",
      "Favorite currency pairs for quick access",
      "Offline mode with cached rates",
    ],
    githubUrl: "https://github.com/itskartike910/CurrencyConvertor",
    projectUrl: "https://itskartike910.github.io/CurrencyConvertor/",
    webAvailable: true,
    androidAvailable: false,
  },
  {
    title: "Multipurpose Calculator",
    category: "Utility",
    duration: "March 2023",
    description:
      "A comprehensive calculator app with multiple calculator types including scientific, BMI, and discount calculators.",
    detailedDescription:
      "An all-in-one calculator application built with Java and XML for Android. Includes five different calculator types.",
    technologies: ["Java", "XML", "Android Studio", "Material Design"],
    keyFeatures: [
      "Normal Calculator: Basic arithmetic operations",
      "Numeral System Calculator: Convert between decimal, binary, octal, and hex",
      "Discount Calculator: Calculate discounts and final prices",
      "BMI Calculator: Track body mass index and health metrics",
      "Scientific Calculator: Advanced mathematical functions",
      "Clean Material Design interface",
      "History and memory functions",
    ],
    githubUrl: "https://github.com/itskartike910/Calculator",
    projectUrl: "https://github.com/itskartike910/Calculator",
    webAvailable: false,
    androidAvailable: true,
  },
];

export const projectCategories = [
  "All",
  "Desktop & AI Agents",
  "AI & Automation",
  "Enterprise",
  "Machine Learning",
  "Mobile Development",
  "Web Development",
  "Game Development",
  "Utility",
];

// ── Experience ────────────────────────────────────────────────────────────────

export const experiences: ExperienceData[] = [
  {
    company: "BLG Technologies",
    role: "Software Development Engineer I",
    location: "Ranchi, India · IIM Ranchi – DRDO Project",
    duration: "Mar 2026 – May 2026",
    accentColor: "#00D9FF",
    responsibilities: [
      "Developed major components of a DRDO-sponsored full-stack TRL assessment platform using React, TypeScript, Flask, SQLAlchemy, and PostgreSQL.",
      "Designed and implemented 30+ RESTful APIs with JWT authentication and RBAC, enabling workflow automation across 3 organizational roles.",
      "Built role-aware dashboards, assessment scheduling, report generation and data export, reducing manual tracking effort by ~60%.",
      "Engineered backend services and PostgreSQL data models spanning 13+ relational entities.",
    ],
  },
  {
    company: "Wootzapp Inc.",
    role: "Software Developer Intern",
    location: "Remote · HQ: Delaware, USA",
    duration: "Dec 2024 – Jan 2026",
    accentColor: "#06FFA5",
    responsibilities: [
      "Developed an AI-driven browser automation agent within a Chromium-based Android browser, enabling autonomous multi-step web workflows.",
      "Implemented offline caching & URL remapping for RL environments — reduced page load latency from 500-1000 ms to ~10 ms (80–98% improvement).",
      "Built network interception for Twitter/X data extraction and integrated REST APIs for automated backend ingestion.",
      "Debugged Chromium internals and resolved platform-specific issues, improving cross-device reliability and reducing cold-start crashes.",
    ],
    certificateUrl: "https://drive.google.com/file/d/144E90vDk6_8r92G7j4xXy9Z1X2_34567/view?usp=sharing",
  },
  {
    company: "EISystems Technologies",
    role: "AI Research Intern",
    location: "Internship · 2 Months",
    duration: "May 2024 – Jul 2024",
    accentColor: "#FFBE0B",
    responsibilities: [
      "Assisted with research projects and developed an NLP model to enhance sentiment analysis.",
      "Gained hands-on experience with deep learning architectures and NLP techniques.",
    ],
    certificateUrl: "https://drive.google.com/file/d/1b22DfCz2wz-5YyWGl9ss0TPMhtYGF-vw/view?usp=sharing",
  },
];

// ── Achievements ──────────────────────────────────────────────────────────────

export const achievements: AchievementData[] = [
  {
    title: "Machine Mayhem Winner",
    organization: "Robotics Club",
    date: "Nov 2022",
    amount: "₹10,000 Cash Prize",
    description: 'Won the Robotics Club\'s "Machine Mayhem" competition',
    icon: "🤖",
    color: "#9D4EDD",
    certificateUrl: "https://drive.google.com/file/d/14DcCE1oltOdgKfUlWmf7p36xE-5o52N0/view?usp=sharing",
  },
  {
    title: "Problem Solving Excellence",
    organization: "Multiple Platforms",
    date: "Ongoing",
    amount: "1000+ Problems Solved",
    description:
      "Solved 1000+ DSA problems across LeetCode, GFG, HackerRank, and CodeChef, demonstrating strong algorithmic expertise",
    icon: "🎯",
    color: "#00D9FF",
  },
];

export const certifications: CertificationData[] = [
  {
    title: "Data Structures and Algorithms",
    issuer: "Udemy",
    date: "2023",
    color: "#00D9FF",
  },
  {
    title: "Android Development Bootcamp",
    issuer: "Udemy",
    date: "2023",
    color: "#06FFA5",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "2024",
    color: "#9D4EDD",
  },
];

// ── Skills ────────────────────────────────────────────────────────────────────

export const skillCategories: { [key: string]: SkillItem[] } = {
  "Languages": [
    { name: "C++", level: 0.9 },
    { name: "C", level: 0.85 },
    { name: "Java", level: 0.8 },
    { name: "Python", level: 0.85 },
    { name: "JavaScript", level: 0.85 },
    { name: "TypeScript", level: 0.8 },
    { name: "Dart", level: 0.8 },
    { name: "SQL", level: 0.8 },
    { name: "HTML/CSS", level: 0.8 },
    { name: "Rust", level: 0.4 },
  ],
  "Frameworks & Technologies": [
    { name: "React.js", level: 0.85 },
    { name: "Flask", level: 0.85 },
    { name: "FastAPI", level: 0.75 },
    { name: "Flutter", level: 0.85 },
    { name: "Firebase", level: 0.75 },
    { name: "PostgreSQL", level: 0.8 },
    { name: "Chromium", level: 0.75 },
    { name: "Android Dev", level: 0.85 },
    { name: "Git", level: 0.9 },
    { name: "GitHub", level: 0.9 },
    { name: "Linux/Ubuntu", level: 0.85 },
    { name: "VS Code", level: 0.9 },
    { name: "API Integration", level: 0.9 },
    { name: "Tauri", level: 0.75 },
  ],
  "AI & Agentic Systems": [
    { name: "LLM Integration", level: 0.85 },
    { name: "Agentic AI", level: 0.8 },
    { name: "Browser Automation", level: 0.85 },
    { name: "Machine Learning", level: 0.75 },
    { name: "LangGraph", level: 0.8 },
    { name: "PydanticAI", level: 0.8 },
  ],
  "Specializations": [
    { name: "DSA", level: 0.9 },
    { name: "Competitive Programming", level: 0.85 },
    { name: "Database Management", level: 0.8 },
    { name: "Web Development", level: 0.8 },
    { name: "Problem Solving", level: 0.95 },
    { name: "UI/UX Design", level: 0.8 },
  ],
};

// ── Capabilities ──────────────────────────────────────────────────────────────

export const capabilities = [
  {
    icon: "⚙️",
    color: "#00D9FF",
    title: "Systems Architecture",
    desc: "Rust, Tauri wrappers &\nlow-level OS APIs",
  },
  {
    icon: "🧠",
    color: "#9D4EDD",
    title: "Agentic AI / LLMs",
    desc: "LangGraph, PydanticAI &\nstructured agent planning",
  },
  {
    icon: "🌐",
    color: "#06FFA5",
    title: "Full-Stack Dev",
    desc: "React, TypeScript, Flask &\nhigh-performance APIs",
  },
  {
    icon: "🔬",
    color: "#00D9FF",
    title: "Browser Internals",
    desc: "Chromium custom builds &\nV8 execution control",
  },
  {
    icon: "🗄️",
    color: "#5B7FFF",
    title: "Database Design",
    desc: "PostgreSQL, MySQL, SQLite\n& ORM data modeling",
  },
  {
    icon: "⚡",
    color: "#FF006E",
    title: "Latency Tuning",
    desc: "Caching layers & optimizing\nrendering pipeline latency",
  },
  {
    icon: "🏆",
    color: "#FFBE0B",
    title: "Problem Solving",
    desc: "LeetCode (Max 1829) &\n2000+ competitive problems",
  },
  {
    icon: "🧪",
    color: "#06FFA5",
    title: "Agent Tooling",
    desc: "Docker sandboxes, Git CI/CD\n& terminal runtimes",
  },
];
