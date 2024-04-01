"use client";

const Lines = () => {
  const scrollers = document.querySelectorAll(".scroller");

  if(!window.matchMedia("(prefers-recuded-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach(scroller => {
      scroller.setAttribute('data-animated', true);
    });
  }


  return (
    <div className="pt-20 whitespace-nowrap overflow-hidden">
      <ul className="scroller sm:text-[80px] text-[40px] font-extrabold flex flex-row gap-20 list-disc" style={{animation: "scroll 20s linear infinite"}}>
        <li>USER RESEARCH</li>
        <li>UI DESIGN</li>
        <li>PROTOTYPING</li>
        <li>INFORMATION ARCHITECTURE</li>
      </ul>
    </div>
  );
};

export default Lines;
