import React from "react";
import "./History.css";

export function History() {
  return (
    <React.Fragment>
      <div className="history">
        <h3>History</h3>
        <div className="logos">
          <a
            title="Genesys"
            className="image"
            href="https://genesys.com"
            target="_blank"
            rel="noreferrer noopener">
            <img src={process.env.PUBLIC_URL + "/genesys.png"} alt="Genesys" />
          </a>
          <a
            title="Orchard Software"
            className="image"
            href="https://orchardsoft.com"
            target="_blank"
            rel="noreferrer noopener">
            <img src={process.env.PUBLIC_URL + "/orchard.png"} alt="Orchard" />
          </a>
          <a
            title="Air Force Institute of Technology"
            className="image"
            href="https://www.afit.edu/"
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
