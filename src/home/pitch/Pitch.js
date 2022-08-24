import React from "react";
import "./Pitch.css";

export function Pitch() {
  return (
    <React.Fragment>
      <div className="pitch">
        <div className="qualifications">
          <p>Industry Professional</p>
          <div className="logos">
            <a
              className="image"
              href="https://genesys.com"
              target="_blank"
              rel="noreferrer noopener">
              <img
                src={process.env.PUBLIC_URL + "/genesys.png"}
                alt="Genesys"
              />
            </a>
            <a
              className="image"
              href="https://orchardsoft.com"
              target="_blank"
              rel="noreferrer noopener">
              <img
                src={process.env.PUBLIC_URL + "/orchard.png"}
                alt="Orchard"
              />
            </a>
            <a
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
        <img
          className="zigzag"
          src={process.env.PUBLIC_URL + "/zigzag.png"}
          alt="Abstract clipart"
        />
        <div className="elevator">
          <p>I develop your creative web designs</p>
          <div className="bubble"></div>
          <div className="avatar"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
