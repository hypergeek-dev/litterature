import React, { useState, useEffect } from 'react';

type WhatIsNaProgramProps = {
  textArray: string[];
};

const WhatIsNaProgram: React.FC<WhatIsNaProgramProps> = ({ textArray }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 600) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 900) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(textArray.length / itemsPerPage);

  const handleClickNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handleClickPrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const currentText = textArray.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div>
        {currentText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="pagination-controls">
        <button onClick={handleClickPrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleClickNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

const textArray = [
  "Who is an addict?",
  "Most of us do not have to think twice about this question. We know!",
  "Our whole life and thinking was centered in drugs in one form or another – the getting and using and finding ways and means to get more.",
  "We lived to use and used to live.",
  "Very simply, an addict is a man or woman whose life is controlled by drugs.",
  "We are people in the grip of a continuing and progressive illness whose ends are always the same: jails, institutions and death."
];

const App: React.FC = () => (
  <div>
    <h1>What is the NA Program?</h1>
    <WhatIsNaProgram textArray={textArray} />
  </div>
);

export default App;
