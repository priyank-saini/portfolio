"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };
  const contact = {
    gmail: "priyank_saini@yahoo.com",
    phone: "+91 8689031239",
    address: "The LNM Institute of Information Technology",
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={"transition"}
      className="flex flex-col gap-10 justify-center items-center pt-[200px] pb-2"
      id="contacts"
    >
      {/* Contact Section */}
      <div className="sm:w-[80%] w-full sm:h-[800px] rounded-lg sm:bg-zinc-900 px-[50px] sm:p-[50px] flex sm:flex-row flex-col justify-center">
        <div className="sm:w-1/2 w-full flex flex-col gap-10">
          <div className="flex flex-row gap-5">
            <p className="text-[40px] text-[#7FE143]">Collaboration</p>
            <img src="./assets/colab.svg" alt="" className="w-[40px]" />
          </div>
          <div className="sm:text-6xl text-3xl font-bold">Let’s talk to Collaboration</div>
          <div className="flex flex-col gap-10 pt-10">
            <p className="font-bold text-white sm:text-[20px] text-[18px] flex flex-row gap-3">
              <img src="./assets/mail.png" alt="" className="w-[30px]" />
              {contact.gmail}
            </p>
            <p className="font-bold text-white sm:text-[20px] text-[18px] flex flex-row gap-3">
            <img src="./assets/phone.png" alt="" className="w-[30px]" />
              {contact.phone}
            </p>
            <p className="font-bold text-white sm:text-[20px] text-[18px] flex flex-row gap-3">
            <img src="./assets/pin.png" alt="" className="w-[30px]" />
              {contact.address}
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full bg-[white] rounded-lg flex flex-col gap-10 p-10 sm:m-0 mt-20">
          <p className="sm:text-3xl text-xl font-bold text-black">I'm Interested in...</p>
          <div className="flex flex-wrap gap-5">
            <button className="px-[20px] py-[15px] rounded-md bg-[#449E0D] text-[20px] font-bold text-white">
              Development
            </button>
            <button className="px-[20px] py-[15px] rounded-md bg-[#449E0D] text-[20px] font-bold text-white">
              Graphic Design
            </button>
            <button className="px-[20px] py-[15px] rounded-md bg-[#449E0D] text-[20px] font-bold text-white">
              Design System
            </button>
            <button className="px-[20px] py-[15px] rounded-md bg-[#449E0D] text-[20px] font-bold text-white">
              UI/UX Design
            </button>
            <button className="px-[20px] py-[15px] rounded-md bg-[#449E0D] text-[20px] font-bold text-white">
              Other
            </button>
          </div>

          <form action="submit" className=" flex flex-col gap-10">
            <input
              type="text"
              placeholder="Your name"
              className="p-5 text-black font-semibold w-full"
            />
            <input
              type="email"
              placeholder="Your email"
              className="p-5 text-black font-semibold w-full"
            />
            <input
              type="text"
              placeholder="Your message"
              className="p-5 text-black font-semibold w-full"
            />
            <button
              type="submit"
              className="px-[20px] py-[15px] bg-[#449E0D] hover:bg-[#6db737] rounded-md font-bold sm:w-[40%] w-full text-[20px] flex flex-row gap-2 justify-center items-center"
            >
              
              Send Message
              <img src="./assets/paper-plane.png" alt="" className="h-[20px]" />
            </button>
          </form>
        </div>
      </div>

      <div className="sm:w-[80%] h-px bg-white"></div>

      <div className="flex sm:justify-between flex-col sm:flex-row gap-10 px-[50px]">
        <div className="sm:w-1/2 w-full flex flex-col gap-10">
          <p className="sm:text-[32px] text-[24px] font-semibold">
            Crafting digital experiences one pixel at a time, Web Development &
            UI/UX Design.
          </p>
          <p className="text-neutral-500 sm:text-[24px] text-[18px] font-semibold">
            Made with ♥ by Priyank Saini
          </p>
        </div>

        <div>
          <ul className="flex flex-col justify-center sm:items-end items-start sm:text-2xl text-lg gap-2">
            <ul>
              <a
                href="https://www.instagram.com/priyank___Saini/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </ul>
            <ul>
              <a
                href="https://github.com/priyank-saini"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </ul>
            <ul>
              <a
                href="https://twitter.com/Priyank__Saini"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </ul>
            <ul>
              <a
                href="https://www.linkedin.com/in/priyank-saini-a69507228/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </ul>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default footer;
