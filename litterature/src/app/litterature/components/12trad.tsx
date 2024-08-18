import React, { useState, useEffect } from 'react';

const TwelveTraditions: React.FC = () => {
  const textArray = [
    "The Twelve Traditions of NA",
    "We keep what we have only with vigilance, and just as freedom for the individual comes from the Twelve Steps, so freedom for the group springs from our traditions.",
    "As long as the ties that bind us together are stronger than those that would tear us apart, all will be well.",
    "1. Our common welfare should come first; personal recovery depends on NA unity.",
    "2. For our group purpose there is but one ultimate authority – a loving God as He may express Himself in our group conscience. Our leaders are but trusted servants; they do not govern.",
    "3. The only requirement for membership is a desire to stop using.",
    "4. Each group should be autonomous except in matters affecting other groups or NA as a whole.",
    "5. Each group has but one primary purpose – to carry the message to the addict who still suffers.",
    "6. An NA group ought never endorse, finance, or lend the NA name to any related facility or outside enterprise, lest problems of money, property, or prestige divert us from our primary purpose.",
    "7. Every NA group ought to be fully self‑supporting, declining outside contributions.",
    "8. Narcotics Anonymous should remain forever nonprofessional, but our service centres may employ special workers.",
    "9. NA, as such, ought never be organised, but we may create service boards or committees directly responsible to those they serve.",
    "10. Narcotics Anonymous has no opinion on outside issues; hence the NA name ought never be drawn into public controversy.",
    "11. Our public relations policy is based on attraction rather than promotion; we need always maintain personal anonymity at the level of press, radio, and films.",
    "12. Anonymity is the spiritual foundation of all our Traditions, ever reminding us to place principles before personalities."
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
        The Twelve Traditions of NA
      </h1>
      <div className="m-8">
        {currentText.map((paragraph, index) => (
          <p key={index} className="mb-4 text-lg text-800">
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
    <TwelveTraditions />
  </div>
);

export default TwelveTraditions;
