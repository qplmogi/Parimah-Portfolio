import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <Section className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>FRONTEND DEVELOPER</p>

            <h1 className={styles.title}>
              <span className={styles.titleLine}>I build interfaces</span>{" "}
              <span className={styles.titleLine}>worth using.</span>
            </h1>

            <p className={styles.description}>
              Frontend developer focused on React, UI and thoughtful
              interaction.
            </p>

            <p className={styles.meta}>React · UI · Interaction · Frontend</p>

            <a className={styles.cta} href="#work">
              Explore my work <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.layer} />
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardLabel}>UI / 01</span>
                <span className={styles.indicator} />
              </div>

              <p className={styles.cardTitle}>Build better interfaces.</p>

              <div className={styles.chips}>
                <span className={styles.chip}>React</span>
                <span className={styles.chip}>UI</span>
              </div>

              <p className={styles.cardFooter}>interaction / frontend</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}