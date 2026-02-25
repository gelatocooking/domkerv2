"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader({ serviceMenu }: { serviceMenu: string[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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

  return (
    <header className={`site-header ${isMenuOpen ? "is-menu-open" : ""}`}>
      <div className="header-shell">
        <Link className="brand" href="/" onClick={closeMenu}>
          <Image src="/domker-logo.png" alt="Domker" width={144} height={42} priority />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="menu-toggle-icon" aria-hidden="true">
            {isMenuOpen ? <X /> : <Menu />}
          </span>
        </button>

        <nav className="main-nav" id="main-navigation" aria-label="Nawigacja główna">
          <Link href="/" onClick={closeMenu}>
            Strona główna
          </Link>

          <div className={`nav-dropdown ${isServicesOpen ? "is-open" : ""}`}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
              onClick={() => setIsServicesOpen((prev) => !prev)}
            >
              Usługi dla firm
              <ChevronDown className="nav-dropdown-chevron" aria-hidden="true" />
            </button>
            <div className="dropdown-menu">
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
          <Link className="main-nav-cta" href="/kontakt" onClick={closeMenu}>
            Bezpłatna konsultacja
          </Link>
        </nav>

        <Link className="header-cta" href="/kontakt" onClick={closeMenu}>
          Bezpłatna konsultacja
        </Link>
      </div>

      <button
        type="button"
        className={`header-backdrop ${isMenuOpen ? "is-visible" : ""}`}
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
      />
    </header>
  );
}

