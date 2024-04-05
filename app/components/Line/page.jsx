"use client";

import { useEffect } from "react";

const Lines = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    function addAnimation() {
      scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);
      });
    }

    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  return (
    <div className="flex flex-col whitespace-nowrap overflow-hidden">
      <ul className="scroller sm:text-[50px] text-[20px] font-extrabold flex flex-row sm:gap-20 gap-5 list-disc" style={{animation: "scroll 20s linear infinite"}}>
        <li>USER RESEARCH</li>
        <li>UI DESIGN</li>
        <li>PROTOTYPING</li>
        <li>INFORMATION ARCHITECTURE</li>
      </ul>
      <ul className="sm:text-[50px] text-[20px] text-[#7FE143] justify-end font-extrabold flex flex-row sm:gap-20 gap-5 list-disc" style={{animation: "scrollrev 20s linear infinite"}}>
        <li>HTML/CSS</li>
        <li>JAVASCRIPT</li>
        <li>RESPONSIVE DESIGN</li>
        <li>BACKEND DEVELOPMENT</li>
      </ul>
    </div>
  );
};

export default Lines;
