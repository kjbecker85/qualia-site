// One place for the facts and settings the pages share.

export const SITE = {
  name: 'Qualia AI Consulting',
  url: 'https://www.engagequalia.com',
  email: 'support@engagequalia.com',
  location: 'Dallas/Fort Worth, Texas',
  linkedin: 'https://www.linkedin.com/company/104404091',
  description:
    'Qualia AI Consulting guides companies through AI workforce transformation: AI strategy, team training, and custom AI tools and agents. Based in Dallas/Fort Worth, Texas.',
};

// Contact form. Leads go to the table `site_leads` in the Qualia Trace Supabase project.
// The key is the publishable (anon) key: public by design. Row level security allows insert only.
// The table is created by supabase/site_leads.sql. Until that file is applied, the form shows
// its email fallback.
export const LEADS = {
  supabaseUrl: 'https://zaczqcaorublmdndtbbe.supabase.co',
  supabaseAnonKey: 'sb_publishable_3_KxvU1Zl07nIkPC-A4Mng_RxV4dvKY',
  table: 'site_leads',
};

// PostHog project "Qualia Apps". Every event carries app: 'qualia-site'.
export const POSTHOG_KEY = 'phc_A39F4BiGKwphwp9eFDUCR5ErFXQ9BAhiUJbA5hSchGFb';

export const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const SERVICES = [
  {
    id: 'assessment',
    icon: 'scan',
    name: 'AI readiness assessment',
    tag: 'Start here',
    short:
      'We review how your company works today, where AI can help first, and what stands in the way. You get a written report and a recommended first step.',
    long:
      'The assessment is the first step for most clients. We talk with your leaders and with people on your teams. We look at the tools you already pay for and the work that takes the most time.',
    gets: [
      'A written report on where your company stands with AI today',
      'A short list of the work where AI can help first',
      'The risks and gaps to close: data, security, skills and policy',
      'A recommended first step you can act on',
    ],
    fit: 'You know AI matters and want a clear place to start.',
  },
  {
    id: 'strategy',
    icon: 'route',
    name: 'AI strategy and roadmap',
    tag: 'Plan',
    short:
      'A plan your leaders can act on: which work to change first, which tools to use, who owns each step, and how to measure progress.',
    long:
      'A roadmap turns the assessment into decisions. It names the work to change, in order, and the people who own each step. It is written in plain words so every leader can read it.',
    gets: [
      'Priorities in order, each tied to a business goal',
      'Tool choices that fit your systems and your budget',
      'An owner and a measure for every step',
      'Rules for safe use that your teams can follow',
    ],
    fit: 'You have tools or pilots in place and need one plan that ties them together.',
  },
  {
    id: 'adoption',
    icon: 'people',
    name: 'Workforce adoption and training',
    tag: 'Train',
    short:
      'Training built around the real tasks of each team. People practice on their own work until using AI is a daily habit.',
    long:
      'People adopt AI when it helps with the work in front of them. We train each team on its own tasks, then stay close while the new habits form.',
    gets: [
      'Sessions built on the real tasks of each role',
      'Working examples and prompts your teams keep',
      'Coaching for managers, so the habits last',
      'A simple way to see who uses AI and where it helps',
    ],
    fit: 'Your people have access to AI and few of them use it in their daily work.',
  },
  {
    id: 'tools',
    icon: 'chip',
    name: 'Custom AI tools and agents',
    tag: 'Build',
    short:
      'We build assistants, automations and agents that fit your systems and your rules. An AI agent is software that carries out a task of several steps for you.',
    long:
      'Some work needs a tool made for it. We build it, test it with the people who will use it, and connect it to the systems you already run.',
    gets: [
      'A working tool, built and tested with its users',
      'Connections to the systems and data you already have',
      'Checks and limits so the tool acts inside your rules',
      'Training and a handover, so your team owns it',
    ],
    fit: 'A task repeats often, costs real time, and no product on the market fits it.',
  },
];

export const STEPS = [
  { n: '01', name: 'Talk', text: 'A first call. We hear your goals and decide together if we are a fit.' },
  { n: '02', name: 'Assess', text: 'The AI readiness assessment shows where your company stands and where to start.' },
  { n: '03', name: 'Train and build', text: 'We train your teams on their own work and build the tools the plan calls for.' },
  { n: '04', name: 'Hand over', text: 'Your people own the tools and the habits. We stay available when you need us.' },
];

export const PRODUCTS = [
  {
    id: 'qualia-trace',
    name: 'Qualia Trace',
    kind: 'Compliance web app',
    url: 'https://trace.engagequalia.com',
    host: 'trace.engagequalia.com',
    image: '/work/qualia-trace.jpg',
    linkLabel: 'Open Qualia Trace',
    short:
      'Forced labor supply chain screening under the Uyghur Forced Labor Prevention Act (UFLPA).',
    long:
      'Qualia Trace screens suppliers against the UFLPA Entity List, walks through a sample case file, saves screenings, and monitors supplier lists for new hits. It is built for trade counsel and customs brokers.',
    points: [
      'AI reads new Federal Register notices and pulls out the companies added or removed',
      'A daily job rescreens every saved supplier list and writes an alert when something gets worse',
      'Sign in, saved cases and alerts, each protected so analysts see only their own work',
    ],
  },
  {
    id: 'buy-and-build',
    name: 'Buy and Build',
    kind: 'Strategy game in the browser',
    url: 'https://buyandbuildgame.com',
    host: 'buyandbuildgame.com',
    image: '/work/buy-and-build.jpg',
    linkLabel: 'Play Buy and Build',
    short:
      'A private equity strategy game. Run a $50 million fund, buy a company, and choose the moment to sell.',
    long:
      'The player runs a $50 million fund in Dallas/Fort Worth, buys a company, buys the towns around it before two rival funds do, and chooses when to sell. It is free and plays on a computer or a phone.',
    points: [
      'A full rules engine with financial statements, a bank loan and a market cycle',
      'A 3D board, two computer rivals that play by the same rules, and a leaderboard',
      'Automated tests check the rules, the balance and the wording before every release',
    ],
  },
  {
    id: 'departure',
    name: 'Departure: Fitness Quest',
    kind: 'iPhone app',
    url: 'https://departure.engagequalia.com',
    host: 'departure.engagequalia.com',
    image: '/work/departure.jpg',
    linkLabel: 'See Departure',
    short:
      'A fitness role playing game for iPhone. Real workouts earn experience points, ranks and team battles.',
    long:
      'Departure tracks real workouts: sets, reps and weight. It turns them into experience points, ranks, equipment and team battles against monsters. It is on the iOS App Store.',
    points: [
      'A scoring system with ranks, personal records and checks against cheating',
      'Team battles across a map of 24 monsters',
      'An AI image of the future self a player is training toward',
    ],
  },
];
