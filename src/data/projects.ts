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
    gallery: ['/images/arthawira.png', '/images/arthawira-screen.png'],
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
    image: '/images/jawir.png',
    gallery: [
      '/images/jawir.png',
      '/images/jawir-1.png',
      '/images/jawir-3.png',
      '/images/jawir-2.png',
      '/images/jawir-4.png',
    ],
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
    image: '/images/seulanga.png',
    gallery: ['/images/seulanga.png'],
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
    context: 'Higher Education HRIS · Product Design & QA',
    category: 'web',
    date: 'AUG 2025 — JUN 2026',
    purpose:
      'Streamlined campus personnel governance by architecting user-centered administrative business flows, comprehensive Figma UI design tokens, and systematic system testing protocols.',
    description:
      'Enterprise Human Resource Information System (HRIS) for STMIK El Rahma Yogyakarta. Spearheaded product design, administrative business process mapping, and quality assurance/testing (fullstack implementation engineered by Ilhan Manzis).',
    narrative:
      'Spearheaded end-to-end product design and quality validation for STMIK El Rahma\'s institutional HRIS. Formulated administrative business workflows, architected high-fidelity Figma UI/UX components, and conducted comprehensive User Acceptance Testing (UAT). Development and codebase implementation were authored collaboratively by software engineer peer Ilhan Manzis.',
    image: '/images/simpeg.png',
    gallery: [
      '/images/simpeg.png',
      '/images/simpeg-1.png',
      '/images/simpeg-2.png',
      '/images/simpeg-3.png',
      '/images/simpeg-4.png',
    ],
    stack: ['Figma (UI/UX)', 'Business Process Flow', 'System & UAT Testing', 'Laravel (Collaborator)', 'MySQL'],
    links: [
      { label: 'Live Website', href: 'https://simpeg.ilhanmanzis.my.id/' },
      { label: 'Figma UI/UX', href: 'https://www.figma.com/design/41cLqlpN0JP67qc3Oj0A36/Sistem-Kepegawaian-UI-UX?node-id=289-4993&t=9VgteWjnhykgMiek-0' },
      { label: 'GitHub (Developer: Ilhan Manzis)', href: 'https://github.com/ilhanmanzis/simpeg' },
    ],
    stickyMeta: {
      role: 'Product Designer & QA Tester',
      timeline: 'Aug 2025 — Jun 2026',
      arch: 'Figma UI/UX · Process Flow · UAT',
      status: 'Live in Production',
    },
    metrics: [
      { val: 'Design & QA', label: 'Product & Testing Lead' },
      { val: '100%', label: 'Business Flow Specification' },
      { val: 'Live', label: 'Campus Production Rollout' },
    ],
    highlights: [
      'Formulated comprehensive institutional business workflows covering faculty promotion, academic credentials, and staff archives.',
      'Engineered high-fidelity Figma design token library and responsive interface mockups reflecting campus identity.',
      'Conducted systematic User Acceptance Testing (UAT), regression checks, and administrative user validation before rollout.',
      'Transparent collaboration: Core Laravel application and database architecture engineered by peer developer Ilhan Manzis.',
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
    image: '/images/kerti.png',
    gallery: [
      '/images/kerti.png',
      '/images/kerti-1.png',
      '/images/kerti-2.png',
      '/images/kerti-3.png',
      '/images/kerti-4.png',
    ],
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
    name: 'SMK Koperasi Web & CMS',
    context: 'Vocational School Web Portal & Institutional CMS · Laravel & Filament',
    category: 'web',
    date: 'ACTIVE · 2026',
    purpose:
      'An enterprise institutional web portal and custom Filament-powered CMS engineered for autonomous school content management and student admissions.',
    description:
      'Official web ecosystem and administrative CMS for SMK Koperasi Yogyakarta. Features 12 tailored Filament management resources, multi-role publishing workflows (Super Admin, Admin, Content Editor), verified SPMB admissions routing, and responsive public academic showcases.',
    narrative:
      'Architected as the primary digital gateway and administrative operations platform for SMK Koperasi Yogyakarta. Built with Laravel 12 and Filament PHP v3, it equips educators and administrative staff to independently govern academic curricula, vocational competencies (Accounting, Digital Business, DKV, Tourism), official announcements, verified admissions (SPMB), and media galleries without developer intervention.',
    image: '/images/websitekoperasi.jpg',
    gallery: [
      '/images/websitekoperasi.jpg',
      '/images/websitekoperasi-campus.jpg',
      '/images/websitekoperasi-dkv.jpg',
      '/images/websitekoperasi-bisnis.jpg',
      '/images/websitekoperasi-akuntansi.jpg',
    ],
    stack: ['Laravel 12', 'Filament PHP v3', 'Tailwind CSS', 'MySQL', 'Blade', 'Alpine.js', 'Vite'],
    links: [
      { label: 'GitHub (Repository)', href: 'https://github.com/AlvianPh/websitekoperasi' },
    ],
    stickyMeta: {
      role: 'Lead Fullstack Laravel & CMS Architect',
      timeline: '2025 — Present',
      arch: 'Laravel 12 + Filament v3 CMS',
      status: 'Under Active Development · Handover Phase',
    },
    metrics: [
      { val: '12', label: 'Filament CMS Resources' },
      { val: '3-Tier', label: 'Role & Publishing Workflow' },
      { val: '100%', label: 'Autonomous School Operations' },
    ],
    highlights: [
      'Architected 12 dedicated Filament CMS resources empowering non-technical school staff to manage announcements, achievements, vocational programs, and faculty profiles.',
      'Engineered multi-stage publication state machines (Draft, Published, Archived) with strict role segregation (Super Admin, Admin, Content Editor).',
      'Integrated verified student admissions (SPMB) workflows, structured WhatsApp counseling routing, and dynamic metric sanitization.',
    ],
    featured: true,
  },
];
