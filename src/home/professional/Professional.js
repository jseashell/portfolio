import React from "react";
import styles from "./Professional.module.css";

export function Professional(props) {
  return (
    <React.Fragment>
      <div className={props.className}>
        <h3>Enterprise Software Professional</h3>
        <div className={styles.logos}>
          <a
            title="Genesys"
            className={styles.image}
            href="https://genesys.com"
            target="_blank"
            rel="noreferrer noopener">
            <img src={process.env.PUBLIC_URL + "/genesys.png"} alt="Genesys" />
          </a>
          <a
            title="Orchard Software"
            className={styles.image}
            href="https://orchardsoft.com"
            target="_blank"
            rel="noreferrer noopener">
            <img src={process.env.PUBLIC_URL + "/orchard.png"} alt="Orchard" />
          </a>
          <a
            title="Air Force Institute of Technology"
            className={styles.image}
            href="https://afit.edu"
            target="_blank"
            rel="noreferrer noopener">
            <img
              src={process.env.PUBLIC_URL + "/afit.png"}
              alt="Air Force Institute of Technology"
            />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
