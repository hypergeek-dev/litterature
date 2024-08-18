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
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else {
      // Implement the logic to proceed to the next component or stage here
      console.log("Proceeding to the next component...");
    }
  };

  const handleClickPrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const currentText = textArray.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        We Do Recover
      </h1>
      <div className="m-8">
        {currentText.map((paragraph, index) => (
          <p key={index} className="mb-4 text-lg text-gray-800">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={handleClickPrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleClickNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
          >
            {currentPage === totalPages ? 'Next' : 'Next'}
          </button>
        </div>
        {currentPage === totalPages && (
          <button
            onClick={handleClickNext}
            className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
          >
            Proceed to Next Component
          </button>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <div>
    <WeDoRecover />
  </div>
);

export default WeDoRecover;
