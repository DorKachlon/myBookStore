import React from "react";
import Library from "./Library.svg";
import Cover from "./Cover.svg";

import "./style.css";
export default function Home() {
  return (
    <div className="home-page-container">
      <img className="library-svg" src={Library} alt="library" />
      <img className="home-logo-title-svg" src={Cover} alt="logo-title" />
    </div>
  );
}
