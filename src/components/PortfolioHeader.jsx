import React from "react";

const PortfolioHeader = () => {
  return (
    <div>
      <header className="flex items-center justify-between p-12">
        <div className="flex  justify-center  items-start  flex-col">
          <h1 className="text-sm font-light">Selected Work</h1>
          <h2 className="text-3xl">PORTFOLIO</h2>
        </div>
        <div className="-mb-4">01—06</div>
      </header>
    </div>
  );
};

export default PortfolioHeader;
