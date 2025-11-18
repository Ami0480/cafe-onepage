import React from "react";
import Menu from "./Menu";
import HeroImage from "./images/cafe-hero.jpg";
import HistoryOutsideImage from "./images/history-outside.jpg";

import BrickInterior from "./images/cafe-brick.jpg";
import BrickInterior2 from "./images/cafe-brick2.jpg";
import BerryTart from "./images/berry-tart.jpg";
import Interior from "./images/cafe-interior.jpg";
import Interior2 from "./images/cafe-interior2.jpg";
import Bagle from "./images/coffee-bagle.jpg";
import Display from "./images/display.jpg";
import FrenchToast from "./images/french-toast.jpg";
import Hamburger from "./images/hamburger.jpg";
import IceLatte from "./images/ice-latte.jpg";
import Pancake from "./images/pancake.jpg";
import RoastPotato from "./images/roast-potato.jpg";

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
        <div className="container absolute inset-0 flex flex-col justify-center items-center text-center z-20">
          <h1 className="text-white text-5xl mb-2">Stone Street</h1>
          <h2 className="text-white font-sacramento text-5xl">cafe</h2>
        </div>
      </div>

      <section className="container">
        <h3 className="text-3xl mt-12">Our History</h3>
        <img
          src={HistoryOutsideImage}
          alt="Old Cafe Exterior"
          className="rounded-3xl mt-8 mb-8"
        ></img>
        <p>
          Established in 1950, our cafe began as a humble corner spot inspired
          by the warmth and charm of traditional British cafés on Stone Street
          in Perth. At a time when European-style cafés were rare in our
          community, we introduced something new — a cozy place to enjoy freshly
          brewed coffee, homemade pastries, and friendly conversation. Over the
          years, our café has grown, but our passion for authentic flavors and
          welcoming atmosphere remains unchanged.
        </p>
      </section>

      <Menu />

      <section>
        <div>
          <h3 className="text-3xl mt-12">Gallery</h3>
          <div className="flex gap-3 overflow-x-auto mt-6 pb-4 px-5 scrollbar-hide">
            <img
              src={BrickInterior}
              alt="Brick Interior"
              className="w-72 h-72 object-cover shrink-0 rounded-3xl"
            ></img>
            <img
              src={BerryTart}
              alt="Berry and Tart"
              className="w-72 h-72 object-cover shrink-0 rounded-3xl"
            ></img>
            <img
              src={RoastPotato}
              alt="Roast Potato"
              className="w-72 h-72 object-cover shrink-0 rounded-3xl"
            ></img>
            <img
              src={BrickInterior2}
              alt="Brick Interior"
              className="w-72 h-72 object-cover shrink-0 rounded-3xl"
            ></img>
            <img
              src={Hamburger}
              alt="Hamburger"
              className="w-72 h-72 object-cover shrink-0 rounded-3xl"
            ></img>
            <img
              src={Interior}
              alt="Cafe Interior"
              className="w-72 h-72 object-cover shrink-0 rounded-3xl"
            ></img>
            <img
              src={Interior2}
              alt="Cafe Interior"
              className="w-72 h-72 object-cover shrink-0 rounded-3xl"
            ></img>
            <img
              src={Bagle}
              alt="Bagle"
              className="w-72 h-72 object-cover shrink-0 rounded-3xl"
            ></img>
            <img
              src={Display}
              alt="Cafe Display"
              className="w-72 h-72 object-cover shrink-0 rounded-3xl"
            ></img>
            <img
              src={FrenchToast}
              alt="French Toast"
              className="w-72 h-72 object-cover shrink-0 rounded-3xl"
            ></img>

            <img
              src={IceLatte}
              alt="Ice Latte"
              className="w-72 h-72 object-cover shrink-0 rounded-3xl"
            ></img>
            <img
              src={Pancake}
              alt="Pancake"
              className="w-72 h-72 object-cover shrink-0 rounded-3xl"
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
}
