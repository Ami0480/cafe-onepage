import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.svg";
import Hamburger from "./images/hamburger.svg";

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="absolute z-20 flex items-center justify-between w-full p-4">
      <Link to="/" onClick={scrollToTop}>
        <img src={Logo} alt="Logo" />
      </Link>

      <img src={Hamburger} alt="Nav Icon" />
    </div>
  );
}
