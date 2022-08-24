import React from "react";
import { Hero } from "./hero/Hero";
import "./Home.css";
import { Pitch } from "./pitch/Pitch";

export function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Pitch />
    </React.Fragment>
  );
}
