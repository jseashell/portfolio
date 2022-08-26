import React from "react";
import { Hello } from "./hello/Hello";
import styles from "./Home.module.css";
import { Pfp } from "./pfp/Pfp";
import { Pitch } from "./pitch/Pitch";
import { Professional } from "./professional/Professional";
import { YearsExperience } from "./years-experience/YearsExperience";

export function Home() {
  return (
    <React.Fragment>
      <div className={styles.grid}>
        <Hello className={styles.hello} />
        <Pfp className={styles.pfp} />
        <YearsExperience className={styles.yearsExperience} />
        <Professional className={styles.professional} />
        <Pitch className={styles.pitch} />
      </div>
      <div className={styles.skills}>
        <ul>
          <li>
            <span>JavaScript</span>
          </li>
          <li>
            <span>HTML 5</span>
          </li>
          <li>
            <span>CSS 3</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
