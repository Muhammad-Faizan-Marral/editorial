import React from "react";
import { RiArrowRightLine } from "@remixicon/react";

const LeftHeroSec = () => {
  return (
    // Responsive width aur height adjust kiya
    <div className="min-h-screen w-full md:w-1/2 py-8 pr-4 md:pr-8 flex flex-col justify-center">
      <div>
        <button className="border-2 border-black px-4 h-[1.7rem] uppercase text-[15px] bg-[#f9fe01] mt-4 mb-4 font-bold">
          Illustration and design practice
        </button>
      </div>
      
      <div className="w-full pt-2 mb-6">
        {/* Font size ko mobile ke liye thoda chhota aur desktop ke liye same rakha */}
        <p className="bigFont text-5xl md:text-[74px] leading-tight md:leading-[1.1] font-black">
          WE SOLVE COMPLEX <br />
          COMMUNICATION <br /> CHALLENGES <br /> THROUGH PURE, UNCOMPLICATED
          DESIGN
        </p>
      </div>

      <div className="w-full md:w-3/4 mb-8">
        <p className="text-lg md:text-xl leading-snug">
          Editorial Commission Desk connects magazines, brands, and publishers
          with independent illustrators and visual strategists. Structured
          workflows. Bold outcomes.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-8">
        <button className="flex group items-center gap-3 border-2 border-black py-2 px-6 uppercase text-[15px] bg-[#f9fe01] hover:bg-white cursor-pointer font-bold">
          START A COMMISSION <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"><RiArrowRightLine size={16} /></span>
        </button>
        <button className="border-2 border-black py-2 px-6 uppercase text-[15px] text-white bg-[#000000] hover:text-black hover:bg-white cursor-pointer font-bold">
          VIEW WORK
        </button>
      </div>
      
      {/* Stats container ko bhi responsive banaya */}
      <div className="flex items-center w-full lg:w-2/3 mb-2">
        <div className="border-2 border-r-0 border-black w-1/3 flex items-center justify-center flex-col p-4 font-extrabold bg-white">
          <h3 className="num text-2xl md:text-3xl">150+</h3>
          <p className="text-[10px] tracking-wider">PROJECTS</p>
        </div>
        <div className="border-2 border-r-0 border-black w-1/3 flex items-center justify-center flex-col p-4 font-extrabold bg-white">
          <h3 className="num text-2xl md:text-3xl">48H</h3>
          <p className="text-[10px] tracking-wider">TURNAROUND</p>
        </div>
        <div className="border-2 border-black w-1/3 flex items-center justify-center flex-col p-4 font-extrabold bg-white">
          <h3 className="num text-2xl md:text-3xl">12</h3>
          <p className="text-[10px] tracking-wider">ARTISTS</p>
        </div>
      </div>
    </div>
  );
};

export default LeftHeroSec;