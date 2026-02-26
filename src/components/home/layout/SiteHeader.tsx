"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./SiteHeader.module.css";

export function SiteHeader({ serviceMenu }: { serviceMenu: string[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1041px)");
    const handleDesktop = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    handleDesktop(mediaQuery);

    const listener = (event: MediaQueryListEvent) => handleDesktop(event);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles["site-header"]} ${isMenuOpen ? styles["is-menu-open"] : ""} ${
        isStuck ? styles["is-stuck"] : ""
      }`}
    >
      <div className={styles["header-shell"]}>
        <Link className={styles.brand} href="/" onClick={closeMenu}>
          <Image src="/domker-logo.png" alt="Domker" width={144} height={42} priority />
        </Link>

        <button
          type="button"
          className={styles["menu-toggle"]}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className={styles["menu-toggle-icon"]} aria-hidden="true">
            {isMenuOpen ? <X /> : <Menu />}
          </span>
        </button>

        <nav className={styles["main-nav"]} id="main-navigation" aria-label="Nawigacja główna">
          <Link href="/" onClick={closeMenu}>
            Strona główna
          </Link>

          <div className={`${styles["nav-dropdown"]} ${isServicesOpen ? styles["is-open"] : ""}`}>
            
            <Link href="/uslugi-dla-firm"
              type="button"
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
              onClick={() => setIsServicesOpen((prev) => !prev)}>

              Usługi dla firm
              <ChevronDown className={styles["nav-dropdown-chevron"]} aria-hidden="true" />
            </Link>
            <div className={styles["dropdown-menu"]}>
              {serviceMenu.map((item) => (
                <Link key={item} href="/kontakt" onClick={closeMenu}>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/referencje" onClick={closeMenu}>
            Referencje
          </Link>
          <Link href="/realizacje" onClick={closeMenu}>
            Realizacje
          </Link>
          <Link href="/cennik" onClick={closeMenu}>
            Cennik
          </Link>
          <Link href="/faq" onClick={closeMenu}>
            FAQ
          </Link>
          <Link href="/kontakt" onClick={closeMenu}>
            Kontakt
          </Link>
          <Link className={styles["main-nav-cta"]} href="/kontakt" onClick={closeMenu}>
            Bezpłatna konsultacja
          </Link>
        </nav>

        <Link className={styles["header-cta"]} href="/kontakt" onClick={closeMenu}>
          Bezpłatna konsultacja
        </Link>
      </div>

      <button
        type="button"
        className={`${styles["header-backdrop"]} ${isMenuOpen ? styles["is-visible"] : ""}`}
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
      />
    </header>
  );
}
