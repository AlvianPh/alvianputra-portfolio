/**
 * ============================================================
 *  SINGLE SOURCE OF TRUTH — semua konten website ada di sini.
 * ============================================================
 *
 * Reposisi: Software Engineer · Mobile & Web · Applied AI
 * Differentiator: Applied AI/NLP Research & Technical Communication
 */
import type { Portfolio } from './types';
import { projects } from './projects';

export const portfolio: Portfolio = {
  site: {
    lang: 'en',
    title: 'Alvian Putra Hardiadi — Software Engineer · Mobile & Web · Applied AI',
    description:
      'Software Engineer building practical mobile and web applications with Flutter and Laravel, with an applied research background in NLP and machine learning.',
    ogImage: '/images/arthawira.png',
  },

  profile: {
    name: 'Alvian Putra Hardiadi',
    role: 'Software Engineer · Mobile & Web · Applied AI',
    tagline: 'Software Engineer building practical software.',
    location: 'Yogyakarta, Indonesia',
    photo: '/images/profile.jpeg',
    cvUrl: '/cv.pdf',
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    roleLabel: 'SOFTWARE ENGINEER · MOBILE & WEB · APPLIED AI',
    headline: 'Software Engineer',
    subheadlineLead: 'building practical mobile & web applications.',
    lead:
      'I build mobile and web applications with Flutter and Laravel, with a research background in NLP and applied machine learning.',
    techStack: ['Riverpod', 'SQLite / Drift', 'REST API', 'MySQL', 'Git'],
    primaryCta: { label: 'View My Work', href: '#projects' },
    secondaryCta: { label: 'Download CV', href: '/cv.pdf' },
    notes: [
      {
        label: '01 — BUILD (CORE)',
        title: 'Mobile & Web Applications',
        items: ['Flutter', 'Laravel', 'REST API', 'State Management'],
        color: 'blue',
      },
      {
        label: '02 — RESEARCH',
        title: 'NLP & Active Learning',
        items: ['IndoBERT', 'Active Learning', 'FAHMA / ICERA'],
        color: 'green',
      },
      {
        label: '03 — COMMUNICATE',
        title: 'Technical Teaching',
        items: ['SMK Koperasi', '140+ Students', 'Curriculum Design'],
        color: 'orange',
      },
    ],
  },

  about: {
    paragraphs: [
      "I am an Informatics graduate from STMIK El Rahma Yogyakarta focused on building ==practical software== and applying machine learning to real-world engineering problems.",
      "My engineering work spans ==Flutter mobile applications==, ==Laravel web systems==, REST APIs, local data persistence, and clean Git workflows. My academic research background centers on ==Natural Language Processing and active learning== using Indonesian language models (IndoBERT).",
      "I also spent approximately one year teaching ==Coding and Artificial Intelligence at SMK Koperasi Yogyakarta==, which sharpened my ability to communicate technical architectures clearly, debug systematically, and collaborate across technical baselines.",
    ],
    facts: [
      { label: 'Degree', value: 'Bachelor of Informatics' },
      { label: 'Institution', value: 'STMIK El Rahma Yogyakarta' },
      { label: 'GPA', value: '3.95 / 4.00' },
      { label: 'Research', value: 'Concluded Dec 2025 · IEEE & FAHMA' },
      { label: 'Teaching', value: 'SMK Koperasi Yogyakarta (Sep 2025 — Present)' },
      { label: 'Location', value: 'Yogyakarta, Indonesia' },
    ],
  },

  education: {
    institution: 'STMIK El Rahma Yogyakarta',
    degree: 'Bachelor of Informatics',
    gpa: '3.95',
    startYear: '2022',
    endYear: '2026',
  },

  research: {
    period: 'Concluded Dec 2025',
    topic: 'Adaptive Multi-Oracle Active Learning with IndoBERT for Indonesian Sentiment Classification',
    summary:
      'Applied machine learning & NLP research focused on data annotation cost reduction through an Adaptive Multi-Oracle Active Learning architecture. Combines IndoBERT contextual representations with entropy-based uncertainty routing across 3 label oracles: Human Annotator (weight 1.0), Pseudo-labels IndoBERT (weight 0.3), and Fine-tuned IndoBERT (weight 0.7).',
    keywords: ['Active Learning', 'IndoBERT', 'Multi-Oracle', 'Sentiment Analysis', 'Cost Efficiency', 'LinearSVC'],
    publications: [
      {
        status: 'Published',
        venue: 'IEEE (ICERA 2026)',
        note: 'IEEE International Conference on Electronics, Robotics and Automation · IEEE Xplore',
        title: 'Adaptive Multi-Oracle Active Learning using IndoBERT Representations for Efficient Indonesian Sentiment Classification',
        year: '2026',
        authors: 'Minarwati and A. P. Hardiadi',
        doi: '10.1109/ICERA72709.2026.11666714',
        url: 'https://doi.org/10.1109/ICERA72709.2026.11666714',
      },
      {
        status: 'Published',
        venue: 'Jurnal FAHMA (Sinta 4)',
        note: 'Jurnal Informatika Komputer, Bisnis dan Manajemen · Vol. 24 No. 2 (2026)',
        title: 'Analisis Active Learning SVM berbasis Margin Sampling pada Sentimen YouTube MBG',
        year: '2026',
        authors: 'Alvian Putra Hardiadi and Minarwati',
        doi: '10.61805/fahma.v24i2.203',
        url: 'https://doi.org/10.61805/fahma.v24i2.203',
      },
    ],
    learnings: [
      '90.1% reduction in human annotation cost (149 labeled samples vs 1,499 budget)',
      'Multi-Oracle routing: human labeling workload cut down to just ~8%',
      '768-d L2-normalized IndoBERTweet feature extraction from Hugging Face',
      'HITL skip mechanism acts as an implicit quality filter against noisy pseudo-labels',
    ],
    details: {
      dataset: '8,966 YouTube comments (MBG Nutritional Program dataset)',
      results: 'Macro-F1 0.6277 ± 0.0289 (90% passive ceiling reached with only 149 labels)',
      repository: 'https://github.com/AlvianPh/multi-oracle-al-indobert-mbg',
    },
  },

  build: {
    intro:
      'A curated collection of mobile and web applications I have built—focusing on offline-first architectures, API integrations, and maintainable systems.',
    focus: ['Flutter', 'Laravel', 'REST API', 'Riverpod', 'SQLite', 'Git'],
    projects,
  },

  teaching: {
    intro:
      'Since September 2025, I have been serving as a ==Coding & Artificial Intelligence Teacher at SMK Koperasi Yogyakarta==, leading 7 classes with ~140 vocational students. This experience strengthens my ability to communicate technical architectures clearly, debug systematically, and mentor junior developers.',
    subject: 'Coding & Artificial Intelligence Teacher',
    institution: 'SMK Koperasi Yogyakarta',
    duration: 'Sep 2025 — Present',
    stats: [
      { value: '7', label: 'Vocational Classes' },
      { value: '140+', label: 'Students Taught' },
      { value: 'Active', label: 'Vocational Teacher' },
    ],
    curriculum: 'Authored 6 Capaian Pembelajaran (CP) for Grade 10 Coding & AI, paired with Foundational Figma UI/UX for Grade 12.',
    highlights: [
      {
        title: 'Practical Exercise Design',
        detail: 'Designed hands-on coding challenges and real-world project tasks directly aligned with vocational learning outcomes.',
      },
      {
        title: 'Systematic Debugging Mentorship',
        detail: 'Guided students through debugging workflows, compiler errors, code structure, and foundational logic troubleshooting.',
      },
      {
        title: 'Technical Communication Across Skill Levels',
        detail: 'Translated complex algorithmic logic, data structures, and AI fundamentals into clear, step-by-step mental models.',
      },
    ],
    milestones: [
      {
        period: '2023 — Present',
        role: 'Independent Software Engineer',
        organization: 'Client & Production Deployments',
        type: 'engineering',
        description:
          'Designing and shipping production mobile apps (Flutter) and web platforms (Laravel), with end-to-end product design, UX mapping, and QA validation for client and institutional systems like SIMPEG El-Rahma, Arthawira, and Seulanga Kost.',
        tags: ['Flutter', 'Laravel', 'Product Design (Figma)', 'Client Systems'],
      },
      {
        period: 'Sep 2025 — Present',
        role: 'Coding & Artificial Intelligence Teacher',
        organization: 'SMK Koperasi Yogyakarta',
        type: 'teaching',
        tags: ['Coding & AI (Grade 10)', 'Figma UI/UX (Grade 12)', 'Curriculum Author', '140+ Students'],
        curriculumObjectives: {
          tracks: 'Grade 10: Coding & AI (KKA) · Grade 12: Figma UI/UX Fundamentals',
          objectives: [
            'Applying computational thinking & algorithms for problem-solving',
            'Authoring digital coding content & web structures using HTML',
            'Understanding ethical AI use in everyday digital contexts',
            'Grasping core data concepts and visual representations',
            'Modeling algorithmic logic via pseudocode & structured flowcharts',
            'Leveraging artificial intelligence tools responsibly and productively',
          ],
        },
      },
      {
        period: 'Mar 2023 — Nov 2023',
        role: 'Staff of Research & Development (R&D)',
        organization: 'Permikomnas Yogyakarta',
        type: 'organization',
        description:
          'Collaborated in rapid prototyping for Garuda Hackathon 4.0, contributing to front-end UI implementation, basic interaction design, and design thinking problem solving.',
        tags: ['Garuda Hackathon 4.0', 'Frontend Prototyping', 'Design Thinking'],
      },
    ],
  },

  skills: [
    {
      title: 'Mobile Development',
      items: [
        'Flutter & Dart',
        'State Management (Riverpod)',
        'Local Persistence (SQLite / Drift)',
        'RESTful API Integration',
        'Camera & Hardware Pipeline',
      ],
      color: 'blue',
      badge: 'Core Engineering',
    },
    {
      title: 'Web Development',
      items: [
        'Laravel & PHP',
        'Blade & Component Architecture',
        'Tailwind CSS & Responsive Layout',
        'MySQL Database Design',
        'REST API Endpoints',
      ],
      color: 'orange',
      badge: 'Core Engineering',
    },
    {
      title: 'Backend & Data',
      items: [
        'Supabase & Firebase Integration',
        'PostgreSQL & SQLite Modeling',
        'Authentication & Role Permissions (RBAC)',
        'JSON RESTful API Design',
        'Data Validation & Error Handling',
      ],
      color: 'blue',
      badge: 'Core Engineering',
    },
    {
      title: 'Development Workflow',
      items: [
        'Git & GitHub Version Control',
        'Postman API Testing',
        'Android Studio & VS Code',
        'Code Refactoring & Clean Structure',
        'Linux / Command Line Basics',
      ],
      color: 'blue',
      badge: 'Engineering Workflow',
    },
    {
      title: 'Supporting Skills',
      items: [
        'Figma Prototyping & Wireframing',
        'User Flow & Information Architecture',
        'Technical Documentation',
        'Curriculum & Workshop Design',
      ],
      color: 'orange',
      badge: 'Supporting',
    },
    {
      title: 'Research Specialization',
      items: [
        'Natural Language Processing (NLP)',
        'IndoBERT & Transformer Models',
        'Multi-Oracle Active Learning',
        'Empirical Experiment Design',
        'Python & Scientific Evaluation',
      ],
      color: 'green',
      supporting: true,
      badge: 'Research Differentiator',
    },
  ],

  certificates: [
    {
      name: 'Author & Presenter — IEEE ICERA 2026',
      issuer: '5th Int. Conference on Electronics Representation & Algorithm',
      year: '2026',
      credentialUrl: 'https://doi.org/10.1109/ICERA72709.2026.11666714',
    },
    {
      name: 'MikroTik Certified Network Associate (MTCNA)',
      issuer: 'MikroTik Academy',
      year: '2026',
      credentialUrl: 'https://mikrotik.com/training/certificates/c717201c086b6eb7a856',
    },
    {
      name: 'Productivity with AI Bootcamp (BDT)',
      issuer: 'BEKRAF (Badan Ekonomi Kreatif Indonesia)',
      year: '2026',
      credentialUrl: 'https://www.linkedin.com/in/alvian-putra-hardiadi-b6647b254/',
    },
    {
      name: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
      issuer: 'Dicoding Indonesia',
      year: '2026',
      credentialUrl: 'https://www.dicoding.com/certificates/53XEK87WKXRN',
    },
  ],

  exploring: [],

  contact: {
    cta: 'Have a problem worth building?',
    message:
      "I'm open to software engineering opportunities, technical collaborations, and interesting product ideas involving mobile, web, and applied AI.",
    email: 'alvian.ok123@gmail.com',
    links: [
      { label: 'GitHub', href: 'https://github.com/AlvianPh' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alvian-putra-hardiadi-b6647b254/' },
      { label: 'Resume', href: '/cv.pdf' },
    ],
  },
};
