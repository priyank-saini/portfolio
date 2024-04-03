"use client";
import { useRef } from "react";
import {motion, useInView} from "framer-motion";


const Page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    initial: {y:50, opacity:0},
    animate: {y:0, opacity:1},
    transition:{duration: 0.9},
  }

  return (
    <motion.div className='flex flex-col pl-20 justify-center items-start sm:items-center w-full gap-10'>
        <p className='text-[40px] text-[#7FE143]'>My Proficiences</p>
        <p className='text-[24px] w-2/3 text-left sm:text-center' >Proficient in cutting-edge technologies, equipped with the latest tools and frameworks to deliver innovative front-end solutions and captivating user experiences.</p>
        <div className='flex flex-row w-full sm:w-[90%] justify-start sm:justify-center items-start'>
          <div className='w-[15%] h-[5rem] fill-none border-2 flex justify-center items-center'>
            <img src="/assets/nextjs.png" alt="nextjs" className='w-20 justify-center items-center'/>
          </div>
          <div className='w-[15%] h-[5rem] fill-none border-2 flex justify-center items-center'>
          <img src="/assets/Nodejs.png" alt="nextjs" className='w-20 justify-center items-center'/>
          </div>
          <div className='w-[15%] h-[5rem] fill-none border-2 flex justify-center items-center'>
          <img src="/assets/Figma.png" alt="nextjs" className='w-12 justify-center items-center'/>
          </div>
          <div className='w-[15%] h-[5rem] fill-none border-2 flex justify-center items-center'>
          <img src="/assets/react.png" alt="nextjs" className='w-12 justify-center items-center'/>
          </div>
          <div className='w-[15%] h-[5rem] fill-none border-2 flex justify-center items-center'>
          <img src="/assets/mongoDB.png" alt="nextjs" className='w-20 justify-center items-center'/>
          </div>
        </div>
    </motion.div>
  )
}

export default Page
