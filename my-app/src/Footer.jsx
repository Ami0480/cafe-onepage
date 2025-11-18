import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.svg";
import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";
import X from "./images/x.svg";
import SubmitArrow from "./images/arrow.svg";

export default function Footer() {
  return (
    <div className="container bg-black">
      <Link to="/">
        <img src={Logo} alt="Logo"></img>
      </Link>
      <div className="text-white flex flex-col text-left my-5">
        <div>
          <ul>
            <li className="mb-1">10 Stone St, Perth WA</li>
            <li className="mb-1">12-345-678</li>
            <li className="mb-1">cafestone@gmail.com</li>
          </ul>
          <div className="flex gap-4 my-5">
            <img src={Facebook} />
            <img src={Instagram} />
            <img src={X} />
          </div>
        </div>

        <div>
          <p className="mb-1">Subscribe</p>
          <form className="relative">
            <input
              type="email"
              placeholder="Please enter your email..."
              className="w-full bg-white text-gray-800 rounded-sm pl-2"
            />
            <button type="submit">
              <img
                src={SubmitArrow}
                alt="right arrow"
                className="absolute right-1 bottom-1.5"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
