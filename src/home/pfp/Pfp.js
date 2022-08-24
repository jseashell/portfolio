import React from "react";
import "./Pfp.css";

export function Pfp() {
  return (
    <div className="pfp">
      <img
        src={process.env.PUBLIC_URL + "/pfp_orange.png"}
        alt="Profile picture"
      />
    </div>
  );
}
