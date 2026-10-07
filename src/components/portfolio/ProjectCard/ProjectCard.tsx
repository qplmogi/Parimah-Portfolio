import type { Project } from "../../../data/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

function RishehVisual() {
  return (
    <div className={styles.specimen}>
      <div className={styles.specHeader}>
        <span className={styles.specBrand}>RISHEH</span>
        <span className={styles.specMuted}>Company / Services / Contact</span>
      </div>
      <div className={styles.rule} />
      <div className={styles.heroBlock}>
        <span className={styles.specMuted}>Corporate</span>
        <span className={styles.heroText}>Risheh</span>
        <span className={`${styles.bar} ${styles.barLong}`} />
        <span className={`${styles.bar} ${styles.barMid}`} />
      </div>
    </div>
  );
}

function ArchiveVisual() {
  return (
    <div className={styles.specimen}>
      <div className={styles.specHeader}>
        <span className={styles.specBrand}>ARCHIVE</span>
        <span className={styles.specMuted}>01 / 24</span>
      </div>
      <span className={styles.specMuted}>Selected records</span>
      <div className={styles.blockGrid}>
        <div className={styles.block}>
          <span className={styles.dot} />
          <span className={`${styles.bar} ${styles.barLong}`} />
          <span className={`${styles.bar} ${styles.barShort}`} />
        </div>
        <div className={styles.block}>
          <span className={`${styles.bar} ${styles.barLong}`} />
          <span className={`${styles.bar} ${styles.barMid}`} />
        </div>
        <div className={styles.block}>
          <span className={`${styles.bar} ${styles.barMid}`} />
          <span className={`${styles.bar} ${styles.barShort}`} />
        </div>
        <div className={styles.block}>
          <span className={`${styles.bar} ${styles.barLong}`} />
          <span className={`${styles.bar} ${styles.barLong}`} />
        </div>
      </div>
    </div>
  );
}

function InterfaceLabVisual() {
  return (
    <div className={styles.specimen}>
      <div className={styles.specHeader}>
        <span className={styles.specBrand}>INTERFACE LAB</span>
      </div>
      <div className={styles.tabs}>
        <span className={`${styles.tab} ${styles.tabActive}`}>Button</span>
        <span className={styles.tab}>Modal</span>
        <span className={styles.tab}>Form</span>
        <span className={styles.tab}>Card</span>
      </div>
      <div className={styles.stage}>
        <span className={styles.chipPrimary}>Primary</span>
        <span className={styles.chipSecondary}>Secondary</span>
        <span className={styles.toggle}>
          <span className={styles.knob} />
        </span>
      </div>
    </div>
  );
}

function ProjectVisual({ id }: { id: string }) {
  switch (id) {
    case "risheh":
      return <RishehVisual />;
    case "archive":
      return <ArchiveVisual />;
    case "interface-lab":
      return <InterfaceLabVisual />;
    default:
      return null;
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.topline}>
        <span>{project.number}</span>
        <span>{project.type}</span>
      </header>

      <div className={styles.preview} aria-hidden="true">
        <ProjectVisual id={project.id} />
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.category}>{project.category}</p>
      <p className={styles.role}>{project.role}</p>
      <p className={styles.stack}>{project.stack.join(" · ")}</p>
      <p className={styles.description}>{project.description}</p>
    </article>
  );
}