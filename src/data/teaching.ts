import type { IconName, ExperienceArtifact } from './roadmap';
import type { Narrative } from './narrative';

export interface TeachingRole {
  slug: string;
  course: string;
  role: string;
  institution: string;
  location: string;
  period: string;
  current: boolean;
  highlights: string[];
  tags: string[];
  icon: IconName;
  pastel: string;
  pastelStrong: string;
  logo?: string;
  logoBg?: string;
  blurb?: string;
  narrative?: Narrative;
  photos?: { src: string; alt: string; caption?: string }[];
  artifacts?: ExperienceArtifact[];
}

// Most-recent first
export const teaching: TeachingRole[] = [
  {
    slug: 'ta-embedded-systems',
    course: 'Intro to Embedded Systems',
    role: 'Teaching Assistant',
    institution: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    period: 'Aug 2023 – May 2024',
    current: false,
    highlights: [
      'Held about 8 hours of office hours a week and graded assignments, helping students work through embedded systems concepts.',
      'Teaching the material sharpened my own skills in concurrency, RTOS, and embedded systems — explaining it to students is what made it stick.',
    ],
    tags: ['Embedded', 'RTOS', 'Concurrency', 'Teaching'],
    icon: 'book',
    pastel: '#e6dcf2',
    pastelStrong: '#9c83c8',
    logo: '/experience/cmu/logo.png',
    logoBg: '#9c83c8',
  },
  {
    slug: 'ta-ethics-policy',
    course: 'Ethics & Policy Issues in Computing',
    role: 'Teaching Assistant',
    institution: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    period: 'Aug 2023 – May 2024',
    current: false,
    highlights: [
      'Graded student assignments and gave feedback throughout the course.',
      'Took part in class debates, helping students think critically about how we use technology and its impact — both positive and negative — on society.',
    ],
    tags: ['Ethics', 'Technology & society', 'Teaching'],
    icon: 'book',
    pastel: '#e6dcf2',
    pastelStrong: '#9c83c8',
    logo: '/experience/cmu/logo.png',
    logoBg: '#9c83c8',
  },
  {
    slug: 'ta-computer-systems',
    course: 'Intro to Computer Systems',
    role: 'Teaching Assistant',
    institution: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    period: 'Jan 2022 – May 2023',
    current: false,
    highlights: [
      'Taught lecture material and the concepts behind the lab assignments — C fundamentals, cache, memory allocation, exceptions and processes, signals, network and concurrent programming, and synchronization.',
      'Held 8 hours of office hours a week, helping students through labs and homework and debugging alongside them in GCC and GDB.',
    ],
    tags: ['C', 'Systems', 'GCC & GDB', 'Teaching'],
    icon: 'book',
    pastel: '#e6dcf2',
    pastelStrong: '#9c83c8',
    logo: '/experience/cmu/logo.png',
    logoBg: '#9c83c8',
  },
];
