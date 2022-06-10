import React from "react";
import logo from "@/shared/assets/logo_shelterbuddy.svg";
import "./styles.scss";

function Header() {
  return (
    <header className="main-header">
      <img src={logo} alt="Shelter Buddy logo" id="logo"/>
    </header>
  )
}

export default Header;