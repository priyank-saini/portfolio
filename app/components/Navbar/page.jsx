"use client";

import { React, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="navbar w-full">
      {/* Navbar for larger screens */}
      <div className="container mx-auto z-20 h-[80px] px-20 text-white flex items-center justify-between text-[24px] bg-black/80 backdrop-blur-md fixed left-0 right-0 rounded-lg border-b border-white/10">
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
        <div className="lg:hidden flex flex-row justify-between items-center w-full">
          <h1 className="text-[30px] font-bold text-white">Portfolio</h1>
          <buttons
            onClick={handleOpen}
            aria-label="Toggle Menu"
            className="lg:hidden"
          >
            <Image
              src={`/assets/${isOpen ? "close.png" : "menu.png"}`}
              alt="menu"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </buttons>
        </div>
      </div>

      {/* Dropdown Menu for mobile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:hidden z-20 fixed top-[80px] flex-col gap-8 items-center justify-center w-full bg-gradient-to-b from-black/95 to-zinc-900/95 backdrop-blur-md p-8 border-b border-white/10`}
      >
        <ul className="flex flex-col gap-8 text-[20px] items-center w-full">
          <motion.li
            whileHover={{ scale: 1.1, x: 10 }}
            className="w-full text-center py-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, x: 10 }}
            className="w-full text-center py-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Link href="#about">About</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, x: 10 }}
            className="w-full text-center py-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Link href="#experiences">Experiences</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, x: 10 }}
            className="w-full text-center py-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Link href="#projects">Projects</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, x: 10 }}
            className="w-full text-center py-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Link href="#contacts">Contacts</Link>
          </motion.li>
        </ul>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
        >
          <Link href="#contacts" className="text-[20px]">
            Get in touch
          </Link>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Navbar;
