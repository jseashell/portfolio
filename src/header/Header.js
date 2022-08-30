import React, { useEffect, useState } from "react";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { Inquire } from "./inquire/Inquire";
import { Logo } from "./logo/Logo";
import { NavBar } from "./navbar/NavBar";

export function Header() {
  const mediaQuery = "(max-width: 750px)";

  let [isMobile, setIsMobile] = useState(window.matchMedia(mediaQuery).matches);

  let [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () =>
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);

  useEffect(() => {
    const handler = (e) => {
      setIsMobile(e?.matches || false);
    };
    window.matchMedia(mediaQuery).addEventListener("change", handler);
  }, []);

  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.container}>
          <NavLink to="/" title="Home">
            <Logo />
          </NavLink>
          {!isMobile && <NavBar open={true} />}
          {!isMobile && <Inquire size={30} />}
          {isMobile && (
            <div className={styles.mobileContainer}>
              <button className={styles.mobileMenu} onClick={toggleMenu}>
                {isMenuOpen ? <MdMenuOpen /> : <MdMenu />}
              </button>
              <Inquire size={60} />
            </div>
          )}
          {isMobile && <NavBar open={isMenuOpen} />}
        </div>
      </header>
    </React.Fragment>
  );
}
