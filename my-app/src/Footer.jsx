import React from "react";
import Logo from "./images/logo.svg";

export default function Footer() {
  return (
    <div className="bg-black">
      <img src={Logo} />
      <div className="text-white">
        <ul>
          <li>10 Stone St, Perth</li>
          <li>12-345-678</li>
          <li>cafestone@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}
