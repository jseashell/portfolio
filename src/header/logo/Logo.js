import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

const size = 60;

export function Logo() {
  return (
    <React.Fragment>
      <NavLink to="/" title="Home">
        <svg
          className={styles.logo}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          data-name="Layer 1"
          viewBox={`0 0 ${size} ${size}`}>
          <path d="M6.8,6.8V41.2H41.2V6.8ZM25.53,32.59c0,4.23-2.05,5.64-5.09,5.64a7.65,7.65,0,0,1-2.34-.37l.34-2.26a5.19,5.19,0,0,0,1.72.28c1.6,0,2.57-.72,2.57-3.38V22.66h2.8Zm6.52,5.62a9,9,0,0,1-4.14-1l.62-2.32a7.76,7.76,0,0,0,3.7,1C34,35.9,35,35.06,35,33.81S34.24,32,32.3,31.27c-2.53-.9-4.14-2.26-4.14-4.45,0-2.51,2.09-4.4,5.42-4.4a8.06,8.06,0,0,1,3.67.76l-.67,2.25a6.63,6.63,0,0,0-3.06-.72c-1.78,0-2.53.94-2.53,1.84,0,1.18.89,1.73,2.93,2.51,2.66,1,3.94,2.35,3.94,4.55C37.86,36.08,36,38.21,32.05,38.21Z" />
        </svg>
      </NavLink>
    </React.Fragment>
  );
}