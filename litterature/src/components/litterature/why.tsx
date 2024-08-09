import React, { useState, useEffect } from 'react';

const WhyAreWeHere: React.FC = () => {
  const textArray = [
    "Why are we here?",
    "Before coming to the Fellowship of NA, we could not manage our own lives.",
    "We could not live and enjoy life as other people do.",
    "We had to have something different and we thought we had found it in drugs.",
    "We placed their use ahead of the welfare of our families, our wives, husbands, and our children.",
    "We had to have drugs at all costs.",
    "We did many people great harm, but most of all we harmed ourselves.",
    "Through our inability to accept personal responsibilities we were actually creating our own problems.",
    "We seemed to be incapable of facing life on its own terms.",
    "Most of us realised that in our addiction we were slowly committing suicide, but addiction is such a cunning enemy of life that we had lost the power to do anything about it.",
    "Many of us ended up in jail, or sought help through medicine, religion, and psychiatry.",
    "None of these methods was sufficient for us.",
    "Our disease always resurfaced or continued to progress until in desperation, we sought help from each other in Narcotics Anonymous.",
    "After coming to NA we realised we were sick people.",
    "We suffered from a disease from which there is no known cure.",
    "It can, however, be arrested at some point, and recovery is then possible."
  ];

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

const App: React.FC = () => (
  <div>
    <h1>Why are we here?</h1>
    <WhyAreWeHere />
  </div>
);

export default App;
