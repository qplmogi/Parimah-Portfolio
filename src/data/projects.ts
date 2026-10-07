export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  type: string;
  role: string;
  stack: string[];
  description: string;
}

export const projects: Project[] = [
  {
    id: "risheh",
    number: "01",
    title: "Risheh",
    category: "Corporate Website",
    type: "Real Project",
    role: "Frontend Development",
    stack: ["React", "TypeScript", "CSS"],
    description:
      "A corporate web experience focused on clear communication, responsive composition and a polished digital presence.",
  },
  {
    id: "archive",
    number: "02",
    title: "Archive",
    category: "Concept Project",
    type: "Concept",
    role: "UI / Frontend",
    stack: ["React", "TypeScript", "CSS"],
    description:
      "A concept interface for organizing and exploring digital content through a calm, editorial browsing experience.",
  },
  {
    id: "interface-lab",
    number: "03",
    title: "Interface Lab",
    category: "UI Experiments",
    type: "Personal Project",
    role: "UI / Frontend",
    stack: ["React", "TypeScript", "CSS"],
    description:
      "A collection of small interface experiments exploring states, interaction patterns and responsive behaviour.",
  },
];