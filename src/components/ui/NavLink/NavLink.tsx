import type { AnchorHTMLAttributes } from "react";
import styles from "./NavLink.module.css";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export function NavLink({
  active = false,
  className,
  children,
  ...rest
}: NavLinkProps) {
  const classes = [styles.link, active ? styles.active : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classes}
      aria-current={active ? "page" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}