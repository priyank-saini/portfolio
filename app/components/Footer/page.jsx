"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [StateMap, seStateMap] = useState([false, false, false, false, false]);
  function onTap(index) {
    const newarray = [...StateMap];
    newarray[index] = !newarray[index];
    seStateMap(newarray);
  }

  const buttons = [
    "Development",
    "UI/UX",
    "Graphic Design",
    "Design Systems",
    "Other",
  ];

  //  const buttonMap ={
  //   "Development": "UI/UX", "Graphic Design", "Design Systems", "Other"
  //  }

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_exzxj4q", "template_2rvfdcb", form.current, {
        publicKey: "5p-BvfwrTb8f2Bm9t",
      })
      .then(
        () => {
          console.log("SUCCESS! Message Sent");
          window.alert("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
          window.alert("Error: Message not Sent");
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={"transition"}
      className="flex flex-col gap-10 justify-center scroll-mt-24 items-center pb-2 px-20"
      id="contacts"
    >
      {/* Contact Section */}
      <div className="w-full sm:h-[600px] rounded-lg sm:bg-zinc-900 px-[50px] sm:p-[50px] flex sm:flex-row flex-col justify-center">
        <div className="sm:w-1/2 w-full flex flex-col gap-10">
          <div className="flex flex-row gap-5">
            <p className="text-[30px] text-[#7FE143]">Collaboration</p>
            <img src="./assets/colab.svg" alt="" className="w-[30px]" />
          </div>
          <div className="sm:text-4xl text-3xl font-bold">
            Let&apos;s talk to Collaboration
          </div>
          <div className="flex flex-col gap-10 pt-10">
            <p className="font-bold text-white sm:text-[18px] text-[12px] flex flex-row gap-3">
              <img src="./assets/mail.png" alt="" className="w-[30px]" />
              {contact.gmail}
            </p>
            <p className="font-bold text-white sm:text-[18px] text-[12px] flex flex-row gap-3">
              <img src="./assets/phone.png" alt="" className="w-[30px]" />
              {contact.phone}
            </p>
            <p className="font-bold text-white sm:text-[18px] text-[12px] flex flex-row gap-3">
              <img src="./assets/pin.png" alt="" className="w-[30px]" />
              {contact.address}
            </p>
          </div>
        </div>

        <form
          className="sm:w-1/2 w-auto bg-[white] rounded-lg flex flex-col p-5 sm:m-0 mt-20 justify-between"
          ref={form}
          action="submit"
          onSubmit={sendEmail}
        >
          <p className="sm:text-lg text-xl font-bold text-black">
            I&apos;m Interested in...
          </p>
          <div className="flex flex-wrap gap-5">
            {buttons.map((item, index) => (
              <motion.div
                key={item}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  onTap(index);
                }}
                className={`text-sm cursor-pointer ${
                  StateMap[index]
                    ? "bg-[#7FE143] text-white border-2 border-white"
                    : "bg-[white] text-zinc-600 border-2 border-zinc-600"
                }
              px-[20px] py-[10px] font-bold rounded-md
              `}
              >
                {item}
              </motion.div>
            ))}
          </div>
          <input
            required
            type="text"
            placeholder="Your name"
            name="user_name"
            className="p-3 text-black font-semibold w-full outline-none border-b border-zinc-300"
          />
          <input
            required
            type="email"
            placeholder="Your email"
            name="user_email"
            className="p-3 text-black font-semibold w-full outline-none border-b border-zinc-300"
          />
          <input
            required
            type="text"
            placeholder="Your message"
            name="message"
            className="p-3 text-black font-semibold w-full outline-none border-b border-zinc-300"
          />
          <button
            type="submit"
            className="px-[20px] py-[10px] bg-[#7FE143] hover:bg-[#90e851] rounded-md font-bold sm:w-[40%] w-full flex flex-row gap-2 justify-center items-center"
          >
            Send Message
            <img src="./assets/paper-plane.png" alt="" className="h-[20px]" />
          </button>
        </form>
      </div>

      <div className="sm:w-[100%] h-px bg-white"></div>

      <div className="flex w-full sm:justify-between flex-col sm:flex-row gap-10 px-[50px]">
        <div className="sm:w-1/2 w-full flex flex-col gap-10">
          <p className="sm:text-[24px] text-[18px] font-semibold">
            Crafting digital experiences one pixel at a time, Web Development &
            UI/UX Design.
          </p>
          <p className="text-neutral-500 sm:text-[18px] text-[12px] font-semibold">
            Made with ♥ by Priyank Saini
          </p>
        </div>

        <div>
          <ul className="flex flex-col justify-center sm:items-end items-start sm:text-xl text-md gap-2">
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

export default Footer;
