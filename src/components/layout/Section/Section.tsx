import type { ElementType, HTMLAttributes, ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
}

export function Section({
  children,
  as: Component = "section",
  className,
  ...rest
}: SectionProps) {
  const classes = className ? `${styles.section} ${className}` : styles.section;

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}