import React from "react";
import { Elevator } from "./elevator/Elevator";
import { Hero } from "./hero/Hero";
import { History } from "./history/History";
import "./Home.css";
import { Pfp } from "./pfp/Pfp";

export function Home() {
  return (
    <React.Fragment>
      <Hero />
      <div className="pitch">
        <Elevator className="elevator" />
        <div className="mobile-container">
          <Pfp className="pfp" />
          <History className="history" />
        </div>
      </div>
    </React.Fragment>
  );
}
