import React from "react";
import LogoImg from "../assets/React-icon.svg";

function Header() {
  return (
    <>
      <header>
        <nav className="navbar-item">
          <div className="navbar-item-block">
            <img src={LogoImg} alt="Logo React" className="navbar-logo-img" />
            <h3 className="navbar-logo-title">ReactFacts</h3>
          </div>
          <h4 className="navbar-item-title">React Course - Project1</h4>
        </nav>
      </header>
    </>
  );
}

export default Header;
