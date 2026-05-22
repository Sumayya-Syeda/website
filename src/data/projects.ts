import type { Narrative } from './narrative';

export type Category = 'Robotics' | 'Systems';

export interface ProjectArtifact {
  label: string;
  href: string;
  kind?: 'code' | 'video' | 'pdf' | 'link';
  kindLabel?: string;
}

export interface Project {
  slug: string;
  title: string;
  context: string;
  period: string;
  summary: string;
  details: string[];
  tags: string[];
  category: Category;
  featured?: boolean;
  narrative?: Narrative;
  photos?: { src: string; alt: string; caption?: string; href?: string; widthPercent?: number }[];
  compactPhotos?: boolean;
  video?: { src?: string; youtubeId?: string; caption?: string; widthPercent?: number; poster?: string };
  /** When true, the video renders as a cell inside the photos grid instead of as a separate section below. */
  videoInline?: boolean;
  artifacts?: ProjectArtifact[];
}

export const categoryColors: Record<Category, { pastel: string; strong: string }> = {
  Robotics: { pastel: '#d6e8cf', strong: '#6ba36b' },
  Systems: { pastel: '#e6dcf2', strong: '#9c83c8' },
};

// Robotics first (most recent → oldest), then Systems (most recent → oldest).
export const projects: Project[] = [
  // ─── Robotics ─────────────────────────────────────────
  {
    slug: 'emg-self-massage-robot',
    title: 'Bionics Massage Robot',
    context: 'Robotics Capstone — CMU',
    period: 'Fall 2023 – Spring 2024',
    featured: true,
    compactPhotos: true,
    summary:
      'A semi-teleoperated robotic massage system that delivers therapeutic shoulder massages through human-like robotic hands and gesture-based control.',
    details: [
      'Led overall system design and software development for a 4-person capstone team, coordinating task delegation, project timelines, design reviews, and milestone execution.',
      'Directed development of system-level engineering documentation including requirements definition, risk analysis, verification planning, and system acceptance criteria.',
      'Owned the full sensing and control architecture, including embedded firmware, sensor integration, gesture recognition, wireless communication, and actuator control.',
      'Built the complete gesture-control interface using flex sensors, microcontrollers, and Bluetooth-based teleoperation for robotic hand control.',
    ],
    tags: [
      'Robotics',
      'ROS 2',
      'Arduino',
      'Flex sensors',
      'Bluetooth',
      '3D printing',
      'Human-centered design',
    ],
    category: 'Robotics',
    narrative: [
      {
        heading: 'Problem Statement',
        paragraphs: [
          'Modern lifestyles often leave people with limited time for self-care and stress relief. Many individuals experience muscle tension and fatigue from long working hours, but regular massage therapy is not always accessible due to busy schedules, cost, or physical limitations. Additionally, some users may struggle to perform self-massage because of reduced hand strength, disabilities, or mobility challenges. The project aimed to address the lack of accessible, convenient, and personalized massage solutions for these users.',
        ],
      },
      {
        heading: 'Motivation',
        paragraphs: [
          'The motivation behind the project was to use robotics to improve accessibility to wellness and relaxation. The team wanted to create a system that could provide a consistent, customizable, and on-demand massage experience without requiring a professional masseuse or spa visit. Robotics also offered an opportunity to support users with disabilities or physical limitations by enabling independent self-care. The project combined robotics, sensing systems, and human-centered design to create a more natural and intuitive interaction between the user and the robot.',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'The proposed solution was a robotic massage platform consisting of three main subsystems:',
        ],
        bullets: [
          {
            name: 'Robotic Hand Manipulators',
            text: 'Two humanoid-inspired robotic hands designed with 3D-printed components, servos, cables, and torsion springs to mimic human grasping and massage motions.',
          },
          {
            name: 'Adjustable Robotic Frame',
            text: 'A modular aluminum frame with linear actuators and stepper motors that positioned the robotic hands across the user’s shoulders for different massage techniques and movement patterns.',
          },
          {
            name: 'Gesture-Control Interface',
            text: 'A sensing glove equipped with flex sensors that translated user hand gestures into robot commands. Users could start or stop the massage, select massage modes, and adjust intensity through intuitive gestures.',
          },
        ],
      },
      {
        paragraphs: [
          'The system was powered and coordinated using ROS 2, Arduino microcontrollers, Bluetooth communication, and custom software architecture that enabled real-time gesture recognition and robotic control.',
          'The robot supported multiple massage techniques such as vibration, long press, and stretching motions while prioritizing safety, comfort, and user customization. The final design emphasized human-like interaction, accessibility, modularity, and user safety through soft-touch materials, emergency stop systems, and stable mechanical design.',
        ],
      },
    ],
    photos: [
      {
        src: '/projects/emg-self-massage-robot/glove.jpg',
        alt: 'Remote flex sensor glove used as input for the massage robot.',
        caption: 'Remote Flex Sensor Glove',
      },
      {
        src: '/projects/emg-self-massage-robot/two-hands.png',
        alt: 'Two robotic hands mounted on the test frame, viewed from above.',
        caption: 'Both hands mounted on the frame.',
      },
      {
        src: '/projects/emg-self-massage-robot/manipulator.png',
        alt: 'Single 3D-printed robotic hand prototype in blue and red, held in the lab.',
      },
    ],
    video: {
      src: '/projects/emg-self-massage-robot/demo.mp4',
      poster: '/projects/emg-self-massage-robot/demo-poster.jpg',
    },
    artifacts: [
      {
        label: 'Demo video',
        href: '/projects/emg-self-massage-robot/demo.mp4',
        kind: 'video',
      },
      {
        label: 'System Design & Development Document',
        href: '/projects/emg-self-massage-robot/system-design-document.pdf',
        kind: 'pdf',
        kindLabel: 'System Design',
      },
    ],
  },
  {
    slug: 'search-and-rescue-lab',
    title: 'Search & Rescue Lego Robot',
    context: 'Intro to Robotics — CMU',
    period: 'Spring 2023',
    summary:
      'A Lego robot that picks up a survivor figure and brings them to safety, navigating a wall-less obstacle course in low-light conditions — including stairs, ramps, and identifying which target to disable.',
    details: [
      'Computer vision task lead — streamed Raspberry Pi camera video to a Flask web page.',
      'Owned both perception (detect the colored ball with OpenCV) and motion control (drive the robot to it). Recognition was the straightforward part — tuning the feedback controller for variable starting positions in low light was the harder problem.',
      'Made the perception pipeline robust enough to work in low light and against the visual noise of obstacle-filled terrain.',
    ],
    tags: ['Lego', 'OpenCV', 'Raspberry Pi', 'Flask', 'Computer Vision', 'Robotics'],
    category: 'Robotics',
    photos: [
      {
        src: '/projects/search-and-rescue-lab/robot.jpg',
        alt: 'The Lego search-and-rescue robot — Raspberry Pi, motors, claw-style pickup mechanism, and large terrain wheels, on the lab bench.',
        caption: 'The robot, with its claw-pickup design.',
        widthPercent: 50,
      },
    ],
    narrative: [
      {
        heading: 'Mission',
        paragraphs: [
          'The lab tasked us with building a Lego robot that could find and rescue a survivor figure under realistic search-and-rescue conditions. The entire obstacle course had no walls or guardrails — the robot had to stay on the path on its own, in low light, while identifying the correct target to disable, climbing up and down stairs, and ultimately carrying the survivor back to safety.',
        ],
      },
      {
        heading: 'Lessons Learned',
        paragraphs: [
          'This was an ambitious project on a short timeline, and one of the most formative team experiences I had at CMU. Three lessons stuck with me from it:',
        ],
        bullets: [
          {
            name: 'Prototype to learn, integrate to ship',
            text: 'We spent more time than necessary on mechanical polish before proving each subsystem worked end-to-end. Prototyping pickup, drivetrain, and perception in isolation and validating them before integration would have caught the pickup-angle problem much earlier.',
          },
          {
            name: 'A reliable basic system beats an ambitious shaky one',
            text: 'One of my main tasks was perception and motion control: recognize a colored ball and drive to it. Recognition was the straightforward part — the harder problem was tuning a controller for variable starting positions in low light. That taught me how much downstream work depends on a solid base; a drivetrain that handles common terrain well is more useful than one that tries to handle every terrain.',
          },
          {
            name: 'Small teams need both ownership and elasticity',
            text: 'On a 3-person team, knowing exactly what your task is matters — but so does stepping in when teammates need help. It’s easy to focus only on your own piece. Coming together earlier on overall robot decisions, rather than each owning a subsystem in parallel, would have been more efficient.',
          },
        ],
      },
    ],
    video: {
      src: '/projects/search-and-rescue-lab/demo.mp4',
      poster: '/projects/search-and-rescue-lab/demo-poster.jpg',
      widthPercent: 50,
      caption:
        "A demo of the robot climbing stairs and traversing rough terrain to 'rescue' the Lego human.",
    },
    videoInline: true,
  },
  {
    slug: 'self-balancing-robot',
    title: 'Self-Balancing Two-Wheel Robot',
    context: 'Intro to Robotics — CMU',
    period: 'Spring 2023',
    summary:
      'A free-standing two-wheel Lego robot that balances upright using two downward-facing light sensors and a tuned PID controller.',
    details: [
      'Wrote the calibration routine that ran at the start of each session so the controller worked across different surfaces and lighting.',
      'Implemented the motor-control code that drove the wheels based on the difference between the two light-sensor readings.',
      'Tuned the PID gains to keep the robot upright through small disturbances.',
    ],
    tags: ['Lego', 'PID', 'Sensors', 'Control', 'Robotics'],
    category: 'Robotics',
    narrative:
      'The robot was a tall Lego structure mounted on two wheels, with a downward-facing light sensor at the front and another at the back. The difference between those two readings told us which way the structure was leaning: if the front read higher than the back by more than a small delta, the robot was tilting forward; if lower, backward. The control loop turned the wheels just enough to drive that difference back to zero — a calibration step at the start of each run, plus tuned PID gains, kept the robot upright.',
  },
  {
    slug: 'jenga-robot-arm',
    title: 'Jenga Robot Arm',
    context: 'Robot Kinematics & Dynamics — CMU',
    period: 'Fall 2022',
    summary:
      'Programmed a 5-joint robot arm to pick up and place Jenga blocks and build a six-layer tower.',
    details: [
      'Solved trajectory planning with forward and inverse kinematics combined with spline interpolation.',
      'Implemented in MATLAB.',
    ],
    tags: ['MATLAB', 'Kinematics', 'Trajectory planning'],
    category: 'Robotics',
    narrative:
      "A 5-joint robot arm controlled in MATLAB. To pick up and stack Jenga blocks, I used forward and inverse kinematics to interpolate the positions the arm's end effector needed to reach, combined with spline trajectories so the arm moved smoothly between blocks instead of jerking. After enough back-and-forth picks and places, the arm built a six-layer Jenga tower.",
    video: {
      src: '/projects/jenga-robot-arm/demo.mp4',
      poster: '/projects/jenga-robot-arm/demo-poster.jpg',
      widthPercent: 25,
    },
  },

  // ─── Systems ──────────────────────────────────────────
  {
    slug: 'tablecast',
    title: 'TableCast',
    context: 'ECE Capstone — CMU',
    period: 'Fall 2023 – Spring 2024',
    featured: true,
    summary:
      'An interactive tabletop projection system that turns a kitchen counter into a hands-free smart cooking workspace — projecting recipes onto the surface and responding to voice and gesture input.',
    details: [
      'Owned the vision module — combined Google MediaPipe (hand tracking and gesture recognition) with OpenCV (image processing) into the perception pipeline that drove the rest of the system.',
      'Built spatial awareness so the program could distinguish zones within the projection — setup area, cooking area, and individual ingredients — and reason about where the user’s hand was acting.',
      'Wired the gesture pipeline to the interface: hovering a hand over a UI control (like a play button) triggered the corresponding action, letting the user control the experience without touching anything.',
    ],
    tags: [
      'ECE',
      'Capstone',
      'Computer Vision',
      'OpenCV',
      'MediaPipe',
      'Speech Recognition',
      'Projection',
      'Homography',
    ],
    category: 'Systems',
    narrative: [
      {
        heading: 'Problem Statement',
        paragraphs: [
          'Cooking while following online recipes or videos can be frustrating and inefficient. Users often need to repeatedly touch phones, tablets, or laptops with messy hands, creating hygiene issues and interrupting the cooking process. Additionally, traditional recipe videos are difficult to follow because the instructor’s setup rarely matches the user’s kitchen environment. The project aimed to create a more seamless, interactive, and hands-free cooking assistant that could guide users directly within their own workspace.',
        ],
      },
      {
        heading: 'Motivation',
        paragraphs: [
          'The motivation behind TableCast was to improve the kitchen experience through intuitive human-computer interaction. The team wanted to reduce friction during cooking by combining projection systems, computer vision, gesture recognition, and voice commands into a single smart countertop interface. The goal was to create a system that felt natural, minimized device interaction, and made following recipes easier, cleaner, and more accessible for users of different experience levels.',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'TableCast is an interactive tabletop projection system that transforms a kitchen counter into a smart cooking workspace. The system uses a camera, projector, microphone, and computer vision pipeline to guide users through recipes directly on the countertop.',
          'Key system features included:',
        ],
        bullets: [
          {
            name: 'Projected Recipe Interface',
            text: 'Recipes, instructional videos, timers, and ingredient guides were projected directly onto the kitchen counter using homography-based projection warping and calibration.',
          },
          {
            name: 'Hands-Free Interaction',
            text: 'Users controlled the interface using voice commands and hand gestures such as swipes and button-press gestures detected through MediaPipe hand tracking and speech recognition systems.',
          },
          {
            name: 'Computer Vision Ingredient Tracking',
            text: 'The system tracked ingredient placement and identified whether users selected the correct ingredients during recipe steps using OpenCV-based object detection and grid calibration.',
          },
          {
            name: 'Adaptive Calibration System',
            text: 'The projection system dynamically calibrated itself to different countertop layouts using homography transformations and visual calibration markers.',
          },
        ],
      },
      {
        paragraphs: [
          'The final system integrated computer vision, speech recognition, real-time UI projection, and distributed software modules into a unified smart kitchen assistant designed to make cooking more intuitive and interactive.',
        ],
      },
    ],
    photos: [
      {
        src: '/projects/tablecast/demo.jpeg',
        alt: 'TableCast demo: a projector casts an interactive cooking interface onto a tabletop, with an overhead camera mounted above the surface.',
        caption: 'Demo setup',
      },
      {
        src: '/projects/tablecast/demo-poster-preview.png',
        alt: 'First page of the TableCast public demo poster.',
        caption: 'Public demo poster (click to open PDF)',
        href: '/projects/tablecast/demo-poster.pdf',
        widthPercent: 70,
      },
    ],
    video: {
      youtubeId: 'Ba7YWVCNY4E',
    },
    artifacts: [
      {
        label: 'Final Report',
        href: '/projects/tablecast/final-report.pdf',
        kind: 'pdf',
        kindLabel: 'Final Report',
      },
      {
        label: 'Public Demo Poster',
        href: '/projects/tablecast/demo-poster.pdf',
        kind: 'pdf',
        kindLabel: 'Demo Poster',
      },
      {
        label: 'Project website',
        href: 'http://course.ece.cmu.edu/~ece500/projects/s24-teame8/',
        kind: 'link',
        kindLabel: 'Website',
      },
      {
        label: 'Demo video',
        href: 'https://www.youtube.com/watch?v=Ba7YWVCNY4E',
        kind: 'video',
        kindLabel: 'Demo Video',
      },
    ],
  },
  {
    slug: 'motor-control-rtos',
    title: 'Motor Control with FreeRTOS',
    context: 'Intro to Embedded Systems — CMU',
    period: 'Spring 2023',
    summary:
      'A multi-tasking embedded controller for a DC motor — users enter PID gains over a serial terminal in real time and tune how accurately the motor positions a wheel, while concurrent tasks handle a servo loop, LED status, keyboard input, and an LCD display.',
    details: [
      'Built the full STM32 firmware stack — solo, end to end.',
      'FreeRTOS scheduling, race-condition handling, double-buffered UART.',
      'PID, PWM, I2C, and an AT-command terminal interface.',
    ],
    tags: ['STM32', 'FreeRTOS', 'Embedded C', 'PID', 'UART', 'I2C', 'PWM', 'PCB design'],
    category: 'Systems',
    narrative: [
      {
        heading: 'Overview',
        paragraphs: [
          "An embedded systems project where I built a real-time motor controller from scratch on an STM32 board. The user could set the motor's target position and tune the PID control gains live from a terminal, while the system simultaneously ran a servo loop, blinked a status LED every half second, accepted keyboard input, and updated an LCD display.",
        ],
      },
      {
        heading: 'Concurrency on FreeRTOS',
        paragraphs: [
          "I used FreeRTOS to schedule the concurrent tasks — each one initialized in main with its name, function, and priority, and triggered by timers and interrupts. The hardest part of the project was managing race conditions where multiple tasks needed to access shared resources like the board registers. I protected those critical sections with taskEnterCritical and taskExitCritical so a higher-priority task couldn't interrupt a lower-priority one mid-write.",
        ],
      },
      {
        heading: 'UART — Producer/Consumer with Double Buffering',
        paragraphs: [
          'The UART layer was a classic producer-consumer setup. I used two buffers — one for incoming bytes from the data register, one for outgoing bytes — so reads and writes could be interleaved smoothly without blocking. Double-buffering meant the system never had to wait on a single shared register.',
        ],
        bullets: [
          {
            name: 'Write',
            text: 'The application puts a byte into the transmit buffer; the interrupt handler pulls it out and writes it to the data register.',
          },
          {
            name: 'Read',
            text: 'The interrupt handler grabs a byte from the data register and places it in the receive buffer; the read function pulls it out when called.',
          },
          {
            name: 'Critical sections',
            text: 'Both buffers are shared between application code and the interrupt handler, so the read and write functions run inside critical sections (taskEnterCritical / taskExitCritical) where interrupts are disabled.',
          },
        ],
      },
      {
        heading: 'PWM and AT Commands',
        paragraphs: [
          "PWM gave me precise, power-efficient control over both the motor and servo by varying duty cycle — the ratio of on-time to off-time of the signal. I also implemented an AT-command interpreter on the terminal interface: every command the user typed in mapped to a specific firmware function, which executed when the command was issued.",
        ],
      },
    ],
    photos: [
      {
        src: '/projects/motor-control-rtos/setup.jpg',
        alt: 'Motor controller hardware setup — STM32 board on a custom PCB with keypad, LCD, and DC motor wired up on the bench.',
        caption: 'The full setup: STM32 board on the custom PCB, with keypad, LCD, and DC motor.',
        widthPercent: 50,
      },
    ],
    video: {
      src: '/projects/motor-control-rtos/demo.mp4',
      poster: '/projects/motor-control-rtos/demo-poster.jpg',
      widthPercent: 50,
      caption:
        "A demo of me entering PID values for the motor and then setting the wheel's target position via buttons. The wheel smoothly rotates to that encoder position using the tuned PID gains — you can see how close it lands to the target on the graph displayed on my computer.",
    },
    videoInline: true,
  },
  {
    slug: 'software-security-exploits',
    title: 'Computer Security — Lab Retrospective',
    context: 'Intro to Computer Security (18-330) — CMU',
    period: 'Spring 2023',
    summary:
      "A semester of CMU's intro security course — a sequence of labs writing exploits against deliberately vulnerable C binaries and web stacks, plus a final protocol design project.",
    details: [
      'Worked through CMU 18-330’s lab sequence — each one targeting a different vulnerability class.',
      'Wrote shellcode and exploit payloads in C and x86 assembly; reverse-engineered binaries in GDB.',
      'Closed out the course with a protocol-design and analysis project, applying the threat-modeling discipline the labs had taught.',
    ],
    tags: [
      'Security',
      'x86 Assembly',
      'C',
      'GDB',
      'Web exploits',
      'SQL injection',
      'Memory safety',
    ],
    category: 'Systems',
    narrative: [
      {
        heading: 'Course Overview',
        paragraphs: [
          'A semester spent learning how systems break — and how to break them. Each lab built up a different class of vulnerability and required reading deliberately-vulnerable C, binary, or web code, then writing the exploit against it. Less a single project than a survey of the patterns: how memory gets clobbered, how unchecked input ends up where it shouldn’t, what the stack looks like when execution goes off the rails.',
        ],
      },
      {
        heading: 'Selected Labs',
        paragraphs: [
          'The labs that stuck with me most:',
        ],
        bullets: [
          {
            name: 'Bob — Buffer overflow with canary bypass',
            text: 'Exploited an unbounded strcpy() in a vulnerable C binary to overwrite the saved return address and redirect control flow into shellcode I’d injected on the stack. The binary had a stack canary, so the exploit had to write a value through the canary slot that still satisfied its check — found by reading the binary in GDB and inspecting the stack layout around rbp-0x50.',
          },
          {
            name: 'Elaine — Format-string exploit with GOT hijack',
            text: 'A non-executable stack and a small fixed-size buffer ruled out shellcode injection, so the exploit went through printf instead — using %n format specifiers to overwrite printf’s entry in the Global Offset Table with the address of system(), then triggering it by passing "/bin/sh" as the next argument. Required mapping printf’s argument indices to specific stack offsets and writing the target address one half-word at a time.',
          },
          {
            name: 'Evil Store — Web exploit suite',
            text: 'Three chained attacks against a deliberately vulnerable e-commerce site: a UNION-based SQL injection that dumped the users table; an information-disclosure attack via URL-parameter manipulation that revealed the password-hashing scheme (MD5 four times); and a dictionary-based password-cracking attack that recovered the admin password using the leaked hash and the leaked algorithm.',
          },
          {
            name: 'Protocol design & analysis (final project)',
            text: 'Designed and analyzed a security protocol end-to-end — applying the threat models, adversary capabilities, and confidentiality/integrity/authenticity/availability framings the course had built up across the semester.',
          },
        ],
      },
      {
        paragraphs: [
          'Spending a semester thinking like an attacker permanently changed how I read C code. Knowing how a stack frame is laid out, what gets clobbered when, and where input ends up in memory is a different lens than you get from writing functional code alone — and it shows up again in my current work on systems with strict trust boundaries.',
        ],
      },
    ],
  },
  {
    slug: 'malloc-lab',
    title: 'Malloc Lab',
    context: 'Intro to Computer Systems — CMU',
    period: 'Fall 2021',
    summary:
      'Implemented malloc() and free() from scratch in C, graded on a balance of memory utilization and throughput against real allocation traces.',
    details: [
      'Implemented malloc() and free() from scratch in C — no real memory allocation, just pointer arithmetic over a simulated heap.',
      'Iterated the free-block structure through three designs: implicit list → explicit list → segregated lists, each one cutting allocation time.',
      'Layered on optimizations: better fit, mini blocks, a packed 64-bit header, and a heap checker.',
    ],
    tags: [
      'C',
      'Memory management',
      'Data structures',
      'Pointer arithmetic',
      'Valgrind',
      'Performance',
    ],
    category: 'Systems',
    narrative: [
      {
        heading: 'Overview',
        paragraphs: [
          'The lab handed us recorded allocation traces from real programs and asked us to implement malloc() and free() that handled them efficiently. Nothing was actually allocating memory — we worked with memory addresses through pointer arithmetic to simulate how a heap allocator carves out space. Grading came down to two competing metrics: memory utilization (no wasted space) and throughput (allocations per second).',
        ],
      },
      {
        heading: 'Free-List Evolution',
        paragraphs: [
          'The core question was: how do you find a free block fast? My implementation went through three iterations of the free-list structure. Coalescing ran underneath all of them — every call to free() merged the block with its free neighbors, so the largest possible contiguous regions stayed available for future allocations.',
        ],
        bullets: [
          {
            name: 'Implicit list',
            text: "First pass — every block's header stored its size and the allocated status of its next block. Simple, but allocation walked over every block, free and allocated alike.",
          },
          {
            name: 'Explicit list',
            text: 'Second pass — kept a doubly linked list of just the free blocks, so allocation skipped over allocated ones entirely. Allocations got noticeably faster.',
          },
          {
            name: 'Segregated lists',
            text: 'Third pass — split the free list into multiple buckets by size class. Each allocation only traversed the bucket whose range matched its request, dramatically reducing the number of blocks to inspect and pushing throughput up.',
          },
        ],
      },
      {
        heading: 'Other Optimizations',
        paragraphs: [
          'Beyond the list structure, a handful of smaller wins added up:',
        ],
        bullets: [
          {
            name: 'Better fit',
            text: "Since the bucketed lists weren't ordered, I scanned the next k free blocks and picked the best fit instead of the first fit. Same throughput, lower fragmentation.",
          },
          {
            name: 'Mini blocks',
            text: 'Blocks smaller than 16 bytes got stored separately as a singly linked list — dropping the prev pointer cut the per-block overhead for the smallest, most common allocations.',
          },
          {
            name: 'Compact 64-bit header',
            text: 'Packed each block header into 64 bits: 60 for size, 4 for status flags (allocated, prev allocated, prev mini, current mini). Pulling more information out of the header without growing it improved utilization without costing throughput.',
          },
          {
            name: 'Heap checker',
            text: 'A heap-checker function validated invariants on demand — block addresses inside the heap range, free-block counts in the heap matching free-block counts in the lists. Saved hours of debugging when something subtle broke.',
          },
        ],
      },
      {
        paragraphs: [
          'Used valgrind throughout to keep tabs on which blocks were actually free at any given moment — invaluable for catching the subtle bugs where the allocator and the truth quietly disagreed.',
        ],
      },
    ],
  },
  {
    slug: 'cache-lab',
    title: 'Cache Simulator',
    context: 'Intro to Computer Systems — CMU',
    period: 'Fall 2021',
    summary:
      'A software simulator for a hardware cache — tracks hits, misses, and evictions for sequences of memory addresses parsed from a trace.',
    details: [
      'Built the simulator in C, with a 2D-array cache structure that mirrored how I pictured sets and lines.',
      'Parsed addresses from the input trace into tag/set/offset and counted hits, misses, and evictions accordingly.',
      'Tracked down every memory leak with Valgrind and GDB before submission.',
    ],
    tags: ['C', 'Cache', 'Memory hierarchy', 'Valgrind', 'GDB', 'Performance'],
    category: 'Systems',
    narrative: [
      {
        heading: 'Overview',
        paragraphs: [
          'A simulator for how hardware caches behave. The lab gave us a driver that fed memory-access traces — sequences of addresses being read or written — and asked us to model what a cache would do with each one: hit, miss, or eviction. Caches matter because accessing main memory is expensive; keeping recently-used data in a smaller, faster store right next to the CPU is what makes most code feel fast.',
        ],
      },
      {
        heading: 'Implementation Choice',
        paragraphs: [
          'I represented the cache as a 2D array — rows for sets, columns for cache lines within each set. Doubly linked lists would have worked, but the 2D array mapped to how I pictured the cache mentally and made indexing into the right set and line straightforward. The real work was parsing each address from the trace, splitting it into tag/set/offset, finding the matching set, and updating the right line — incrementing the appropriate counter for hit, miss, or eviction.',
        ],
      },
      {
        heading: 'Memory Management & Debugging',
        paragraphs: [
          'I allocated memory for the cache up front, so every allocation had to be freed by the time the program exited. This was where Valgrind and GDB earned their keep:',
        ],
        bullets: [
          {
            name: 'Valgrind',
            text: 'Flagged how many blocks were freed vs still allocated, and pinpointed any invalid memory reads or writes by address and line number.',
          },
          {
            name: 'GDB',
            text: 'Stepped through the program to watch how variables, functions, and values at specific addresses changed over time — used for debugging everything from memory leaks to invalid reads and writes.',
          },
        ],
      },
    ],
  },
];
