import type { Narrative } from './narrative';
import { withBase } from '../lib/path';

export type IconName =
  | 'rocket'
  | 'plane'
  | 'flask'
  | 'database'
  | 'play'
  | 'school'
  | 'scotty'
  | 'spark'
  | 'apple-logo'
  | 'users'
  | 'book'
  | 'instagram'
  | 'globe';

export type Region = 'San Carlos' | 'Sunnyvale' | 'Pittsburgh' | 'San Diego';

export interface ExperienceArtifact {
  label: string;
  href: string;
  kind?: 'code' | 'video' | 'pdf' | 'link';
}

export interface RoadmapStop {
  slug: string;
  shortName: string;
  company: string;
  role: string;
  region: Region;
  location: string;
  period: string;
  blurb: string;
  highlights: string[];
  tags: string[];
  icon: IconName;
  pastel: string;
  pastelStrong: string;
  coords: { x: number; y: number };
  /** Optional logo image — overrides the icon on the home-page marker and the detail-page header tile. */
  logo?: string;
  /** When true, the logo fills its tile edge-to-edge (used when the logo already has its own background). */
  logoFill?: boolean;
  /** Custom background color for the logo tile on the detail page (used when the logo is light-on-transparent). */
  logoBg?: string;
  narrative?: Narrative;
  photos?: { src: string; alt: string; caption?: string }[];
  artifacts?: ExperienceArtifact[];
}

export interface RegionInfo {
  name: Region;
  label: string;
  center: { x: number; y: number };
  radius: { rx: number; ry: number };
  tint: string;
  tintStrong: string;
}

// Map canvas: 1200 x 680. West coast left, east coast right.
// City-level clusters with pins inside them.
export const regions: RegionInfo[] = [
  {
    name: 'San Carlos',
    label: 'San Carlos',
    center: { x: 175, y: 195 },
    radius: { rx: 115, ry: 90 },
    tint: '#cfe6f3',
    tintStrong: '#5a9ec4',
  },
  {
    name: 'Sunnyvale',
    label: 'Sunnyvale',
    center: { x: 410, y: 370 },
    radius: { rx: 115, ry: 90 },
    tint: '#f7d9c4',
    tintStrong: '#d6885a',
  },
  {
    name: 'Pittsburgh',
    label: 'Pittsburgh',
    center: { x: 1015, y: 195 },
    radius: { rx: 135, ry: 100 },
    tint: '#e6dcf2',
    tintStrong: '#9c83c8',
  },
  {
    name: 'San Diego',
    label: 'San Diego',
    center: { x: 260, y: 590 },
    radius: { rx: 120, ry: 90 },
    tint: '#f4e7c2',
    tintStrong: '#c9a44e',
  },
];

// Chronological order by start date: CMU → Joby → Walmart → Apple.
export const roadmap: RoadmapStop[] = [
  {
    slug: 'cmu',
    shortName: 'Carnegie Mellon University',
    company: 'Carnegie Mellon University',
    role: 'B.S. Electrical & Computer Engineering + B.S. Robotics',
    region: 'Pittsburgh',
    location: 'Pittsburgh, PA',
    period: 'Aug 2020 – May 2024',
    blurb:
      'Four years studying ECE and Robotics — where I learned to build systems from the silicon up and joined research labs spanning healthcare robotics and space avionics.',
    highlights: [
      'Capstone — EMG-controlled self-massage robot, integrating sensor and manipulator',
      'Researcher at the Human & Robot Partners Lab — wound-care manipulation; shadowed nurses for a month to ground the design',
      `TA across three CMU courses — Embedded Systems, Computer Systems, and Ethics in Computing (see <a href="${withBase('/experience#teaching')}" class="underline underline-offset-2 hover:text-accent transition-colors">Teaching Experience</a> for details)`,
    ],
    tags: ['ECE', 'Robotics', 'C/C++', 'FreeRTOS', 'Research', 'Teaching'],
    icon: 'scotty',
    pastel: '#e6dcf2',
    pastelStrong: '#9c83c8',
    coords: { x: 1015, y: 162 },
    logo: '/experience/cmu/logo.png',
    logoBg: '#9c83c8',
    narrative:
      "CMU was where I figured out what kind of engineer I wanted to be. The first two years were a deep dive into systems and embedded — building things from logic gates up. The last two years pulled in robotics, controls, and research. Teaching three classes along the way taught me as much as taking them did.",
  },
  {
    slug: 'joby',
    shortName: 'Joby Aviation',
    company: 'Joby Aviation',
    role: 'Manufacturing Test Intern',
    region: 'San Carlos',
    location: 'San Carlos, CA',
    period: 'Summer 2022',
    blurb:
      'A summer as a manufacturing test intern at Joby Aviation, the electric VTOL aircraft company. I designed and built test stations for flight components and wrote Python automation for functional testing.',
    highlights: [
      'Designed and built test stations for flight components — automated voltage I/O and data-transfer measurements in Python with LabJack and Iperf3, cutting about 30 minutes off each test cycle.',
      "Built a GUI tool that writes a power-controller board's configuration to the chip's EEPROM over I2C — so a board can be configured from a file without writing code or working at the I2C level.",
    ],
    tags: ['Python', 'Test automation', 'LabJack', 'EEPROM', 'I2C', 'Logic analyzer'],
    icon: 'plane',
    pastel: '#cfe6f3',
    pastelStrong: '#5a9ec4',
    coords: { x: 175, y: 165 },
    narrative: [
      {
        heading: 'What I did',
        paragraphs: [
          "Joby is building electric VTOL aircraft, and I joined the manufacturing side as a test intern. The internship was unusually open-ended — there was no pre-defined intern project, so I picked up the work my manager didn't have bandwidth for, across test infrastructure and embedded tooling.",
        ],
      },
      {
        heading: 'What I took away',
        paragraphs: [
          "The technical lesson that stuck was depth before speed. The EEPROM project meant working with hardware I'd never touched — an EEPROM and a logic analyzer — and the way through wasn't to start writing code, it was to read the documentation until I understood how the chip stored data and that it communicated over I2C. With an accurate model, debugging got straightforward: the logic analyzer let me watch the I2C traffic and confirm the EEPROM was actually being written. The same pattern held on the test side — running each functional test by hand on the bench instruments before automating it meant I understood the process I was scripting, not just the script. The slow part, building an accurate picture of the system, is what makes the fast part possible.",
        ],
      },
    ],
    artifacts: [
      { label: 'Joby Aviation', href: 'https://www.jobyaviation.com', kind: 'link' },
    ],
  },
  {
    slug: 'walmart',
    shortName: 'Walmart Global Tech',
    company: 'Walmart Global Tech',
    role: 'Software Engineering Intern',
    region: 'Sunnyvale',
    location: 'Sunnyvale, CA',
    period: 'Summer 2023',
    blurb:
      "I spent a summer as a software engineering intern in Walmart's Sunnyvale office, on the Fulfillment Services team. I built an automated feature — a Spark ETL pipeline orchestrated with Airflow — that manages Purchase Order closures, running daily over retail-scale data.",
    highlights: [
      'Built an automated feature for the Fulfillment Services team that manages Purchase Order closures, shipped as a scheduled daily job.',
      'Engineered the data pipeline with Spark ETLs, orchestrated by an Airflow DAG of dependent tasks.',
      'Processed retail-scale purchase-order data — hundreds of thousands of rows per run.',
    ],
    tags: ['Apache Spark', 'Airflow', 'ETL', 'Python', 'Azure SQL', 'Data pipelines'],
    icon: 'spark',
    pastel: '#f7d9c4',
    pastelStrong: '#d6885a',
    coords: { x: 410, y: 340 },
    narrative: [
      {
        heading: 'What I built',
        paragraphs: [
          "The Fulfillment Services team manages purchase orders for the sellers on Walmart's marketplace. My project was an automated feature for handling Purchase Order closures — a pipeline that finds purchase orders ready to be closed and closes them, without anyone doing it by hand. I built it as a set of Spark ETLs (extract, transform, load) running over retail-scale purchase-order data.",
          "The pipeline ran on Airflow, which orchestrated it as a daily scheduled job. Airflow models a workflow as a DAG — a graph of dependent tasks — and its scheduler runs them in the right order, parallelizing the steps that don't depend on each other and scaling across worker nodes as the data volume grows. That let the Purchase Order closure feature run reliably every day without anyone touching it.",
        ],
      },
    ],
    artifacts: [
      { label: 'Walmart Global Tech', href: 'https://walmartglobaltech.com', kind: 'link' },
    ],
  },
  {
    slug: 'apple',
    shortName: 'Apple Inc.',
    company: 'Apple Inc.',
    role: 'Systems & Performance Engineer, Streaming Media',
    region: 'San Diego',
    location: 'San Diego, CA',
    period: '2024 – present',
    blurb:
      "I am a systems and performance engineer on Apple's Audio & Media Technologies team, which builds the streaming-media stack behind playback across every Apple platform. I own the DRM layer — the framework and APIs behind the key exchange that lets devices decrypt protected content.",
    highlights: [
      'Own the DRM layer for content protection — the framework code and APIs that manage the key exchange required to decrypt protected media on-device.',
      'Work close to the metal in C and Objective-C, on multithreaded systems code that runs across hundreds of millions of Apple devices.',
      'Built my own agent and custom skills with Claude to investigate OS-level bugs faster — bringing AI tooling into day-to-day systems work.',
    ],
    tags: [
      'C',
      'Objective-C',
      'DRM',
      'Key exchange',
      'HLS',
      'Streaming media',
      'Multithreading',
      'AI tooling',
    ],
    icon: 'apple-logo',
    pastel: '#f4e7c2',
    pastelStrong: '#c9a44e',
    coords: { x: 260, y: 560 },
    narrative: [
      {
        heading: 'What I work on',
        paragraphs: [
          "Apple's Audio & Media Technologies team builds the streaming-media stack that powers playback across every Apple platform — iPhone, iPad, Apple TV, Mac, Vision Pro — along with the third-party platforms Apple Services reaches. That means supporting the formats media arrives in (video and audio codecs, captions, subtitles, timed metadata) and the protocols that stream it, like HLS.",
          "My piece of that is content protection. Studios and labels require that their movies, shows, and music can't be accessed or copied without authorization, and DRM (digital rights management) is what enforces it. I own the DRM layer — the framework code and APIs behind the key exchange a device performs to obtain decryption keys before a protected stream can play. The work is making that exchange reliable, secure, and fast.",
          "This is operating-system-level work — system code that lives in the OS itself, the layer applications build on rather than application code. DRM is my area of expertise, but the role also means stepping into the broader computer-systems and OS work the team takes on. It's close to the metal either way: C and Objective-C, multithreaded, with the correctness and performance constraints that come with code shipping at Apple's scale.",
        ],
      },
    ],
  },
];
