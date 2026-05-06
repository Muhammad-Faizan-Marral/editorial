import React from "react";
import { RiArrowRightLine } from "@remixicon/react";


const LeftHeroSec = () => {
  return (
    <div className="h-screen w-1/2 ">
      <div className="">
        <button className=" border-2 border-black  pl-4 pr-4  h-[1.7rem] leading-2.5 uppercase   text-[15px] bg-[#f9fe01] mt-4 mb-4">
          illustratioin and design practice
        </button>
      </div>
      <div className="h-[55%] w-full pt-2 ">
        <p className="bigFont text-[74px] ">
          WE SOLVE COMPLEX <br />
          COMMUNICATION <br /> CHALLENGES <br /> THROUGH PURE, UNCOMPLICATED
          DESIGN
        </p>
      </div>
      <div className="w-1/2 mb-5">
        <p className="text-xl leading-[1]">
          Editorial Commission Desk connects magazines, brands, and publishers
          with independent illustrators and visual strategists. Structured
          workflows. Bold outcomes.
        </p>
      </div>
      <div className="flex items-center gap-4 mb-5">
        <button className="flex group items-center gap-3 border-2 border-black  pt-2 pb-2 pr-6 pl-6   uppercase text-[15px] bg-[#f9fe01] hover:bg-white cursor-pointer  ">
          START A COMMISSION <span className="transition-transform duration-300 ease-in-out  group-hover:translate-x-2"><RiArrowRightLine size={12} /></span>
        </button>
        <button className="border-2 border-black  pt-2 pb-2 pr-6 pl-6   uppercase text-[15px] text-white bg-[#000000] hover:text-black hover:bg-white cursor-pointer  ">
          VIEW WORK
        </button>
      </div>
     
      <div className="flex items-center w-2/3 mb-2">
        <div className=" border-2 p-4  border-black w-1/3 flex items-center justify-center flex-col  font-extrabold ">
          <h3 className="num text-3xl ">150+</h3>
          <p className="text-[10px] ">PROJECTS</p>
        </div>
        <div className="border-2 p-4  border-black w-1/3 flex items-center justify-center flex-col">
          <h3 className="num text-3xl ">48H</h3>
          <p className="text-[10px] ">TURNAROUND</p>
        </div>
        <div className=" border-2 p-4  border-black w-1/3 flex items-center justify-center flex-col">
          <h3 className="num text-3xl  ">12</h3>
          <p className="text-[10px] ">ARTISTS</p>
        </div>
      </div>
    </div>
  );
};

export default LeftHeroSec;
