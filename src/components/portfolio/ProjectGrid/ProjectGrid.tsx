import type { Project } from "../../../data/projects";
import { ProjectCard } from "../ProjectCard";
import styles from "./ProjectGrid.module.css";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <ul className={styles.grid}>
      {projects.map((project) => (
        <li key={project.id} className={styles.item}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}