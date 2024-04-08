"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const portfolioData = [
  {
    name: "TRAVEL APP",
    domain: "FRONT-END",
    icon: "/assets/travel.png",
    tech: ["Next js", "Tailwind"],
    link: "https://github.com/priyank-saini/travel-app.git",
  },
  {
    name: "PLINTH 2024",
    domain: "UI/UX",
    icon: "/assets/plinth.png",
    tech: ["Figma"],
    link: "https://github.com/priyank-saini/Plinth-2k24.git",
  },
  {
    name: "SOCIAL MEDIA",
    domain: "FRONT-END + UI/UX",
    icon: "/assets/social-media.png",
    tech: ["Next js", "Tailwind", "Figma"],
    link: "https://github.com/priyank-saini/social-media-webapp.git",
  },
  {
    name: "E-COMMERCE",
    domain: "FULL STACK (UPCOMING)",
    icon: "/assets/default.png",
    tech: ["Next js", "Tailwind", "mongoDB"],
    link: "https://github.com/priyank-saini/e-commerce.git",
  },
];

const Card = ({ image, title, tech, link }) => {
  return (
    <div className="card flex flex-col h-[500px] bg-zinc-900 rounded-lg">
      <Link
        target="_blank"
        href={link}
        className="w-10 h-10 rounded-full border border-black absolute bottom-6 right-5 z-10 shadow-lg"
      >
        <Image src="/assets/github.png" className="rounded-full" fill />
      </Link>
      <div className="h-[70%] w-full">
        <div className="relative w-full h-full">
          <Image
            src={image || ""}
            alt="Travel"
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 p-5">
        <h1 className="font-black sm:text-[40px] text-[30px]">{title}</h1>
        <div className="flex flex-row gap-5">
          {tech.map((skill, index) => {
            return (
              <p
                key={`${index}-${skill}`}
                className="font-semibold sm:text-[15px] text-[10px] px-3 py-2 border-2 border-gray-200 rounded-lg"
              >
                {skill}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [image, setimage] = useState("/assets/default.png");
  const [tech, setTech] = useState(["Next js", "Tailwind", "mongoDB"]);
  const [title, setTitle] = useState("E-COMMERCE");
  const [link, setLink] = useState(
    "https://github.com/priyank-saini/e-commerce.git"
  );

  return (
    <motion.div
      className="flex flex-col scroll-mt-24 gap-20 pb-10"
      id="projects"
    >
      <div className="flex flex-col gap-5">
        <p className="text-[#7FE143] text-[30px]">Portfolio</p>
        <p className="sm:text-3xl text-xl font-medium">
          Selected Works 2022-2024
        </p>
      </div>

      <div className="w-full flex sm:flex-row flex-col items-center justify-between">
        <motion.div
          ref={ref}
          initial={{ x: -400 }} // Start position (left)
          animate={{ x: isInView ? 0 : -400 }} // End position (right when visible, left otherwise)
          transition={{ duration: 1 }} // Animation duration
          className="sm:w-1/2 w-full flex justify-center"
        >
          <Tilt className="h-[500px] sm:w-[70%] w-full">
            <Card title={title} image={image} tech={tech} link={link} />
          </Tilt>
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
              <motion.button
                onHoverStart={() => {
                  setimage(project.icon);
                  setTech(project.tech);
                  setTitle(project.name);
                  setLink(project.link);
                }}
                whileTap={{ scale: 0.8 }}
                className="flex flex-row justify-between w-full items-center"
              >
                <p className="sm:text-[24px] text-[18px] font-bold">
                  {project.name}
                </p>{" "}
                <p className="sn:text-[18px] text-[12px] font-bold text-zinc-400">
                  {project.domain}
                </p>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
