"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar z-20 h-[80px] text-white px-20 flex items-center justify-between text-[24px] w-full bg-black sm:visible sticky top-0">
      {/*Navbar*/}
      {/* Left Part */}
      <div className="flex flex-row">
        <li className="flex flex-row gap-10 text-[20px]">
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
      </div>
      {/* Right Part */}
      <motion.button whileHover={{ scale: 1.1 }}>
        <Link href="#footer" className="text-[20px]">
          Get in touch
        </Link>
      </motion.button>
    </div>
  );
};

export default Navbar;
