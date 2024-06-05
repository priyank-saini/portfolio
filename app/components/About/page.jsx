"use client";

import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
  () => import('react-animated-numbers'),
  { ssr: false }  // This line is important. It disables server-side rendering for this module.
);

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { redirect } from 'next/dist/server/api-utils';

const achievement = [
  {
    metric: "Projects Complete",
    value: 20,
  },
  {
    metric: "Years Experience",
    value: 2,
  },
  {
    metric: "Clients Worldwide",
    value: 50,
  },
];

const Page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <section className='scroll-mt-24' id="about">
      <main className="flex sm:flex-row flex-col">
        {/* Left Side */}
        <motion.div
          ref={ref}
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={"transition"}
          className="sm:w-1/2 w-full"
        >
          <div className="flex flex-col gap-10">
            <p className="text-[30px] text-[#7FE143]">About Me</p>
            <p className="sm:text-[30px] text-[20px]">
              Consistently deliver exceptional quality work with precision and
              finesse
            </p>
            <div>
              <a target="_blank" className="px-5 py-3 fill-none border-2 sm:text-[24px] text-[20px]" href='https://drive.google.com/file/d/1HKt3qyoynw4JgQkdXEVCn2AREE7bw0WD/view?usp=drive_link'>Resume</a>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          ref={ref}
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={"transition"}
          className="sm:w-1/2 w-full sm:mt-[200px] pt-[50px]"
        >
          <p className="text-[15px] sm:text-[20px]">
            I am Priyank Saini, a seasoned Frontend Developer and UI/UX
            Designer, dedicated to crafting captivating digital experiences.
            With expertise in the latest technologies, I seamlessly blend
            creativity and functionality to deliver innovative solutions. My
            passion for design fuels my commitment to precision, ensuring every
            project exceeds expectations. Let&apos;s collaborate to transform ideas
            into visually stunning and user-friendly interfaces that leave a
            lasting impression.
          </p>
          <div className="flex flex-row items-center justify-center pt-12 gap-20">
            {achievement.map((achievements) => {
              return (
                <div
                  key={achievements.value}
                  className="flex flex-col justify-center items-center"
                >
                  <p className="sm:text-[70px] text-[25px] font-black flex flex-row">
                    <AnimatedNumbers
                      transitions={(index) => ({
                        type: "spring",
                        duration: index + 0.3,
                      })}
                      animateToNumber={achievements.value}
                    />{" "}
                    <span className="text-[#7FE143]">+</span>
                  </p>
                  <p className="sm:text-[24px] text-[12px] text-center">{achievements.metric}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </main>
    </section>
  );
};

export default Page;
