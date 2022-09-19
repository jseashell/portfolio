import React from "react";
import { DashConnector, LineConnector } from "../connector/Connector";
import styles from "./Frontend.module.css";

export function Frontend() {
  return (
    <div className={styles.container}>
      <h2>Frontend</h2>
      <div className={styles.frontend}>
        <div className={styles.htmlTitle}>
          <h3 id="frontend-html-title">HTML</h3>
        </div>
        <ul className={styles.htmlItems}>
          <li id="frontend-html-accessibility">Accessibility</li>
          <li id="frontend-html-input-validation">Input Validation</li>
          <li id="frontend-html-sematic-html">Semantic HTML</li>
        </ul>
        <DashConnector
          start="frontend-html-title"
          end="frontend-html-accessibility"
        />
        <DashConnector
          start="frontend-html-title"
          end="frontend-html-input-validation"
        />
        <DashConnector
          start="frontend-html-title"
          end="frontend-html-sematic-html"
        />
        <div className={styles.cssTitle}>
          <h3 id="frontend-css-title">CSS</h3>
        </div>
        <ul className={styles.cssItems}>
          <li id="frontend-css-animation">Animation</li>
          <li id="frontend-css-responsive">Responsive Layout</li>
          <li id="frontend-css-theming">Theming</li>
        </ul>
        <DashConnector
          start="frontend-css-title"
          end="frontend-css-animation"
        />
        <DashConnector
          start="frontend-css-title"
          end="frontend-css-responsive"
        />
        <DashConnector start="frontend-css-title" end="frontend-css-theming" />
        <div className={styles.javascriptTitle}>
          <h3 id="frontend-javascript-title">JavaScript</h3>
        </div>
        <ul className={styles.javascriptItems}>
          <li id="frontend-javascript-ajax">AJAX / API Integration</li>
          <li id="frontend-javascript-dom">DOM Manipulation</li>
          <li id="frontend-javascript-es">ES6+</li>
        </ul>
        <DashConnector
          start="frontend-javascript-title"
          end="frontend-javascript-ajax"
        />
        <DashConnector
          start="frontend-javascript-title"
          end="frontend-javascript-dom"
        />
        <DashConnector
          start="frontend-javascript-title"
          end="frontend-javascript-es"
        />
        <div className={styles.securityTitle}>
          <h3 id="frontend-security-title">Web Security</h3>
        </div>
        <ul className={styles.securityItemsLeft}>
          <li id="frontend-security-https">HTTPS</li>
          <li id="frontend-security-ssl">SSL</li>
          <li id="frontend-security-cookies">Secured Cookies</li>
        </ul>
        <ul className={styles.securityItemsRight}>
          <li id="frontend-security-cors">CORS</li>
          <li id="frontend-security-csp">Content Security Policy</li>
          <li id="frontend-security-owasp">OWASP</li>
        </ul>
        <DashConnector
          start="frontend-security-title"
          end="frontend-security-csp"
        />
        <DashConnector
          start="frontend-security-title"
          end="frontend-security-cors"
        />
        <DashConnector
          start="frontend-security-title"
          end="frontend-security-https"
        />
        <DashConnector
          start="frontend-security-title"
          end="frontend-security-owasp"
        />
        <DashConnector
          start="frontend-security-title"
          end="frontend-security-cookies"
        />
        <DashConnector
          start="frontend-security-title"
          end="frontend-security-ssl"
        />
        <LineConnector start="frontend-html-title" end="frontend-css-title" />
        <LineConnector
          start="frontend-css-title"
          end="frontend-javascript-title"
        />
        <LineConnector
          start="frontend-javascript-title"
          end="frontend-security-title"
        />
      </div>
    </div>
  );
}
