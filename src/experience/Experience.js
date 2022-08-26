import React from "react";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <React.Fragment>
      <h1>History</h1>
      <p>This is a list of my work history</p>
      <ul className={styles.list}>
        <li>
          <img src={process.env.PUBLIC_URL + "/genesys.png"} alt="Genesys" />
        </li>
        <li>
          <img
            src={process.env.PUBLIC_URL + "/orchard.png"}
            alt="Orchard Software"
          />
        </li>
        <li>
          <img
            src={process.env.PUBLIC_URL + "/afit.png"}
            alt="Air Force Institute of Technology"
          />
        </li>
      </ul>
    </React.Fragment>
  );
}
