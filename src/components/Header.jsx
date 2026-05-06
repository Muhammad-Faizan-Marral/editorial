import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import React, { useState } from "react";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  console.log(isToggle);

  return (
    <div>
      <header className="block md:flex items-center justify-between md:flex-row sm:flex-col " >

        <main className=" items-center justify-between w-[80%] h-[4rem]   hidden md:flex">
          <h1 className="text-xl px-4 w-[20rem]  ">
            EDITORIAL COMMISSION DESK
          </h1>
          <div className="uppercase flex items-center justify-between text-center text-sm h-full pl-[3.5rem] w-full">
            <div className="flex items-center justify-center h-full flex-1 min-w-0">
              <div className="border-l-[3px] border-black h-full"></div>
              <a
                href="#"
                className="hover:bg-[#f9fe01] flex items-center justify-center h-full w-full transition-colors"
              >
                Work
              </a>
            </div>

            <div className="flex items-center justify-center h-full flex-1 min-w-0">
              <div className="border-l-[3px] border-black h-full"></div>
              <a
                href="#"
                className="hover:bg-[#f9fe01] flex items-center justify-center h-full w-full transition-colors"
              >
                Process
              </a>
            </div>

            <div className="flex items-center justify-center h-full flex-1 min-w-0">
              <div className="border-l-[3px] border-black h-full"></div>
              <a
                href="#"
                className="hover:bg-[#f9fe01] flex items-center justify-center h-full w-full transition-colors"
              >
                roaster
              </a>
            </div>

            <div className="flex items-center justify-center h-full flex-1 min-w-0">
              <div className="border-l-[3px] border-black h-full"></div>
              <a
                href="#"
                className="hover:bg-[#f9fe01] flex items-center justify-center h-full w-full transition-colors"
              >
                inquery
              </a>
              <div className="border-l-[3px] border-black h-full"></div>
            </div>
          </div>
        </main>

        {/* ResponsiveMain */}
        <div className="h-[4rem] flex items-center justify-between w-screen px-4 sm:flex md:hidden">
          <h1>ECD</h1>
          <div
            className="cursor-pointer"
            onClick={() => setIsToggle(!isToggle)}
          >
            {isToggle ? <RiCloseLine /> : <RiMenuLine />}
          </div>
        </div>

        {isToggle && (
          <div class=" w-screen block md:hidden bg-white border-t-[3px] border-black">
            <nav>
              <button class="w-full text-left px-6 py-4 border-b-[3px] border-black font-oswald text-lg font-semibold uppercase hover:bg-[#F9FF00] transition-colors">
                WORK
              </button>
              <button class="w-full text-left px-6 py-4 border-b-[3px] border-black font-oswald text-lg font-semibold uppercase hover:bg-[#F9FF00] transition-colors">
                PROCESS
              </button>
              <button class="w-full text-left px-6 py-4 border-b-[3px] border-black font-oswald text-lg font-semibold uppercase hover:bg-[#F9FF00] transition-colors">
                ROSTER
              </button>
              <button class="w-full text-left px-6 py-4 border-b-[3px] border-black font-oswald text-lg font-semibold uppercase hover:bg-[#F9FF00] transition-colors">
                INQUIRY
              </button>
            </nav>

            <div class="px-6 py-4">
              <a
                href="/api/oauth/authorize"
                class="block text-center text-sm py-3 font-bold uppercase tracking-wider bg-[#F9FF00] border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
              >
                LOG IN
              </a>
            </div>
          </div>
        )}

        <div className=" hidden sm:hidden md:block">
          <button className=" border-2 border-black mr-8 pl-4 pr-4 font-bold h-[2rem] leading-0.5 uppercase font-mono tracking-tighter  text-sm bg-[#f9fe01] hover:bg-white cursor-pointer">
            log in
          </button>
        </div>

      </header>
    </div>
  );
};

export default Header;
