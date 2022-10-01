import React, { useEffect, useState } from "react";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { Inquire } from "./inquire/Inquire";
import { Logo } from "./logo/Logo";
import { NavBar } from "./navbar/NavBar";

export function Header() {
  const mediaQuery = "only screen and (max-width: 495px)";

  let [isMobile, setIsMobile] = useState(window.matchMedia(mediaQuery).matches);

  let [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () =>
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);

  useEffect(() => {
    const handler = (e) => {
      setIsMobile(e?.matches || false);
      console.log(`js media match`);
    };
    window.matchMedia(mediaQuery).addEventListener("change", handler);
  }, []);

  return (
    <React.Fragment>
      <header className={styles.header}>
        {!isMobile && (
          <div className={styles.container}>
            <NavLink to="/" title="Home">
              <Logo />
            </NavLink>
            <NavBar open={true} />
            <Inquire size={30} />
          </div>
        )}
        {isMobile && (
          <React.Fragment>
            <div className={styles.mobileContainer}>
              <NavLink to="/" title="Home">
                <Logo />
              </NavLink>
              <div className={styles.mobileActions}>
                <Inquire size={60} />
                <button
                  className={styles.mobileMenuButton}
                  onClick={toggleMenu}>
                  {isMenuOpen ? <MdMenuOpen /> : <MdMenu />}
                </button>
              </div>
            </div>
            <NavBar open={isMenuOpen} />
          </React.Fragment>
        )}
      </header>
    </React.Fragment>
  );
}
