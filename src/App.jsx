import React from "react";
import Header from "./components/Header";
import Portfolios from "./components/Portfolios";
import HeroSection from "./components/Herosection";
import ApprochSection from "./components/ApprochSection";
import InquiryForm from "./components/InquiryForm";


const App = () => {
  return (
    <div className="bg-white h-screen">
      <Header />
      <HeroSection />
      <Portfolios />
      <ApprochSection/>
      <InquiryForm/>
    </div>
  );
};

export default App;
