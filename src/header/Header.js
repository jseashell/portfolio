import React, { useEffect, useState } from "react";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import "./Header.css";
import { Inquire } from "./inquire/Inquire";
import { NavBar } from "./navbar/NavBar";

export function Header() {
  const mediaQuery = "(max-width: 768px)";

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
      <header>
        {!isMobile && <NavBar open={true} />}
        {!isMobile && <Inquire size={30} />}
        {isMobile && (
          <div class="mobile-header">
            <button className="mobile-menu" onClick={toggleMenu}>
              {isMenuOpen ? <MdMenuOpen /> : <MdMenu />}
            </button>
            <Inquire size={60} />
          </div>
        )}
        {isMobile && <NavBar open={isMenuOpen} />}
      </header>
    </React.Fragment>
  );
}
