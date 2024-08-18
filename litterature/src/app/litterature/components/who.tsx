// src/components/who.tsx
import React, { useState, useEffect } from 'react';
import Pagination from "./pagination"

type WhoIsAnAddictProps = {
  textArray?: string[]; 
  onNextComponent?: () => void; 
};

const WhoIsAnAddict: React.FC<WhoIsAnAddictProps> = ({ textArray, onNextComponent }) => {

  const defaultTextArray = [
    "Who is an addict?",
    "Most of us do not have to think twice about this question. We know!",
    "Our whole life and thinking was centered in drugs in one form or another – the getting and using and finding ways and means to get more.",
    "We lived to use and used to live.",
    "Very simply, an addict is a man or woman whose life is controlled by drugs.",
    "We are people in the grip of a continuing and progressive illness whose ends are always the same: jails, institutions and death."
  ];
  return (
    <Pagination
      textArray={defaultTextArray}
      initialItemsPerPage={3}
      renderContent={(currentText) => (
        <div>
          {currentText.map((paragraph, index) => (
            <p key={index} className="mb-4 text-lg text-gray-800">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    />
  );
};
export default WhoIsAnAddict;
