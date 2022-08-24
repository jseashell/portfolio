import React from "react";
import "./Hero.css";

const yearsExperience = new Date().getFullYear() - 2016;

export function Hero() {
  return (
    <React.Fragment>
      <div className="hero">
        <h1>
          Hey there, I'm <span>John</span>
        </h1>
        <div>
          <h2>years experience</h2>
          <span>{yearsExperience}</span>
        </div>
      </div>
    </React.Fragment>
  );
}
