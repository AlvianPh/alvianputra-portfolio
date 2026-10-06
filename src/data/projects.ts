import type { Project } from './types';

/**
 * ============================================================
 * SINGLE SOURCE OF TRUTH — PROJECT DOSSIERS
 * ============================================================
 * Untuk menambah, menyembunyikan, atau menukar urutan proyek,
 * cukup edit daftar array di bawah ini:
 * - isDraft: true  -> sembunyikan sementara dari website
 * - featured: true -> proyek unggulan
 * - category: 'mobile' | 'web'
 */
export const projects: Project[] = [
  {
    name: 'Arthawira Ecosystem',
    context: 'Personal Finance & Small Enterprise · Flutter',
    category: 'mobile',
    date: 'AUG 2026 — PRESENT',
    purpose:
      'Engineered to resolve financial privacy concerns and eliminate transaction query latency without relying on continuous cloud connectivity.',
    description:
      'Production-ready offline-first finance and wallet tracking app built with Flutter and Drift (SQLite). Features zero-latency balance caching, reactive Riverpod state flows, and local budgeting analytics.',
    narrative:
      'Engineered to resolve financial privacy concerns and eliminate transaction query latency without relying on continuous cloud connectivity. All wallet operations, balance audits, and budgeting logic execute instantaneously on an offline-first SQLite/Drift local database powered by reactive Riverpod state flows.',
    image: '/images/arthawira.png',
    stack: ['Flutter', 'Dart', 'Riverpod', 'Drift (SQLite)', 'Supabase', 'Figma'],
    links: [
      { label: 'Website & App', href: 'https://arthawira.vercel.app/' },
      { label: 'Figma UI/UX', href: 'https://www.figma.com/design/NdVcRKbpVDOiCy8brc62fS/Arthawira-0.6.5?node-id=0-1&t=3U9PSDAtP0sB41mv-1' },
      { label: 'GitHub', href: 'https://github.com/AlvianPh/arthawira' },
    ],
    stickyMeta: {
      role: 'Lead Mobile Engineer',
      timeline: 'Active Ongoing (Aug 2026 — Present)',
      arch: 'Offline-First Drift/SQLite',
      status: 'Active & Shipped',
    },
    metrics: [
      { val: '0ms', label: 'Local SQLite Latency' },
      { val: '100%', label: 'Offline Data Resiliency' },
      { val: 'Riverpod', label: 'Reactive Architecture' },
    ],
    highlights: [
      'Engineered offline-first SQLite architecture using Drift with zero-latency local queries.',
      'Implemented clean Riverpod unidirectional state management with robust repository abstractions.',
      'Designed multi-wallet ledger tracking, recurring scheduled reminders, and category budgeting.',
      'Automated local anomaly detection and daily summary generation algorithms.',
    ],
    featured: true,
  },
  {
    name: 'Jawir Apps (Aksara Detection)',
    context: 'Cultural Heritage AI · Flutter & Computer Vision',
    category: 'mobile',
    date: 'JAN 2026',
    purpose:
      'A cultural heritage preservation system utilizing computer vision to digitize traditional Javanese script in real-time.',
    description:
      'Mobile computer vision application for detecting and classifying traditional Javanese script (Aksara Jawa) using Flutter, OpenCV image preprocessing, and a trained Convolutional Neural Network (CNN).',
    narrative:
      'A cultural heritage preservation system utilizing computer vision to digitize traditional Javanese script. Combines a real-time mobile camera capture pipeline, canvas image preprocessing, and Convolutional Neural Network (CNN) inference with an interactive learning interface.',
    image: '/images/project-2.png',
    stack: ['Flutter', 'Dart', 'CNN', 'Python', 'OpenCV', 'REST API'],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/AlvianPh/aksara_detection' },
    ],
    stickyMeta: {
      role: 'Mobile & CV Pipeline Dev',
      timeline: 'Jan 2026',
      arch: 'Camera API + CNN REST',
      status: 'Research & Validated',
    },
    metrics: [
      { val: 'CNN', label: 'Deep Learning Model' },
      { val: '20+', label: 'Aksara Glyph Classes' },
      { val: 'Camera API', label: 'Real-time Preprocessing' },
    ],
    highlights: [
      'Engineered real-time mobile camera frame ingestion and binarization preprocessing pipeline.',
      'Integrated Convolutional Neural Network inference endpoint for 20+ Javanese script glyph classes.',
      'Designed guided interactive scanning viewport with immediate audio/visual feedback.',
    ],
    featured: true,
  },
  {
    name: 'Seulanga Kost Management',
    context: 'Property Rental Management · Laravel Web',
    category: 'web',
    date: 'JUL — SEP 2026',
    purpose:
      'Eliminated manual rental tracking inefficiencies, untracked cash records, and overdue payment follow-ups for property owners.',
    description:
      'Fullstack rental property management platform built with Laravel MVC and MySQL. Features multi-room tenant leasing, automated WhatsApp payment billing reminders, income audits, and staff RBAC.',
    narrative:
      'Eliminated manual rental tracking inefficiencies and overdue payment follow-ups. This web platform automates digital invoice dispatch via WhatsApp business templates and provides real-time room occupancy metrics for property managers.',
    image: '/images/project-3.png',
    stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'WhatsApp Gateway', 'REST API'],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/AlvianPh/laravel_seulanga' },
    ],
    stickyMeta: {
      role: 'Fullstack Web Engineer',
      timeline: 'Jul — Sep 2026',
      arch: 'Laravel MVC + Relational DB',
      status: 'Active Operational System',
    },
    metrics: [
      { val: 'Automated', label: 'WhatsApp Billing Template' },
      { val: '100%', label: 'Room Occupancy Audit' },
      { val: 'RBAC', label: 'Multi-Role Staff Access' },
    ],
    highlights: [
      'Designed relational database schema with normalized foreign keys across rooms, tenants, and lease contracts.',
      'Automated monthly invoice calculation with customizable WhatsApp template dispatch.',
      'Implemented role-based access control (RBAC) separating property owner metrics from on-site caretakers.',
    ],
    featured: true,
  },
  {
    name: 'SIMPEG El-Rahma',
    context: 'Higher Education HRIS · Laravel Production',
    category: 'web',
    date: 'AUG 2025 — JUN 2026',
    purpose:
      'An active administrative human resource system deployed in production for STMIK El Rahma Yogyakarta.',
    description:
      'Enterprise Human Resource Information System (HRIS) developed for STMIK El Rahma Yogyakarta. Manages lecturer academic credentials, staff rank promotions, dynamic letter generation, and administrative records.',
    narrative:
      'An active administrative human resource system deployed in production for STMIK El Rahma Yogyakarta. Replaced physical paper archives with centralized digital records, academic promotion tracking, and tiered administrative role-based access.',
    image: '/images/simpeg.png',
    stack: ['Laravel', 'PHP', 'MySQL', 'Blade Components', 'Bootstrap', 'Git'],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/ilhanmanzis/simpeg' },
    ],
    stickyMeta: {
      role: 'Web Engineer & Analyst',
      timeline: 'Aug 2025 — Jun 2026',
      arch: 'Modular Blade + MySQL',
      status: 'Live in Production',
    },
    metrics: [
      { val: 'Live', label: 'STMIK El Rahma Production' },
      { val: '100%', label: 'Digital Staff Archiving' },
      { val: 'Figma', label: 'High-Fidelity UI Match' },
    ],
    highlights: [
      'Maintained production codebase for campus human resource operations serving faculty and administrative staff.',
      'Engineered automated academic credential tracking and service rank promotion eligibility calculators.',
      'Standardized structured Blade layout templates with rigorous database migration audit logs.',
    ],
    featured: true,
  },
  {
    name: 'Kerti Kawista',
    context: 'Construction Safety & Attendance · Product UI/UX',
    category: 'mobile',
    date: 'JUL 2023',
    purpose:
      'A UI/UX engineering case study aimed at reducing occupational hazards on construction sites.',
    description:
      'Comprehensive product design case study and high-fidelity prototype for construction site safety monitoring. Features daily digital check-in workflows, PPE (K3) inspection checklists, and verified hazard incident reporting.',
    narrative:
      'A UI/UX engineering case study aimed at reducing occupational hazards on construction sites. Integrates self-service daily digital attendance with mandatory Personal Protective Equipment (PPE/K3) verification checklists prior to site gate clearance, built on a tested Figma design token system.',
    image: '/images/kerti-kawista.png',
    stack: ['Figma', 'Design Systems', 'Design Tokens', 'User Research', 'Usability Testing'],
    links: [
      { label: 'Figma Prototype', href: 'https://www.figma.com/design/x7vS92n5lFw6bLzX90o1vK/Kerti-Kawista-Safety' },
      { label: 'GitHub Showcase', href: 'https://github.com/AlvianPh/web-kerti-kaawista' },
    ],
    stickyMeta: {
      role: 'Product Designer & UX',
      timeline: 'Design Concept (2023)',
      arch: 'Figma Tokens & User Flows',
      status: 'Interactive Prototype',
    },
    metrics: [
      { val: 'K3', label: 'Safety Protocol Flow' },
      { val: 'Tokens', label: 'Modular Design Variables' },
      { val: 'Tested', label: 'Field Worker Journey' },
    ],
    highlights: [
      'Formulated user-centered construction worker journey reducing check-in overhead while enforcing safety rules.',
      'Constructed complete atomic Figma design token library with high-contrast accessibility standards.',
      'Conducted field walkthrough tests validating readability under intense outdoor sunlight conditions.',
    ],
    featured: true,
  },
  {
    name: 'Comdess Portal',
    context: 'Village Governance & Public Community · Laravel Web',
    category: 'web',
    date: 'JUN 2026',
    purpose:
      'A mobile-friendly public community web portal engineered to ensure administrative transparency for village governance.',
    description:
      'Open-source public information portal for local village administration. Provides official aid disbursement announcements, community activity schedules, public letters, and structured apparatus directories.',
    narrative:
      'A mobile-friendly public community web portal engineered to ensure administrative transparency for village governance, aid disbursement announcements, community schedules, and hierarchical official staff directories managed via role-based authorization.',
    image: '/images/project-1.png',
    stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Spatie Permission', 'Git'],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/AlvianPh/comdess' },
    ],
    stickyMeta: {
      role: 'Fullstack Laravel Developer',
      timeline: 'Jun 2026',
      arch: 'Laravel + Spatie RBAC',
      status: 'Completed & Open Source',
    },
    metrics: [
      { val: 'Public', label: 'Village News & Announcements' },
      { val: 'Spatie', label: 'Granular Role Management' },
      { val: '100%', label: 'Mobile-First Accessibility' },
    ],
    highlights: [
      'Developed complete village public portal facilitating transparent administrative publication workflows.',
      'Configured Spatie Permission for hierarchical role access separating village apparatus from editorial staff.',
      'Built responsive client views with mobile-first CSS ensuring lightweight cellular data consumption.',
    ],
    featured: true,
  },
];
