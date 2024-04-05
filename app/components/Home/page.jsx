"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const page = () => {
  return (
    <div className="flex flex-col justify-between scroll-mt-24">
      <div className="h-full flex flex-col gap-10">

        <div className="px-10 sm:px-20 h-1/3">
          {/* <img src="./assets/background.png" alt="" className="object-cover w-full h-full rounded-[50px] border-white border-2"/> */}
          <video
            className="w-full h-full object-cover rounded-[50px]"
            autoPlay
            muted
            loop
          >
            <source src="./assets/touch.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col w-auto px-10 h-1/2">
          <p className="sm:text-3xl font-semibold text-[#7FE143] text-[25px]">
            Hi I&apos;m,
          </p>
          <p className="sm:text-[50px] font-black text-[15px]">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Priyank Saini.",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer.",
                1000,
                "UI/UX Designer.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <p className="sm:text-[20px] text-[15px]">
            Welcome to my digital realm where creativity meets functionality,
            curated by Priyank Saini - Front-end Developer and UI/UX Designer
            extraordinaire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
