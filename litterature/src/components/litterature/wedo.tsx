import React, { useState, useEffect } from 'react';

const WeDoRecover: React.FC = () => {
  const textArray = [
    "We Do Recover",
    "When at the end of the road we find that we can no longer function as a human being, either with or without drugs, we all face the same dilemma.",
    "What is there left to do? There seems to be this alternative: either go on as best we can to the bitter ends—jails, institutions or death—or find a new way to live.",
    "In years gone by, very few addicts ever had this last choice.",
    "Those who are addicted today are more fortunate.",
    "For the first time in man’s entire history, a simple way has been proving itself in the lives of many addicts.",
    "It is available to us all.",
    "This is a simple spiritual—not religious—program, known as Narcotics Anonymous."
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
    <h1>We Do Recover</h1>
    <WeDoRecover />
  </div>
);

export default App;
