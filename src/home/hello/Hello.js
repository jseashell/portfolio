import React from "react";
import styles from "./Hello.module.css";

export function Hello(props) {
  return (
    <React.Fragment>
      <div className={props.className}>
        <h1 className={styles.heading}>
          Hey there,
          <br />
          I'm <span className={styles.name}>John</span>
        </h1>
      </div>
    </React.Fragment>
  );
}
