"use client";

import { inView, motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      className="px-20 flex flex-col gap-10 scroll-mt-24"
      id="projects"
    >
      <div className="flex flex-col gap-5">
        <p className="text-[#7FE143] text-[30px]">My Portfolio</p>
        <p className="sm:text-3xl text-xl font-medium">
          Selected Works 2022-2024
        </p>
      </div>

      <div className="w-full flex sm:flex-row flex-col gap-20">
        <motion.div
          ref={ref}
          initial={{ x: -200 }} // Start position (left)
          animate={{ x: isInView ? 0 : -200 }} // End position (right when visible, left otherwise)
          transition={{ duration: 1 }} // Animation duration
          className="sm:w-1/2 w-full h-[700px] bg-black rounded-[50px] relative flex items-center justify-center"
        >
          <img
            src={hoveredProject ? hoveredProject.icon : "./assets/default.png"}
            className="object-cover h-[60%] w-full rounded-3xl transition-opacity duration-300 ease-in-out"
            alt=""
          />
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ x: +400 }}
          animate={{ x: isInView ? 0 : +400 }}
          transition={{ duration: 1 }}
          className="sm:w-1/2 w-full flex flex-col items-start justify-center text-white gap-10"
        >
          <h1 className="text-[40px] font-extrabold">PROJECTS</h1>
          {portfolioData.map((project, index) => (
            <motion.div key={index} className="w-full flex flex-col gap-10">
              <div className="w-full h-[3px] bg-zinc-300 rounded-[100px]"></div>
              <div
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                className="flex flex-row justify-between w-full items-center cursor-pointer"
              >
                <p className="sm:text-[24px] text-[18px] font-bold">
                  {project.name}
                </p>{" "}
                <p className="sn:text-[18px] text-[12px] font-bold text-zinc-400">
                  {project.domain}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
