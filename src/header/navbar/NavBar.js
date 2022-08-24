import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

/**
 * Indicates the className for an active/inactive {@link NavLink}
 * @param {boolean} isActive
 * @returns string representing the className
 */
const navLinkClassName = ({ isActive }) => (isActive ? "active" : "inactive");

/**
 *
 * @param {Object} props
 * - `open` indicates the open/close state of the navbar
 * @returns Navbar component
 */
export function NavBar(props) {
  return (
    <React.Fragment>
      {props.open && (
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={navLinkClassName}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="showcase" className={navLinkClassName}>
                SHOWCASE
              </NavLink>
            </li>
            <li>
              <NavLink to="experience" className={navLinkClassName}>
                EXPERIENCE
              </NavLink>
            </li>
            <li>
              <NavLink to="social" className={navLinkClassName}>
                SOCIAL
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </React.Fragment>
  );
}
