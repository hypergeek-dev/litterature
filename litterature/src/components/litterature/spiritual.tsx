import React, { useState, useEffect } from 'react';

const SpiritualJourney: React.FC = () => {
  const textArray = [
    "A Spiritual Journey",
    "We each find a way to surrender, but that does not mean we all come to believe in God. Many of our members have been clean for years as atheists. For some of us, coming to believe that NA can accommodate our atheism has itself been a leap of faith. We are welcome no matter what we believe. NA has no opinion on how our members define or practice spirituality. Our individual challenge is to find a definition of spirituality that makes sense to us. By listening carefully and with an open mind to a range of members’ opinions and experiences, we form our own understanding that we can use in our own recovery."
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1); // Only one item per page for the new text

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 600) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 900) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(1);
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
    <h1>A Spiritual Journey</h1>
    <SpiritualJourney />
  </div>
);

export default App;
