import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { SectionLabel } from "../../components/layout/SectionLabel";
import { ProjectGrid } from "../../components/portfolio/ProjectGrid";
import { projects } from "../../data/projects";
import styles from "./SelectedWork.module.css";

export function SelectedWork() {
  return (
    <Section id="work" aria-labelledby="work-heading">
      <Container>
        <header className={styles.header}>
          <SectionLabel number="01">Work</SectionLabel>
          <h2 id="work-heading" className={styles.title}>
            Selected Work
          </h2>
          <p className={styles.intro}>
            A selection of interfaces built to explore clarity, interaction and
            frontend craft.
          </p>
        </header>

        <ProjectGrid projects={projects} />
      </Container>
    </Section>
  );
}