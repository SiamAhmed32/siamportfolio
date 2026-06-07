// ========================
// Main editable portfolio data
// Change text, links, projects, and image paths from this file.
// ========================

export const personalInfo = {
  name: 'Kaosar Ahmed',
  role: 'Full Stack Software Engineer',
  location: 'Dhaka, Bangladesh',
  email: 'siamahmedgotthis@gmail.com',
  phone: '+880 1813-494196',
  phoneHref: 'tel:+8801813494196',
  whatsappHref: 'https://wa.me/8801813494196',
  github: 'https://github.com/SiamAhmed32',
  resumeHref: '/resume/Kaosar_Ahmed_CV.pdf',
  profileImage: '/profile/kaosar-ahmed.jpeg'
};

export const hero = {
  eyebrow: 'Open to Full Stack / Frontend Roles',
  title: 'Building production-grade web products that teams can trust.',
  description:
    'Full Stack Software Engineer focused on Next.js, React, TypeScript, Node.js, PostgreSQL, and real business workflows.',
  roles: ['FULL STACK ENGINEER', 'NEXT.JS SPECIALIST', 'PRODUCT BUILDER'],
  highlights: [
    '3+ years shipping client-facing software',
    'International projects across UK, USA, Canada, and Bangladesh',
    'Frontend ownership with backend and database depth'
  ]
};

export const stats = [
  { value: '3+', label: 'Years of professional experience' },
  { value: '10+', label: 'Production platforms and major features delivered' },
  { value: '4', label: 'Countries served through client work' },
  { value: '10K+', label: 'Product catalogue experience' }
];

export const projects = [
  {
    title: 'Coastal Water Technologies',
    type: 'B2B Wholesale E-Commerce',
    image: '/projects/coastal-water.png',
    liveUrl: 'https://www.coastalwatertechnologies.com/',
    summary:
      'B2B water technologies platform for US professionals with 10,000+ SKUs, product finder, multi-level navigation, cart, order tracking, and loyalty rewards.',
    impact: 'Reduced redundant product API calls using RTK Query caching across a large catalogue experience.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'RTK Query']
  },
  {
    title: 'Akashbari Holidays',
    type: 'Travel Agency Platform',
    image: '/projects/akashbari.png',
    liveUrl: 'https://www.akashbariholidays.com/',
    summary:
      'Travel platform for a 15-year-old business with destination hierarchy, package management, custom admin panel, and content management workflows.',
    impact: 'Built CMS structure so non-technical staff can manage destinations, packages, and media after handoff.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Nodemailer', 'Tailwind']
  },
  {
    title: 'LSO Bar Exam Platform',
    type: 'Ontario Legal Exam Prep',
    image: '/projects/lso-bar.png',
    liveUrl: 'https://lso-bar-exam.vercel.app/',
    summary:
      'Timed 4.5-hour exam sessions, automatic progress saving, paid exam sets, Stripe payments, and detailed answer explanations aligned to the 2025/2026 LSO format.',
    impact: 'Built reliable exam flow with secure access, payment handling, and zero-progress-loss user experience.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Stripe']
  },
  {
    title: 'Super Media Bros',
    type: 'Real-Time Auction Platform',
    image: '/projects/supermediabros.png',
    liveUrl: 'https://supermediabros.co.uk/',
    summary:
      'Auction platform with live bidding, seller/buyer dashboards, Redis/Upstash caching, Pusher notifications, and The Saleroom marketplace integration.',
    impact: 'Solved stale bid state by hydrating the latest cached price before handing users to the live socket stream.',
    stack: ['Next.js', 'Socket.io', 'Redis', 'Pusher', 'PostgreSQL', 'Prisma']
  },
  {
    title: 'ERP Textile Platform',
    type: 'Industry Management System',
    image: '/projects/erp.png',
    liveUrl: 'https://erp-textile-eight.vercel.app/',
    summary:
      'ERP system for textile operations covering order management, LC workflows, buyers, suppliers, invoices, accounting, users, and role-based access.',
    impact: 'Modelled complex relational workflows with PostgreSQL and Prisma for traceable business operations.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'RTK Query']
  },
  {
    title: 'ClosetBD',
    type: 'Fashion E-Commerce Platform',
    image: '/projects/closet.png',
    liveUrl: 'https://closetbd.com/',
    summary:
      'Fashion e-commerce platform with catalogue, filtering, discount management, order flow, and admin inventory management.',
    impact: 'Used SSR and image optimization to improve search visibility and loading performance across devices.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind']
  }
];

export const capabilities = [
  {
    title: 'Frontend Engineering',
    description:
      'Responsive, accessible, SEO-aware interfaces using React, Next.js, TypeScript, Tailwind CSS, Shadcn UI, and reusable component architecture.',
    includes: ['Next.js / React', 'TypeScript UI', 'Reusable components', 'SEO & performance']
  },
  {
    title: 'Backend & APIs',
    description:
      'Secure REST APIs, authentication, role-based access, validation, payment flow, email flow, and database-backed business logic.',
    includes: ['Node.js / Express', 'JWT / OAuth2', 'Zod validation', 'Stripe / SSLCommerz / bKash']
  },
  {
    title: 'Business Systems',
    description:
      'E-commerce, ERP, admin dashboards, SaaS platforms, internal tools, and custom systems that help teams operate online.',
    includes: ['E-commerce', 'ERP dashboards', 'Admin panels', 'SaaS workflows']
  },
  {
    title: 'Real-Time Products',
    description:
      'Live bidding, notifications, socket updates, state synchronization, and caching systems for interactive product experiences.',
    includes: ['Socket.io', 'Redis / Upstash', 'Pusher', 'Live state sync']
  }
];

export const process = [
  {
    title: 'Requirement Understanding',
    description:
      'I first clarify the product goal, users, business rules, technical risks, and success criteria before building anything.'
  },
  {
    title: 'System Planning',
    description:
      'I define the page structure, user roles, API needs, database flow, authentication rules, and architecture decisions.'
  },
  {
    title: 'Interface Development',
    description:
      'I build clean, responsive interfaces with reusable components, strong UX structure, and maintainable frontend patterns.'
  },
  {
    title: 'Backend & Data Flow',
    description:
      'I implement APIs, database models, validation, security rules, caching, and role-based business logic.'
  },
  {
    title: 'Testing & Optimization',
    description:
      'I check loading speed, responsiveness, edge cases, SEO basics, broken states, API behavior, and production readiness.'
  },
  {
    title: 'Deployment & Handoff',
    description:
      'I deploy the project, keep the structure understandable, and document what matters so the project can be maintained.'
  }
];

export const experience = [
  {
    company: 'Elevate IT',
    role: 'Software Engineer',
    period: 'Dec 2025 - Present',
    type: 'Current Engineering Role',
    marker: '01',
    description:
      'Building production applications for international clients, including legal exam systems, auction platforms, secure APIs, PostgreSQL data models, and real-time user experiences.',
    highlights: ['LSO Bar Platform', 'Real-Time Auctions', 'Stripe Payments', 'PostgreSQL APIs']
  },
  {
    company: 'Nexlalinx',
    role: 'Software Engineer',
    period: 'Apr 2024 - Nov 2025',
    type: 'Frontend Systems Role',
    marker: '02',
    description:
      'Delivered Next.js and React production apps, built a reusable component system, improved frontend performance, and implemented RTK Query caching patterns.',
    highlights: ['20+ UI Components', '40% Faster Feature Work', 'RTK Query', 'Core Web Vitals']
  },
  {
    company: 'Brain Skill EdTech',
    role: 'Project Manager & Client Relations Lead',
    period: 'Jan 2023 - Mar 2024',
    type: 'EdTech Platform Delivery',
    marker: '03',
    description:
      'Led technical delivery for an online EdTech platform, coordinating developers, designers, content teams, and stakeholders to turn business requirements into structured delivery plans.',
    highlights: ['EdTech Delivery', 'Sprint Planning', 'Client Communication', 'QA Workflow']
  }
];

export const reasons = [
  'Production-level project experience, not only practice projects.',
  'Strong frontend and backend understanding from real client systems.',
  'Clear communication with technical and non-technical stakeholders.',
  'Performance, SEO, security, and maintainability considered from the start.',
  'Able to own features end-to-end from architecture to deployment.'
];

export const whyHireMe = {
  image: '/profile/whyhireme.webp',
  strengths: [
    'Production-ready frontend engineering',
    'Backend, database, and API understanding',
    'Clear communication with teams and clients',
    'Ownership from planning to deployment'
  ],
  reliability: [
    'Responsive UI across real devices',
    'Maintainable code and reusable components',
    'Performance, SEO, and accessibility awareness',
    'Secure data flow and clean handoff'
  ]
};

export const about = {
  image: '/profile/convo.jpeg',
  statement: 'I build software where clean engineering, product thinking, and business value meet.',
  paragraphs: [
    'I am a Full Stack Software Engineer from Dhaka, Bangladesh, with 3+ years of experience delivering production-grade web applications for clients across the UK, USA, Canada, and Bangladesh.',
    'My work sits between product and engineering: understanding the business goal, planning the system, building the interface, implementing backend flows, and making sure the final product is usable, fast, secure, and maintainable.'
  ],
  credentials: [
    { title: 'BSc in Computer Science and Engineering', meta: 'BRAC University / Graduated 2023' },
    { title: 'IELTS', meta: 'British Council / 2024' },
    { title: 'Problem Solving (Intermediate)', meta: 'HackerRank / 2025' },
    { title: 'Reactive Accelerator: React and Next.js', meta: 'Learn with Sumit / 2025' }
  ]
};

export const techGroups = [
  {
    title: 'Frontend Engineering',
    description: 'Interfaces, rendering decisions, reusable component systems, and performance-focused user experiences.',
    tools: [
      { name: 'React.js', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Redux Toolkit', icon: 'redux' },
      { name: 'RTK Query', short: 'RTK' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Shadcn UI', short: 'UI' },
      { name: 'Framer Motion', icon: 'framer' }
    ]
  },
  {
    title: 'Backend & APIs',
    description: 'Secure API flows, validation, authentication, payment/email integrations, and business logic.',
    tools: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'REST API', short: 'API' },
      { name: 'JWT Auth', icon: 'jsonwebtokens' },
      { name: 'OAuth2', short: 'OA' },
      { name: 'Zod', icon: 'zod' },
      { name: 'Nodemailer', short: 'NM' }
    ]
  },
  {
    title: 'Data, ORM & Real-Time',
    description: 'Relational modeling, document databases, live state sync, caching, and notification systems.',
    tools: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Prisma ORM', icon: 'prisma' },
      { name: 'Socket.io', icon: 'socketdotio' },
      { name: 'Pusher', icon: 'pusher' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Upstash', short: 'UP' }
    ]
  },
  {
    title: 'Cloud, Payments & Tooling',
    description: 'Deployment, containers, source control, production checks, and payment provider integrations.',
    tools: [
      { name: 'Docker', icon: 'docker' },
      { name: 'AWS EC2', icon: 'amazonaws' },
      { name: 'AWS ECR', icon: 'amazonaws' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Netlify', icon: 'netlify' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'ESLint', icon: 'eslint' },
      { name: 'Stripe', icon: 'stripe' },
      { name: 'SSLCommerz', short: 'SSL' },
      { name: 'bKash', short: 'bK' }
    ]
  }
];
