export const tickerItems: string[] = [
  "PERSISTENT MEMORY",
  "•",
  "CFO TRACKS YOUR COMMITMENTS",
  "•",
  "AGENTS DEBATE EACH OTHER",
  "•",
  "APPROVE / DISAPPROVE / OBSERVE",
  "•",
  "REAL QUESTIONS",
  "•",
  "FREE FIRST MEETING",
  "•",
  "BRIEF AGENTS PRIVATELY",
  "•",
  "UPLOAD YOUR FINANCIALS",
  ".",
  "MEMORY COMPOUNDS",
  ".",
  "PERSISTENT MEMORY",
  "•",
  "CFO TRACKS YOUR COMMITMENTS",
  "•",
  "AGENTS DEBATE EACH OTHER",
  "•",
  "APPROVE / DISAPPROVE / OBSERVE",
  "•",
  "REAL QUESTIONS",
  "•",
  "FREE FIRST MEETING",
  "•",
  "BRIEF AGENTS PRIVATELY",
  "•",
  "UPLOAD YOUR FINANCIALS",
  ".",
  "MEMORY COMPOUNDS",
  ".",

];

export interface Agent {
  n: string;
  role: string;
  desc: string;
  quote: string;
}

export const agents: Agent[] = [
  {
    n: "01",
    role: "CEO",
    desc: "The swing vote. Pulls between financial caution and strategic ambition. Demands specifics before committing to anything.",
    quote: '"I need to understand the strategic logic before we go any further. Four months runway is not the moment to expand."',
  },
  {
    n: "02",
    role: "CMO",
    desc: "The growth champion. Fights for market opportunities the CFO wants to kill. Does not back down without a fight.",
    quote: '"Waiting for perfect conditions means we hand first-mover advantage to someone else. The CAC data changes the math."',
  },
  {
    n: "03",
    role: "CFO",
    desc: "The skeptic. Will not approve anything until the math works. Tracks every commitment. Notices every miss.",
    quote: '"You committed to the churn model by Q3. It is now Q4. Walk me through what happened before we discuss anything else."',
  },
  {
    n: "04",
    role: "Lead Investor",
    desc: "Represents the investors. Focuses on return, survival, and whether this team can execute under pressure.",
    quote: '"Missing a market window is recoverable. Running out of cash is not. Which risk are we actually comfortable taking?"',
  },
  {
    n: "05",
    role: "You",
    desc: "You play the Presenter. Upload your document, face the board, answer live. No script. No safety net.",
    quote: '"This is the practice room. Your real board meeting is next."',
  },
  {
    n: "06",
    role: "Memory",
    desc: "After every meeting key facts are extracted automatically. Before the next meeting each agent reads their memory. Nothing is forgotten.",
    quote: "47 memories loaded. 3 commitments open. 0 forgotten promises.",
  },
];

export interface FaqItem {
  n: string;
  q: string;
  a: string;
}

export const faqItems: FaqItem[] = [
  {
    n: "01",
    q: "What is SecondBoard?",
    a: "SecondBoard is a board meeting simulation platform for founders. Upload a board doc, enter the meeting, and answer live questions from AI agents playing CEO, CMO, CFO, Lead Investor, and Presenter.",
  },
  {
    n: "02",
    q: "What makes it different?",
    a: "Memory. After every meeting, SecondBoard extracts key facts, commitments, risks, and open questions. Those memories are used in the next meeting so the agents stop acting like strangers.",
  },
  {
    n: "03",
    q: "Who is this for?",
    a: "Founders preparing for board meetings, investor updates, bridge rounds, quarterly reviews, and hard internal planning conversations.",
  },
  {
    n: "04",
    q: "Do I need a finished board deck?",
    a: "No. You can upload a draft, memo, investor update, or messy notes. The point is to find weak spots before the real room does.",
  },
  {
    n: "05",
    q: "What does the free tier include?",
    a: "One free meeting so you can test the pressure before paying.",
  },
  {
    n: "06",
    q: "How much does it cost?",
    a: "Free for the first meeting. Founder is $49/month. Team is $149/month.",
  },
  {
    n: "07",
    q: "What does the memory track?",
    a: "Commitments, risks, forecasts, decisions, unresolved questions, and contradictions between past promises and current plans.",
  },
  {
    n: "08",
    q: "How long does setup take?",
    a: "A few minutes. Upload the document, start the meeting, and answer live.",
  },
];

export interface Step {
  n: number;
  title: string;
  bodyLines: string[];
}

export const steps: Step[] = [
  {
    n: 1,
    title: "Upload your document.",
    bodyLines: [
      "Submit your board deck, financial report, or meeting update.",
      "The board reads it before the meeting starts.",
      "Every agent prepares independently with their own context.",
    ],
  },
  {
    n: 2,
    title: "Your board debates it.",
    bodyLines: [
      "CEO, CMO, CFO, and Lead Investor argue about your document.",
      "They disagree with each other. They ask hard questions.",
      "One focused question reaches you per round. You answer live.",
    ],
  },
  {
    n: 3,
    title: "Memory compounds.",
    bodyLines: [
      "After every meeting key facts are automatically extracted.",
      "Next meeting your agents remember what happened last time.",
      "After ten meetings they genuinely know your company.",
    ],
  },
];

export interface ThreeColItem {
  badge: string;
  iconPath: string;
  heading: string;
  quote: string;
}

export const threeColItems: ThreeColItem[] = [
  {
    badge: "CEO",
    iconPath:
      "M 22 11 L 22 13 L 20 13 L 20 15 L 18 15 L 18 9 L 20 9 L 20 11 Z M 6 10 L 8 10 L 8 14 L 6 14 Z M 9 10 L 11 10 L 11 14 L 9 14 Z M 12 10 L 14 10 L 14 14 L 12 14 Z M 15 10 L 17 10 L 17 14 L 15 14 Z M 18 7 L 18 9 L 5 9 L 5 15 L 18 15 L 18 17 L 3 17 L 3 7 Z",
    heading: "Pushes execution clarity",
    quote:
      '"You are asking for focus while adding three new priorities in the same quarter."',
  },
  {
    badge: "Agents",
    iconPath:
      "M 10 4 L 14 4 L 14 6 L 10 6 Z M 11 13 L 13 13 L 13 17 L 11 17 Z M 6 10 L 8 10 L 8 6 L 10 6 L 10 10 L 14 10 L 14 6 L 16 6 L 16 10 L 18 10 L 18 12 L 6 12 Z M 6 18 L 18 18 L 18 20 L 6 20 Z M 18 12 L 20 12 L 20 18 L 18 18 Z M 4 12 L 6 12 L 6 18 L 4 18 Z",
    heading: "Questions growth assumptions",
    quote: '"Paid acquisition improved, but retention still looks fragile."',
  },
  {
    badge: "Memory",
    iconPath:
      "M 8 4 L 11 4 L 11 3 L 9 3 L 9 1 L 15 1 L 15 3 L 13 3 L 13 4 L 16 4 L 16 6 L 8 6 Z M 8 18 L 16 18 L 16 20 L 8 20 Z M 16 6 L 18 6 L 18 8 L 16 8 Z M 18 8 L 20 8 L 20 16 L 18 16 Z M 4 8 L 6 8 L 6 16 L 4 16 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 11 8 L 13 8 L 13 11 L 16 11 L 16 13 L 11 13 Z M 6 16 L 8 16 L 8 18 L 6 18 Z M 16 16 L 18 16 L 18 18 L 16 18 Z",
    heading: "Tracks numbers and promises",
    quote:
      '"You already revised this forecast twice. Why should the board trust this version?"',
  },
];
