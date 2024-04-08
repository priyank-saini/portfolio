"use client";

import { React, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="navbar">
      <div className="z-20  h-[80px] w-full pr-40 text-white flex items-center justify-between text-[24px] bg-black sm:visible fixed">
        {/*Navbar*/}
        {/* Left Part */}
        <div className="flex  flex-row">
          <li className="flex flex-row gap-10 text-[20px]">
            <motion.ul whileHover={{ scale: 1.1 }} whileTap={{scale: 0.8}}>
              <Link href="/">Home</Link>
            </motion.ul>
            <motion.ul whileHover={{ scale: 1.1 }} whileTap={{scale: 0.8}} >
              <Link href={"#about"}>About</Link>
            </motion.ul>
            <motion.ul whileHover={{ scale: 1.1 }} whileTap={{scale: 0.8}}>
              <Link href={"#experiences"}>Experiences</Link>
            </motion.ul>
            <motion.ul whileHover={{ scale: 1.1 }} whileTap={{scale: 0.8}}>
              <Link href={"#projects"}>Projects</Link>
            </motion.ul>
            <motion.ul whileHover={{ scale: 1.1 }} whileTap={{scale: 0.8}}>
              <Link href={"#contacts"}>Contacts</Link>
            </motion.ul>
          </li>
        </div>
        {/* Right Part */}
        <motion.button whileHover={{ scale: 1.1 }}>
          <Link href="#contacts" className="text-[20px]">
            Get in touch
          </Link>
        </motion.button>
      </div>

      <div>
        {/* Dropdown Menu */}
        <div className="dropdown z-20 flex flex-col gap-5 text-[20px] pt-[100px]">
          <button onClick={handleOpen} className="fixed top-5 right-5">
            <img
              src={`./assets/${isOpen ? "close.png" : "menu.png"}`}
              alt="menu"
              className="w-[40px] h-[40px] cursor-pointer"
            />
          </button>
          <div className={`${isOpen ? "flex" : "hidden"} z-20 fixed flex-col gap-5 items-center justify-center w-[80%] bg-zinc-900 rounded-md p-5`}>
            <li className="flex flex-col gap-5 text-[20px] items-center w-full">
              <motion.ul whileHover={{ scale: 1.1 }}>
                <Link href="/">Home</Link>
              </motion.ul>
              <motion.ul whileHover={{ scale: 1.1 }}>
                <Link href={"#about"}>About</Link>
              </motion.ul>
              <motion.ul whileHover={{ scale: 1.1 }}>
                <Link href={"#experiences"}>Experiences</Link>
              </motion.ul>
              <motion.ul whileHover={{ scale: 1.1 }}>
                <Link href={"#projects"}>Projects</Link>
              </motion.ul>
              <motion.ul whileHover={{ scale: 1.1 }}>
                <Link href={"#contacts"}>Contacts</Link>
              </motion.ul>
            </li>
            <motion.button whileHover={{ scale: 1.1 }}>
              <Link href="#contacts" className="text-[20px]">
                Get in touch
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
