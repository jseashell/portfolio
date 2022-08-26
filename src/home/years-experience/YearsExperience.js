import React from "react";
import styles from "./YearsExperience.module.css";

export function YearsExperience(props) {
  const yearsExperience = new Date().getFullYear() - 2016;
  return (
    <React.Fragment>
      <div className={props.className}>
        <div className={styles.container}>
          <h2 className={styles.heading}>years experience</h2>
          <span className={styles.number}>{yearsExperience}</span>
        </div>
      </div>
    </React.Fragment>
  );
}
