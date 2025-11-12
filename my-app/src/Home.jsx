import React from "react";
import HeroImage from "./images/cafe-hero.jpg";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen object-cover">
        <div className="absolute w-full h-screen bg-black/60 z-10"></div>
        <img
          src={HeroImage}
          alt="Cafe Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        ></img>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20">
          <h1 className="text-white font-aboreto text-5xl mb-2">
            Stone Street
          </h1>
          <h2 className="text-white font-sacramento text-5xl">cafe</h2>
        </div>
      </div>

      <section>
        <h3>Our History</h3>
      </section>
    </div>
  );
}
