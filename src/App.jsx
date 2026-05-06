import React from "react";
import Header from "./components/Header";
import Portfolios from "./components/Portfolios";
import HeroSection from "./components/Herosection";
import TableSection from "./components/TableSection";
import FooterSection from "./components/FooterSection";


const App = () => {
  return (
    <div className="bg-white h-screen">
      <Header />
      <HeroSection />
      <Portfolios />
      <TableSection/>
      <FooterSection/>
    </div>
  );
};

export default App;
