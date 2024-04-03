"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const portfolioData = [
  {
    name: "TRAVEL APP",
    domain: "FRONT-END",
    icon: "./assets/travel.png",
  },
  {
    name: "PLINTH 2024",
    domain: "UI/UX",
    icon: "./assets/plinth.png",
  },
  {
    name: "SOCIAL MEDIA",
    domain: "FRONT-END + UI/UX",
    icon: "./assets/social-media.png",
  },
  {
    name: "E-COMMERCE",
    domain: "FULL STACK (UPCOMING)",
    icon: "./assets/default.png",
  },
];

const container = {
  hidden: { opacity: 0.5 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5, // Adjust the duration as needed (in seconds)
      ease: "easeInOut", // Choose an easing function (e.g., easeInOut, easeOut, etc.)
    },
  },
};

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="px-20 flex flex-col gap-20" id="projects">
      <div className="flex flex-col gap-5">
        <p className="text-[#7FE143] text-[40px]">My Portfolio</p>
        <p className="sm:text-5xl text-3xl font-medium">Selected Works 2022-2024</p>
      </div>

      <div className="w-full flex sm:flex-row flex-col gap-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="sm:w-1/2 w-full h-[700px] bg-black rounded-[50px] relative flex items-center justify-center"
        >
          <img
            src={hoveredProject ? hoveredProject.icon : "./assets/default.png"}
            className="object-cover h-[80%] w-full rounded-3xl transition-opacity duration-300 ease-in-out"
            alt=""
          />
        </motion.div>
        <div className="sm:w-1/2 w-full flex flex-col items-start justify-center text-white gap-10">
          <h1 className="text-[64px] font-extrabold">PROJECTS</h1>
          {portfolioData.map((project, index) => (
            <motion.div
              key={index}
              variants={container}
              initial="hidden"
              animate="show"
              className="w-full flex flex-col gap-10"
            >
              <div className="w-full h-[3px] bg-zinc-300 rounded-[100px]"></div>
              <div
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                className="flex flex-row justify-between w-full items-center cursor-pointer"
              >
                <p className="sm:text-[32px] text-[24px] font-bold">{project.name}</p>{" "}
                <p className="sn:text-[24px] text-[18px] font-bold text-zinc-400">
                  {project.domain}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
