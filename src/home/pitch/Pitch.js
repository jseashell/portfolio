import React from "react";
import styles from "./Pitch.module.css";

export function Pitch(props) {
  return (
    <React.Fragment>
      <div className={props.className}>
        <div className={styles.bubble}></div>
        <p className={styles.message}>I'd like to develop your website</p>
      </div>
    </React.Fragment>
  );
}
