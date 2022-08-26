import React from "react";
import styles from "./Pfp.module.css";

export function Pfp(props) {
  return (
    <div className={props.className}>
      <img
        className={styles.image}
        src={process.env.PUBLIC_URL + "/pfp.png"}
        alt="Profile"
      />
    </div>
  );
}
