// Shared content for all concept designs — written in Abhiram's voice.
// Funky, confident, lowercase, a little chaos. NOT resume-speak.

export const me = {
  name: "Abhiram Kasturi",
  first: "Abhiram",
  // one-liners — use whichever fits the layout
  hero: "i build the stuff you actually click.",
  heroAlt: "developer. shipper. occasional menace to clean git history.",
  status: "currently: developer @ Linq",
  location: "Birmingham, AL",
  // short punchy bio
  bio: "yo — i'm abhiram. right now i build the stuff people actually click at Linq — checkout, onboarding, dev tooling, front to back. react & next up top, nestjs + rails underneath, aws holding it all up. clemson cs, aws-certified, perpetually shipping.",
  // even shorter
  bioShort: "full-stack dev who cares way too much about how things feel.",
};

export type Job = {
  co: string;
  role: string;
  when: string;
  line: string; // the funky one-liner
  more: string[]; // supporting punchy bullets
};

export const work: Job[] = [
  {
    co: "Linq",
    role: "Developer",
    when: "2025 — now",
    line: "i build the stuff you actually click — checkout, onboarding, an API playground, the works.",
    more: [
      "react + typescript up front (zustand, tanstack query), nestjs + ruby on rails underneath.",
      "shipped self-serve stripe checkout, multi-step onboarding, marketing funnels with real analytics.",
      "aws (ecs / rds / s3), postgres via prisma, the boring reliability stuff that keeps it all up.",
    ],
  },
  {
    co: "Clemson University",
    role: "Grad Assistant",
    when: "2023 — 24",
    line: "taught python to do my homework — digitized thousands of theses at 99% accuracy.",
    more: [
      "pypdf2 + tesseract ocr pipelines to extract, clean, and transform pdfs.",
      "automated cataloging with openpyxl so humans didn't have to.",
    ],
  },
  {
    co: "Mutual Mobile",
    role: "Software Engineer",
    when: "2021 — 22",
    line: "shipped cross-platform apps, cut graphql response times 15%, dragged a legacy app into the present.",
    more: [
      "react + react native + next.js, nestjs backend, mobx-state-tree state.",
      "20+ graphql queries/mutations via wundergraph; migrated legacy react native (+65% coverage).",
      "rebuilt a high-traffic saas frontend in react and helped scale the db so it didn't fall over.",
    ],
  },
];

export type Proj = {
  name: string;
  line: string; // funky one-liner
  tech: string[];
  year: string;
  accent: string;
};

export const projects: Proj[] = [
  {
    name: "SurfSense",
    line: "a chrome extension that snitches on how you actually spend time online. productive vs. doomscroll.",
    tech: ["JavaScript", "Chrome API"],
    year: "2024",
    accent: "#5b8cff",
  },
  {
    name: "Tree Health Detection",
    line: "taught a CNN to spot sick trees from drone footage. environmental monitoring, fully automated.",
    tech: ["PyTorch", "OpenCV"],
    year: "2023",
    accent: "#3ec98a",
  },
  {
    name: "AWS Migration",
    line: "moved a whole company off on-prem onto AWS without anyone noticing. multi-AZ, auto-scaling, zero drama.",
    tech: ["AWS", "EC2", "RDS"],
    year: "2023",
    accent: "#ff9f43",
  },
  {
    name: "Black-Box Defense",
    line: "built a bouncer for neural nets — catches query-based attacks before they get through the door.",
    tech: ["Python", "Keras"],
    year: "2023",
    accent: "#a55bff",
  },
  {
    name: "Genome on Chain",
    line: "put genomes on the blockchain. react + solidity + ipfs. yes, really. it works.",
    tech: ["ReactJS", "Solidity", "IPFS"],
    year: "2021",
    accent: "#ff5b8c",
  },
];

export const skills = [
  "TypeScript", "JavaScript", "Python", "C++",
  "React", "React Native", "Next.js", "NestJS", "Ruby on Rails", "Node",
  "PostgreSQL", "MongoDB", "Redis", "Prisma", "GraphQL",
  "AWS", "Docker", "Firebase", "Git",
];

export const cert = "AWS Cloud Solutions Architect";

export const contact = {
  // the line designed to make someone reach out
  pitch: "got something worth building? i'm the one you want in the room.",
  email: "abhiramkasturi10@gmail.com",
  github: "https://github.com/abhiram2600",
  githubLabel: "github.com/abhiram2600",
  // NOTE: update slug if different
  linkedin: "https://www.linkedin.com/in/abhiramkasturi",
  linkedinLabel: "linkedin/abhiramkasturi",
  site: "https://abhiramkasturi.com",
  phone: "+18647654799",
  phoneLabel: "(864) 765-4799",
};
