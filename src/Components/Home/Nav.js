import React from "react";
import "./Nav.css";
import { SideNav } from "./SideNav";

export const Nav = () => {
  let slider = "off";

  const sideNavSlider = () => {
    if (slider === "off") {
      document.getElementById("menu").classList.remove("menuIcon1");
      document.getElementById("menu").classList.add("menuIcon2");
      document.getElementsByClassName("sideNavContainer")[0].style.left = 0;
      slider = "on";
    } else if (slider === "on") {
      document.getElementById("menu").classList.remove("menuIcon2");
      document.getElementById("menu").classList.add("menuIcon1");
      document.getElementsByClassName("sideNavContainer")[0].style.left =
        "-19vw";
      slider = "off";
    }
  };
  return (
    <div className="navContainer">
      <div className="navBar">
        <div className="menuContainer" onClick={sideNavSlider}>
          <span id="menu" className="menuIcon1"></span>
        </div>
        <div className="logoContainer">
          <h2>Forest</h2>
        </div>
        <div className="coinContainer">
          <div className="coinBalance">0</div>
          <div className="coinIcon">$</div>
        </div>
      </div>
      <SideNav />
    </div>
  );
};
