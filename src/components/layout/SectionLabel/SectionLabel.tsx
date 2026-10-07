import type { ReactNode } from "react";
import styles from "./SectionLabel.module.css";

interface SectionLabelProps {
  number: string;
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ number, children, className }: SectionLabelProps) {
  const classes = className ? `${styles.label} ${className}` : styles.label;

  return (
    <p className={classes}>
      <span className={styles.number}>{number}</span>
      <span>{children}</span>
    </p>
  );
}