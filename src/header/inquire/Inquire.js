import React from "react";
import { MdOutgoingMail } from "react-icons/md";
import styles from "./Inquire.module.css";

const email = process.env.INQUIRE_EMAIL || "INQUIRE_EMAIL";

/**
 * Component representing the Inquire action to open a new
 * tab and send an email inquiry.
 *
 * @param {Object} props
 *
 * - optional icon size, defaults to `30`<li>
 * @returns Inquire component
 */
export function Inquire(props) {
  return (
    <React.Fragment>
      <a
        href={"mailto:" + email}
        className={styles.inquire}
        target="_blank"
        rel="noreferrer noopener">
        INQUIRE <MdOutgoingMail size={props.size} />
      </a>
    </React.Fragment>
  );
}
