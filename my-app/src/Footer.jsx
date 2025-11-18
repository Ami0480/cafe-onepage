import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.svg";
import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";
import X from "./images/x.svg";
import SubmitArrow from "./images/arrow.svg";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [emailValue, setEmailValue] = useState("");
  const [email, setEmail] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailValue) {
      setError("Please enter your email");
      return;
    }

    if (!validateEmail(emailValue)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setEmail(true);
  };

  return (
    <div className="container bg-black">
      <Link to="/">
        <img src={Logo} alt="Logo" onClick={scrollToTop} className="mt-3"></img>
      </Link>
      <div className="text-white flex flex-col text-left my-8">
        <div>
          <ul>
            <li className="mb-2">10 Stone St, Perth WA</li>
            <li className="mb-2">12-345-678</li>
            <a href="mailto:cafestone@gmail.com">
              <li className="mb-2">cafestone@gmail.com</li>
            </a>
          </ul>
          <div className="flex gap-5 my-5">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.x.com" target="_blank" rel="noreferrer">
              <img src={X} alt="X" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-2">Subscribe</p>
          {email ? (
            <p className="mt-3">Thank you for subscribing!</p>
          ) : (
            <form className="relative" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Please enter your email..."
                className="w-full bg-white text-gray-800 rounded-sm pl-2"
                required
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <button type="submit">
                <img
                  src={SubmitArrow}
                  alt="right arrow"
                  className="absolute right-1 bottom-1.5"
                />
              </button>
            </form>
          )}
          {error && <p className="text-red-500 font-light mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
}
