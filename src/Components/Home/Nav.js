import React from "react";
import "./Nav.css";

export const Nav = () => {
  return (
    <div className="navContainer">
      <div className="navBar">
        <div className="menuContainer">
          <span className="menu"></span>
        </div>
        <div className="logoContainer">
          <h2>Forest</h2>
        </div>
        <div className="coinContainer">
          <div className="coinBalance">0</div>
          <div className="coinIcon">$</div>
        </div>
      </div>
    </div>
  );
};
