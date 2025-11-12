import React from "react";
import Logo from "./images/logo.svg";
import Hamburger from "./images/hamburger.svg";

export default function Header() {
  return (
    <div className="absolute z-20 flex items-center justify-between w-full p-4">
      <img src={Logo} />
      <img src={Hamburger} />
    </div>
  );
}
