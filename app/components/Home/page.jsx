"use client";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

const page = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="navbar z-20 text-white py-10 px-20 flex justify-between text-[24px] fixed w-screen bg-black sm:visible"> {/*Navbar*/}
        {/* Left Part */}
        <div className="flex flex-row">
          <li className="flex flex-row gap-10 ">
            <ul><Link href="/">Home</Link></ul>
            <ul><Link href={"#about"}>About</Link></ul>
            <ul><Link href={"#experiences"}>Experiences</Link></ul>
            <ul><Link href={"#projects"}>Projects</Link></ul>
            <ul><Link href={"#contacts"}>Contacts</Link></ul>
          </li>
        </div>

        {/* Right Part */}
        <button className="fill-none border-2 px-3 py-2">
          <Link href="#footer">Get in touch</Link>
        </button>
      </div>

      <div className="h-full flex flex-col gap-10 pt-[150px]">

      <div className="px-[50px] sm:px-20 h-1/3">
        {/* <img src="./assets/background.png" alt="" className="object-cover w-full h-full rounded-[50px] border-white border-2"/> */}
        <video className="w-full h-full object-cover rounded-[50px]" autoPlay muted loop>
          <source src="./assets/touch.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex flex-col w-auto p-20 h-1/2">
        <p className="sm:text-5xl font-semibold text-[#7FE143] text-[25px]">Hi I&apos;m,</p>
        <p className="sm:text-[70px] font-black text-[25px]">
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Priyank Saini.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer.',
        1000,
        'UI/UX Designer.',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
          </p>
        <p className="text-[24px] pt-3">Welcome to my digital realm where creativity meets functionality, curated by Priyank Saini - Front-end Developer and UI/UX Designer extraordinaire.</p>
      </div>
      </div>

      
    </div>
  )
}

export default page