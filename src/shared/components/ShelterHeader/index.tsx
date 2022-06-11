import React from "react";
import logo from "@/shared/assets/logo_shelterbuddy.svg";
import "./styles.scss";

type ShelterHeaderProps = {
    logoURL?: string;
}

function ShelterHeader({ logoURL }: ShelterHeaderProps): JSX.Element {
  return (
    <header className="main-header">
      <img src={logoURL || logo} alt="Shelter Buddy logo" id="logo"/>
    </header>
  )
}

export default ShelterHeader;