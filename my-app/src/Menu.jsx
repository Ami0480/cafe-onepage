import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Menu() {
  const [showAll, setShowAll] = useState(false);

  const drinkMenu = [
    { name: "Espresso", price: "5.0" },
    { name: "Cappuccino", price: "5.0" },
    { name: "Flat White", price: "5.0" },
    { name: "Latte", price: "5.0" },
    { name: "Long Black", price: "5.0" },
    { name: "Hot Chocolate", price: "6.5" },
    { name: "Chai Latte", price: "6.0" },
    { name: "Matcha Latte", price: "6.5" },
    { name: "Iced Latte", price: "8.0" },
    { name: "Iced Mocha", price: "8.0" },
    { name: "Iced Long Black", price: "7.0" },
  ];

  const displayedMenu = showAll ? drinkMenu : drinkMenu.slice(0, 5);

  return (
    <div>
      <section className="container" id="full-menu">
        <h3 className="font-aboreto text-3xl mt-12">Our Menu</h3>
        <h4>Coffee & Drinks</h4>
        {displayedMenu.map((service, index) => (
          <div
            className="flex ml-5 mr-5 mt-3 mb-3 place-content-between border-b border-gray-300 "
            key={index}
          >
            <span>{service.name}</span>
            <span>{service.price}</span>
          </div>
        ))}

        <Link
          to="full-menu"
          smooth={true}
          duration={500}
          onClick={() => setShowAll(!showAll)}
          className="flex justify-center items-center text-center my-6 py-2 rounded-full w-32 mx-auto cursor-pointer text-white bg-black hover:text-blue-800"
        >
          {showAll ? "Close Menu" : "See Menu"}
        </Link>
      </section>
    </div>
  );
}
