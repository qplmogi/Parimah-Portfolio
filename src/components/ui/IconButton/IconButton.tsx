import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./IconButton.module.css";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label: string;
}

export function IconButton({
  children,
  label,
  type = "button",
  className,
  ...rest
}: IconButtonProps) {
  const classes = className ? `${styles.iconButton} ${className}` : styles.iconButton;

  return (
    <button type={type} aria-label={label} className={classes} {...rest}>
      {children}
    </button>
  );
}