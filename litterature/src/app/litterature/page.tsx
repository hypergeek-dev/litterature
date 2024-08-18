// src/app/litterature/page.tsx
"use client";

import { useState } from "react";
import TwelveTraditions from "./components/12trad";
import SpiritualJourney from "./components/spiritual";
import HowItWorks from "./components/how";
import WeDoRecover from "./components/wedo";
import WhatIsNaProgram from "./components/what";
import WhoIsAnAddict from "./components/who";

export default function Litterature() {
  const [currentPage, setCurrentPage] = useState(0);

  const components = [
    <WhoIsAnAddict />, 
    <WhatIsNaProgram />,
    <HowItWorks />,
    <TwelveTraditions />,
    <WeDoRecover />,
    <SpiritualJourney />
  ];

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage < components.length - 1 ? prevPage + 1 : 0
    );
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) =>
      prevPage > 0 ? prevPage - 1 : components.length - 1
    );
  };

  return (
    <div>
      {components[currentPage]}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext} style={{ marginLeft: "10px" }}>
          Next
        </button>
      </div>
    </div>
  );
}
