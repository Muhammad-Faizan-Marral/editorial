import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between bg-amber-900 ">
        <main className="flex items-center justify-between bg-amber-200">
            
       <div> <h1 className="cossette-texte-regular px-4 font-bold">EDITORIAL COMMISSION DESK</h1> </div>

          <div className="uppercase flex items-center  bg-amber-300 ">
            <a href="http://" className="border-l-2 border-black p-4">Work </a>
            <a href="http://" className="border-l-2 border-black p-4">Proces</a>
            <a href="http://" className="border-l-2 border-black p-4">Roster</a>
            <a href="http://" className="border-l-2 border-r-2 border-black p-4">Inquery</a>
          </div>



        </main>

        <div>
          <button className="p-4 border-2 border-black mr-6 ">login</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
