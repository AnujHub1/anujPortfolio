import React, { useState } from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript (ES6+)",
  "ReactJS",
  "Redux Toolkit",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Bootstrap",
];

export default function About() {
  const [readMore, setReadMore] = useState(false);

  return (
    <div
      style={{ color: "#333333" }}
      name="about"
      className="w-full min-h-screen pt-24 md:pt-20 bg-gradient-to-r from-gray-200 to-gray-400 flex justify-center items-center p-6 rounded-xl"
    >
      <div className="p-8 mx-auto max-w-4xl bg-gradient-to-r from-gray-600 to-gray-900 shadow-2xl rounded-xl text-white transition-transform duration-300 hover:shadow-3xl hover:scale-105">
        <h1 className="text-2xl md:text-3xl font-robotCon text-center font-semibold  mb-4">
          About Me
        </h1>

        <div className="p-3 text-base md:text-lg leading-relaxed ">
          Hello, I’m <b>Anuj Malakar</b> from Indore, Madhya Pradesh. I
          completed my MCA in 2024 with a CGPA of 7.6, and I'm currently gaining
          hands-on experience as a <b>Full-Stack Developer</b> intern at Ricoz
          Private Ltd. Since June 2024, I’ve been actively working on both
          frontend and backend technologies, which has strengthened my skills in
          web development.
          <span className={`${readMore ? "inline" : "hidden"}`}>
            &nbsp;My experience in web technologies has honed my ability to
            develop solutions that meet user needs and exceed expectations. I
            enjoy tackling complex challenges and am continuously improving my
            skill set to excel in the tech industry.
          </span>
          <button
            className="text-gray-500 font-medium ml-2"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        </div>

        <hr className="my-4 border-gray-800" />

        <h2 className="text-xl md:text-2xl font-semibold font-robotCon text-center mb-2">
          Technical Skills
        </h2>
        <ul className="list-disc grid grid-cols-2 gap-2 p-4 md:grid-cols-3 ">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="hover:text-gray-400 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
            >
              {skill}
            </li>
          ))}
        </ul>

        <hr className="my-4 border-gray-800" />

        <div className="p-3 text-base md:text-lg leading-relaxed ">
          My passion for technology and problem-solving drives me in my career.
          Coding allows me to build impactful solutions, and I am committed to
          further developing my skills to deliver exceptional work in the field.
        </div>
      </div>
    </div>
  );
}
