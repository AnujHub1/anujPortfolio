import React from "react";
import { FaLink, FaGithub } from "react-icons/fa"; // Importing React Icons
import modern_treasury from "/modern_treasury.jpg";
import shopper from "/shopper.jpg";
import welcome from "/WELCOME.svg";
import weather from "/weather.jpg";
import wanderlust from "/wanderlust.jpg";
import videoLibrary from "/videoLibrary.jpg";

const portfolio = [
  {
    id: 1,
    title: "Wanderlust",
    src: wanderlust,
    href: "https://wanderlust-n8i5.onrender.com",
    code: "https://github.com/AnujHub1/MAJOR_PROJECT_WANDERLUST.git",
    description:
      "Wandelust is a web application I developed as a clone of Airbnb, using EJS for templating, Node.js for the backend, and Express as the web framework. The project aims to replicate the core features of Airbnb, including property listings, user authentication, and a booking system.Some of the key features of Wandelust include user authentication with secure login and registration.",
    technologies: ["Node.js", "Express", "MongoDB", "EJS"],
  },
  {
    id: 2,
    title: "Video Library",
    src: videoLibrary,
    href: "https://video-library-puce.vercel.app/",
    code: "https://github.com/AnujHub1/video-library",
    description:
      "The Video Library project is a web-based application that allows users to browse, watch, and interact with a collection of videos. providing key features like video uploads, views, likes, dislikes, and commentsUser Dashboard, Users can log in, browse videos, view stats (likes, dislikes, views), and interact with the content.Admin Panel Admins can upload, manage, and organize videos, ensuring the library is up-to-date",
    technologies: ["React", "Express", "MongoDB", "Tailwind Css"],
  },
  {
    id: 3,
    title: "Weather",
    src: weather,
    href: "https://weather-update-iota.vercel.app/",
    code: "https://github.com/AnujHub1/Weather_Update.git",
    description:
      "A weather-Update website is an online platform that provides users with real-time weather information. It typically displays current weather conditions such as temperature, humidity,feels likes. Users can also search for weather data in specific locations and view extended weather conditions.",
    technologies: ["React", "Tailwind CSS", "Weather API"],
  },

  {
    id: 4,
    title: "Shopper",
    src: shopper,
    href: "https://shopper-six-omega.vercel.app/",
    code: "https://github.com/AnujHub1/SHOPPER-ECOMMERCE.git",
    description:
      "Shopper is an e-commerce platform that offers a wide range of products across various categories, from electronics and fashion to home goods. It focuses on providing a user-friendly shopping experience with features like personalized recommendations, secure payment options, and fast delivery",
    technologies: ["React", "Redux", "Tailwind CSS"],
  },

  {
    id: 5,
    title: "Modern Treasury",
    src: modern_treasury,
    href: "https://modern-treasury.vercel.app/",
    code: "https://github.com/AnujHub1/modernrepo.git",
    description:
      "Modern Treasury is a platform that provides tools for automating and managing payments, money movement, and bank reconciliations. It is often used by companies to handle large-scale, complex financial workflows and ensure compliance with banking standardsThe project is designed to solve the problem of manual payment processing and reconciliation. Companies that deal with multiple transactions.",
    technologies: ["React", "Node.js", "Express"],
  },
  {
    id: 6,
    title: "Wellbeing",
    src: welcome,
    href: "http://wellbeing.ricoz.in",
    code: "https://github.com/org-firstricoz/well-being",
    description:
      "The Wellbeing Health project is a digital platform designed to help users monitor, improve, and maintain their overall physical and mental health. The platform offers personalized tools, resources, and insights to promote a healthier lifestyle, focusing on preventive care and mental well-being",
    technologies: ["React", "Tailwind Css"],
  },
];

export default function Portfolio() {
  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-r from-gray-200 to-gray-400 py-10 pt-24 md:py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-800 font-robotCon">
            Portfolio
          </h2>
          <p className="mt-3 text-lg md:text-xl text-gray-600">
            Check out some of my work below
          </p>
        </div>

        <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-0">
          {portfolio.map((item) => (
            <div
              key={item.id}
              className="shadow-lg hover:shadow-xl rounded-lg bg-gradient-to-r from-gray-100 to-gray-400 overflow-hidden transition-transform duration-200 transform hover:scale-105 p-4 border border-gray-700"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold font-robotCon text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-black mb-4 text-sm">{item.description}</p>

                <div className="mb-3">
                  <h4 className="text-md font-medium font-robotCon text-black ">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap mt-1">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-black border border-gray-800 text-xs font-medium px-2 py-1 m-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink className="mr-2" />
                    <span>Visit Site</span>
                  </a>
                  <a
                    href={item.code}
                    className="flex items-center text-gray-900 hover:text-black transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
