import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

/**
 * Indicates the className for an active/inactive {@link NavLink}
 * @param {boolean} isActive
 * @returns string representing the className
 */
const navLinkClassName = ({ isActive }) =>
  isActive ? styles.active : styles.inactive;

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
              <NavLink to="skills" className={navLinkClassName}>
                SKILLS
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </React.Fragment>
  );
}
