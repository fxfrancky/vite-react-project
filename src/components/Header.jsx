import React from "react";
import LogoImg from "../assets/React-icon.svg";

function Header() {
  return (
    <>
      <header>
        <nav className="navbar-item">
          <div className="navbar-item-block">
            <img src={LogoImg} alt="Logo React" className="navbar-logo-img" />
            <h2 className="navbar-logo-title">ReactFacts</h2>
          </div>
          <h3 className="navbar-item-title">React Course - Project1</h3>
        </nav>
      </header>
    </>
  );
}

export default Header;
