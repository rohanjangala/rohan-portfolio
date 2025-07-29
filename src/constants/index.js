import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  av,
  cfd,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  invisible,
  zensar,
  cem,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Git", icon: git },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Javascript", icon: javascript },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Advanced AI Trainer",
    company_name: "Invisible AI",
    icon: invisible,
    iconBg: "#161329",
    date: "Jun 2025 - Present",
    points: [
      "Compared pro Gemini and Open AI models to evaluate response quality by designing prompts and challenging models.",
    ],
  },
  {
    title: "Jr. Research Associate (Prompt Engineer)",
    company_name: "Zensar Technologies",
    icon: zensar,
    iconBg: "#161329",
    date: "Oct 2024 - Feb 2025",
    points: [
      "Contributed to NVIDIA’s Project Nemo as part of the DF Production team, developing high-quality prompt content for AI-driven tasks using SuperAnnotate tool.",
      "Designed and optimized prompts for an AI-based DenseCaptioning model, processing 15-minute video datasets daily (Oct–Dec), enhancing global description, scene comprehension and automated video summarization.",
      "Developed end-to-end prompt content for AI-driven Visual Question Answering (VQA) using Mathematics and Engineering textbooks, annotating 25 textbook excerpts per day (Jan–Feb) to improve model accuracy in domain-specific reasoning.",
    ],
  },
  {
    title: "Student Intern",
    company_name: "Center for Electric Mobility (CEM)",
    icon: cem,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Secured grant of ₹2,96,318 from TiHAN-IIT Hyderabad for startup initiative",
      "Developed and scaled autonomous vehicle (AV) technology as part of a final-year project at CEM using ROS.",
    ],
  },
];

export const projects = [
  {
    name: "Autonomous Vehicle",
    description:
      "A fully remote-controlled sized autonomous car using ESP-32 microcontroller and LIDAR to follow an oval track",
    tags: [
      { name: "ROS", color: "blue-text-gradient" },
      { name: "Ubuntu", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
      { name: "C/C++", color: "yellow-text-gradient" },
    ],
    image: av,
    source_code_link: "https://www.linkedin.com/in/rohanjangala/",
  },
  {
    name: "Computational Fluid Dynamics",
    description:
      "Design of a wind-tunnel system to facilitate desired turbulence for the most efficient mixture of bacteria and metals",
    tags: [
      { name: "COMSOL", color: "blue-text-gradient" },
      { name: "Physics", color: "green-text-gradient" },
      { name: "Simulation", color: "pink-text-gradient" },
    ],
    image: cfd,
    source_code_link: "https://www.linkedin.com/in/rohanjangala/",
  },
];
