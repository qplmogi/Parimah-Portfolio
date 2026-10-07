import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export function Container({
  children,
  as: Component = "div",
  className,
}: ContainerProps) {
  const classes = className ? `${styles.container} ${className}` : styles.container;
  return <Component className={classes}>{children}</Component>;
}