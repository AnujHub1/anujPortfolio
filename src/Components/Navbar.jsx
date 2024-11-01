import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar({ links }) {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between md:justify-around  items-center w-full h-20 px-4 text-white bg-gray-800 fixed z-50 fixed">
      <div className="block">
        <h1 className="text-4xl ml-2 font-robotCon">Anuj</h1>
      </div>
      <ul className="hidden md:flex font-robot">
        {links.map((item) => (
          <li
            key={item.id}
            className="px-4 cursor-pointer capitalize  font-robot text-xl hover:scale-105 duration-200"
          >
            <Link to={item.link} smooth duration={500}>
              {item.link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10  md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b capitalize from-black to-gray-800 ">
          {links.map((item) => (
            <li
              key={item.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={item.link}
                smooth
                duration={500}
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
