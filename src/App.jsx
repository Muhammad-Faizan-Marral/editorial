import React from "react";
import Header from "./components/Header";
import Portfolios from "./components/Portfolios";
import HeroSection from "./components/Herosection";


const App = () => {
  return (
    <div className="bg-white h-screen">
      <Header />
      <HeroSection />
      <Portfolios />
    </div>
  );
};

export default App;
