import type { Accent } from '@/lib/ui';

/**
 * Tipe data untuk seluruh konten portfolio.
 * UI component hanya membaca data dengan bentuk ini — ubah kontennya di `portfolio.ts`.
 */

export interface Link {
  label: string;
  href: string;
}

export interface SiteMeta {
  /** Bahasa halaman, mis. "en" atau "id". */
  lang: string;
  title: string;
  description: string;
  /** Gambar preview saat link dibagikan (1200×630), mis. "/images/og.png". */
  ogImage: string;
}

export interface Profile {
  name: string;
  /** Satu baris status, mis. "Fresh Graduate — Informatics". */
  role: string;
  tagline: string;
  location: string;
  /** Path di /public, mis. "/images/profile.jpg". */
  photo: string;
  /** Path file CV di /public, mis. "/cv.pdf". */
  cvUrl: string;
}

export interface HeroNote {
  label: string;
  title: string;
  items: string[];
  color: Accent;
}

export interface Hero {
  /** Label kecil di atas nama, mis. "SOFTWARE ENGINEER · MOBILE & WEB · APPLIED AI". */
  roleLabel?: string;
  /** Headline utama, mis. "Software Engineer". */
  headline?: string;
  /** Sub-headline pendamping headline utama. */
  subheadlineLead?: string;
  /** Micro-line tech stack, mis. ['Flutter', 'Laravel', 'REST API', 'SQL', 'Git']. */
  techStack?: string[];
  /** Kalimat pembuka di bawah nama. */
  lead: string;
  primaryCta: Link;
  secondaryCta: Link;
  /** Kartu catatan di sisi kanan hero. */
  notes: HeroNote[];
}

export interface About {
  /** Paragraf About. Bungkus teks dengan ==...== untuk efek stabilo. */
  paragraphs: string[];
  facts: { label: string; value: string }[];
}

export interface Education {
  institution: string;
  degree: string;
  gpa: string;
  startYear: string;
  endYear: string;
}

export interface Publication {
  /** Status publikasi, mis. "Published" atau "Accepted". */
  status: string;
  venue: string;
  note: string;
  title: string;
  year: string;
  url: string;
  authors?: string;
  doi?: string;
}

export interface Research {
  period?: string;
  topic: string;
  summary: string;
  keywords: string[];
  publications: Publication[];
  learnings: string[];
  details: {
    dataset: string;
    results: string;
    repository: string;
  };
}

export interface ProjectStickyMeta {
  role: string;
  timeline: string;
  arch: string;
  status: string;
}

export interface ProjectMetric {
  val: string;
  label: string;
}

export interface Project {
  /** Tambah project = tambah satu objek di projects.ts / portfolio.ts */
  name: string;
  description: string;
  /** Masalah atau tujuan teknis yang diselesaikan */
  purpose?: string;
  /** Narasi rekayasa teknis mendalam di dalam dossier modal */
  narrative?: string;
  /** Konteks pengerjaan, mis. "Personal Finance · Flutter" atau "Fullstack Web" */
  context: string;
  category: 'mobile' | 'web';
  date: string;
  stack: string[];
  image: string;
  gallery?: string[];
  links: Link[];
  stickyMeta?: ProjectStickyMeta;
  metrics?: ProjectMetric[];
  highlights?: string[];
  featured?: boolean;
  isDraft?: boolean;
}

export interface Build {
  intro: string;
  /** Daftar fokus teknis (sticky note). */
  focus: string[];
  projects: Project[];
}

export interface CareerMilestone {
  period: string;
  role: string;
  organization: string;
  type: 'engineering' | 'teaching' | 'organization';
  description?: string;
  tags: string[];
  curriculumObjectives?: {
    tracks: string;
    objectives: string[];
  };
}

export interface Teaching {
  /** Paragraf pembuka. Bungkus teks dengan ==...== untuk efek stabilo. */
  intro: string;
  subject: string;
  institution: string;
  duration: string;
  stats: { value: string; label: string }[];
  curriculum: string;
  /** Apa yang dilatih oleh pengalaman mengajar (checklist). */
  highlights: { title: string; detail: string }[];
  milestones?: CareerMilestone[];
}

export interface SkillGroup {
  title: string;
  items: string[];
  /** Warna aksen kartu (dekorasi). */
  color: Accent;
  /** Tandai apakah skill ini merupakan supporting differentiator (mis. riset). */
  supporting?: boolean;
  badge?: string;
}

export interface ExploringTrack {
  /** Label pendek di pojok halaman, mis. "Data / ML". */
  label: string;
  title: string;
  learning: string;
  building: string;
  exploring: string;
}

export interface Contact {
  cta: string;
  /** Kalimat pendek di bawah CTA. */
  message: string;
  email: string;
  links: Link[];
}

export interface NavItem {
  label: string;
  /** Anchor id section, mis. "#research". */
  href: string;
}

export interface CertificateItem {
  name: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
}

export interface Portfolio {
  site: SiteMeta;
  profile: Profile;
  nav: NavItem[];
  hero: Hero;
  about: About;
  education: Education;
  research: Research;
  build: Build;
  teaching: Teaching;
  skills: SkillGroup[];
  certificates?: CertificateItem[];
  exploring: ExploringTrack[];
  contact: Contact;
}
