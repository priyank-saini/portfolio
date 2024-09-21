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
    <section className="navbar w-full">
      {/* Navbar for larger screens */}
      <div className="container mx-auto z-20 h-[80px] px-20 text-white flex items-center justify-between text-[24px] bg-black fixed left-0 right-0 rounded-lg">
        {/* Left Part */}
        <div className="flex lg:gap-10">
          <ul className="hidden lg:flex flex-row gap-10 text-[20px]">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link href="/">Home</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link href="#about">About</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link href="#experiences">Experiences</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link href="#projects">Projects</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link href="#contacts">Contacts</Link>
            </motion.li>
          </ul>
        </div>

        {/* Right Part */}
        <motion.button whileHover={{ scale: 1.1 }} className="hidden lg:block">
          <Link href="#contacts" className="text-[20px]">
            Get in touch
          </Link>
        </motion.button>

        {/* Hamburger Menu for mobile screens */}
        <button
          onClick={handleOpen}
          aria-label="Toggle Menu"
          className="lg:hidden"
        >
          <img
            src={`./assets/${isOpen ? "close.png" : "menu.png"}`}
            alt="menu"
            className="w-[40px] h-[40px] cursor-pointer"
          />
        </button>
      </div>

      {/* Dropdown Menu for mobile */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:hidden z-20 fixed top-[80px] flex-col gap-5 items-center justify-center w-full bg-zinc-900 p-5`}
      >
        <ul className="flex flex-col gap-5 text-[20px] items-center w-full">
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="#about">About</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="#experiences">Experiences</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="#projects">Projects</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="#contacts">Contacts</Link>
          </motion.li>
        </ul>

        <motion.button whileHover={{ scale: 1.1 }}>
          <Link href="#contacts" className="text-[20px]">
            Get in touch
          </Link>
        </motion.button>
      </div>
    </section>
  );
};

export default Navbar;
