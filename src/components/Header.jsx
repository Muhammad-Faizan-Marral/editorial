import React from "react";

const Header = () => {
  return (
    <div>
     <header className="flex items-center justify-between  ">
        <main className="flex items-center justify-between   h-[4rem]">
          <h1 className="cossette-texte-regular px-4 w-[20rem]  ">
            EDITORIAL COMMISSION DESK
          </h1>

          <div className="uppercase flex items-center justify-betweentext-center  text-sm font-black h-full pl-[2rem]">
            <div className="flex items-center justify-center  h-full w-full">
              <div className="border-l-3 border-black h-full"></div>
              <a
                href="http://"
                className=" hover:bg-yellow-500 flex items-center justify-center h-full w-36 "
              >
                Work
              </a>
            </div>

            <div className="flex items-center justify-center  h-full w-full">
              <div className="border-l-3 border-black h-full"></div>
              <a
                href="http://"
                className=" hover:bg-yellow-500 flex items-center justify-center h-full w-36 "
              >
                Process
              </a>
            </div>


            <div className="flex items-center justify-center  h-full w-full">
              <div className="border-l-3 border-black h-full"></div>
              <a
                href="http://"
                className=" hover:bg-yellow-500 flex items-center justify-center h-full w-36 "
              >
                roaster
              </a>
            </div>

            <div className="flex items-center justify-center  h-full w-full">
              <div className="border-l-3 border-black h-full"></div>
              <a
                href="http://"
                className=" hover:bg-yellow-500 flex items-center justify-center h-full w-36 "
              >
                inquery
              </a>
              <div className="border-l-3 border-black h-full"></div>
            </div>
          </div>
        </main>

        <div className="">
          <button className=" border-2 border-black mr-6 pl-4 pr-4 font-bold h-[2rem] leading-0.5 uppercase font-mono tracking-tighter  text-sm bg-[#f9fe01] hover:bg-white cursor-pointer">log in</button>
        </div>
    
      </header>
    </div>
  );
};

export default Header;
