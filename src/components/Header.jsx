import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between bg-amber-900 ">
        <main className="flex items-center justify-between bg-amber-200">
            
       <div className=""> <h1 className="">EDITORIAL COMMISSION DESK</h1> </div>

          <div className="uppercase flex items-center  bg-amber-300 ">
            <a href="http://" className="border-l-2 border-black p-4">Work </a>
            <a href="http://" className="border-l-2 border-black p-4">Proces</a>
            <a href="http://" className="border-l-2 border-black p-4">Roster</a>
            <a href="http://" className="border-l-2 border-r-2 border-black p-4">Inquery</a>
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
