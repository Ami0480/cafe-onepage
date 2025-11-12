import React from "react";
import HeroImage from "./images/cafe-hero.jpg";
import HistoryOutsideImage from "./images/history-outside.jpg";

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
          <h1 className="text-white font-aboreto text-5xl mb-2">
            Stone Street
          </h1>
          <h2 className="text-white font-sacramento text-5xl">cafe</h2>
        </div>
      </div>

      <section className="container">
        <h3 className="font-aboreto text-3xl mt-12">Our History</h3>
        <img
          src={HistoryOutsideImage}
          alt="Old Cafe Exterior"
          className="rounded-3xl mt-8 mb-8"
        ></img>
        <p className="font-worksans">
          Established in 1950, our café began as a humble corner spot inspired
          by the warmth and charm of traditional British cafés on Stone Street
          in Perth. At a time when European-style cafés were rare in our
          community, we introduced something new — a cozy place to enjoy freshly
          brewed coffee, homemade pastries, and friendly conversation. Over the
          years, our café has grown, but our passion for authentic flavors and
          welcoming atmosphere remains unchanged.
        </p>
      </section>
    </div>
  );
}
