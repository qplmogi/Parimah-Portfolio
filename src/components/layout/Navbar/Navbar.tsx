import { useEffect, useState } from "react";
import { Container } from "../Container";
import { IconButton } from "../../ui/IconButton";
import { NavLink } from "../../ui/NavLink";
import styles from "./Navbar.module.css";

interface NavbarProps {
  className?: string;
}

const MOBILE_MENU_ID = "mobile-navigation";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Lab", href: "#lab" },
  { label: "About", href: "#about" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar({ className }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const classes = className ? `${styles.header} ${className}` : styles.header;

  return (
    <header className={classes}>
      <Container>
        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#" className={styles.wordmark} onClick={closeMenu}>
            PARIMAH
          </a>

          <ul className={styles.desktopLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>

          <IconButton
            className={styles.menuButton}
            label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={styles.menuText}>
              {isMenuOpen ? "Close" : "Menu"}
            </span>
          </IconButton>
        </nav>
      </Container>

      <div
        id={MOBILE_MENU_ID}
        className={styles.mobileMenu}
        hidden={!isMenuOpen}
      >
        <Container>
          <ul className={styles.mobileLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  className={styles.mobileLink}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
}
