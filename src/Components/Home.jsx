import React from "react";
import { Link } from "react-scroll";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <div
      name="home"
      className="relative flex flex-col md:flex-row items-center w-full min-h-screen bg-cover bg-center rounded-xl p-6 md:bg-[url('/person3.jpg')] bg-gradient-to-r from-gray-200 to-gray-400 pt-24 md:pt-0"
    >
      <div>
        <img
          src="/person.jpg"
          alt=""
          className="w-72 h-72 block md:hidden rounded-full"
        />
      </div>

      <div className="absolute inset-0 opacity-20"></div>

      <div className="relative flex flex-col justify-center items-center md:items-start pt-8 mt-10 md:mt-0 px-6">
        <h2 className="text-6xl md:text-8xl font-bold mb-4 font-robotCon">
          Anuj Malakar
        </h2>
        <p className="text-base md:text-xl max-w-md mb-6 text-black">
          I’m a Software Developer with expertise in creating responsive web
          applications and full-stack development.
        </p>

        <div>
          <Link
            to="portfolio"
            className="group text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-900 cursor-pointer"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
