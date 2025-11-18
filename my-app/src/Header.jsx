import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from "./images/logo.svg";
import Hamburger from "./images/hamburger.svg";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <>
      <div className="absolute z-50 flex items-center justify-between w-full p-4">
        <Link to="/" onClick={scrollToTop}>
          <img src={Logo} alt="Logo" />
        </Link>
        <button onClick={toggleNav} className="cursor-pointer z-50 relative">
          <img src={Hamburger} alt="Nav Icon" className="w-8 h-8" />
        </button>
      </div>
      {navOpen && <div className="fixed inset-0" onClick={closeNav} />}
      <div
        className={`fixed top-0 right-0 w-1/2 bg-black text-white z-50 transform transition-transform duration-500 ease-in-out ${
          navOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar onClose={closeNav} />
      </div>
    </>
  );
}
