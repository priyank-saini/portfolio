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
    name: "REACT NATIVE MOBILE APP",
    domain: "FULL STACK",
    icon: "/assets/react_native.png",
    tech: ["React Native", "Native wind", "Expo"],
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
        <h1 className="font-black sm:text-[40px] text-[20px]">{title}</h1>
        <div className="flex flex-row am:gap-5 gap-2">
          {tech.map((skill, index) => {
            return (
              <p
                key={`${index}-${skill}`}
                className="font-semibold sm:text-[15px] text-[10px] px-2 py-1 border-2 border-gray-200 rounded-lg"
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

  const variants = {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  const variants2 = {
    initial: { x: +200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  const [image, setimage] = useState("/assets/travel.png");
  const [tech, setTech] = useState(["Next js", "Tailwind"]);
  const [title, setTitle] = useState("TRAVEL APP");
  const [link, setLink] = useState(
    "https://github.com/priyank-saini/travel-app.git"
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

      <div className="w-full flex sm:flex-row flex-col gap-10 items-center justify-between">
        <motion.div
          ref={ref}
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={"transition"}
          className="sm:w-1/2 w-full flex justify-center"
        >
          <Tilt className="h-[500px] sm:w-[70%] w-full">
            <Card title={title} image={image} tech={tech} link={link} />
          </Tilt>
        </motion.div>

        <motion.div
          ref={ref}
          variants={variants2}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={"transition"}
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
                onClick={() => {
                  setimage(project.icon);
                  setTech(project.tech);
                  setTitle(project.name);
                  setLink(project.link);
                }}
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
