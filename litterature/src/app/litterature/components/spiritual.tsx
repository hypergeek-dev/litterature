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
        A Spiritual Journey
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
    <SpiritualJourney />
  </div>
);

export default SpiritualJourney;
