import React from "react";

export function Backend() {
  return (
    <React.Fragment>
      <span>Backend</span>
      <ul>
        <li>
          <span>APIs</span>
          <ul>
            <li>REST</li>
            <li>HTTP with SOAP</li>
            <li>Websocket</li>
          </ul>
        </li>
        <li>
          <span>Languages</span>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>Java</li>
          </ul>
        </li>
        <li>
          <span>Operating Systems</span>
          <ul>
            <li>MacOS</li>
            <li>Linux (REHL, AL2, Ubuntu)</li>
            <li>Windows (7+, Server)</li>
          </ul>
        </li>
        <li>
          <span>Package Management</span>
          <ul>
            <li>
              <span>Operating System</span>
              <ul>
                <li>APT / YUM</li>
                <li>Homebrew</li>
              </ul>
            </li>
            <li>
              <span>JavaScript</span>
              <ul>
                <li>NPM</li>
                <li>Yarn</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Node.js / V8</li>
        <li>Webpack</li>
        <li>
          <span>CI/CD</span>
          <ul>
            <li>
              <span>Integration</span>
              <ul>
                <li>AppVeyor</li>
                <li>Jenkins</li>
                <li>GitLab CI</li>
              </ul>
            </li>
            <li>
              <span>Deployment</span>
              <ul>
                <li>Amazon Web Services (AWS)</li>
                <li>Enterprise On-premises</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </React.Fragment>
  );
}
