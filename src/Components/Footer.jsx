import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Footer({
  email = "",
  phone = "",
  whatsapp = "",
  twitter = "",
  instagram = "",
  Github = "",
  linkedin = "",
  resume = "",
}) {
  return (
    <footer
      name="contact"
      className="z-50 font-robot bg-gray-800 text-white p-6 md:px-12 lg:px-24 h-60"
    >
      <div className="max-w-screen-lg mx-auto grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
        {/* Contact Info */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mb-2  font-robotCon">
            Contact Info
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            {email || "Not Provided"}
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            {phone || "Not Provided"}
          </p>
        </div>

        <div className="space-y-4 text-center">
          <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mb-2 font-robotCon">
            Follow Us On
          </h2>
          <div className="flex justify-center md:justify-center space-x-6 md:space-x-8 lg:space-x-10">
            {whatsapp && (
              <a
                href={whatsapp}
                className="text-white hover:text-green-400 transition transform hover:scale-110 duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={28} />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                className="text-white hover:text-blue-400 transition transform hover:scale-110 duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={28} />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                className="text-white hover:text-pink-400 transition transform hover:scale-110 duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={28} />
              </a>
            )}
            {Github && (
              <a
                href={Github}
                className="text-white hover:text-gray-600 transition transform hover:scale-110 duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={28} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                className="text-white hover:text-blue-600 transition transform hover:scale-110 duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={28} />
              </a>
            )}
            {resume && (
              <a
                href={resume}
                className="text-white hover:text-blue-900 transition transform hover:scale-110 duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFillPersonLinesFill size={28} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
