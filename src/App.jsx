import React from "react";
import Header from "./components/Header";
import Portfolios from "./components/Portfolios";
import HeroSection from "./components/Herosection";

import TableSection from "./components/TableSection";
import FooterSection from "./components/FooterSection";

import ApprochSection from "./components/ApprochSection";
import InquiryForm from "./components/InquiryForm";



const App = () => {
  return (
    <div className="bg-white h-screen">
      <Header />
      <HeroSection />
      <Portfolios />
      <ApprochSection/>
      <TableSection/>
      <InquiryForm/>
      <FooterSection/>
     </div>
  );
};

export default App;
