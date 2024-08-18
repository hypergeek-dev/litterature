import React, { useState, useEffect } from 'react';

interface PaginationProps {
  textArray: string[];
  initialItemsPerPage: number;
  onProceed?: () => void; // Optional callback for proceeding
  renderContent: (currentText: string[]) => JSX.Element;
}

const Pagination: React.FC<PaginationProps> = ({
  textArray,
  initialItemsPerPage,
  onProceed,
  renderContent
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 600) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 900) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(initialItemsPerPage);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, [initialItemsPerPage]);

  const title = textArray[0]; // Extract the title
  const contentArray = textArray.slice(1); // Exclude the title from the paginated content
  const totalPages = Math.ceil(contentArray.length / itemsPerPage);
  const currentText = contentArray.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    } else {
      handleProceed(); // Calls the internal proceed logic
    }
  };

  const handleClickPrevious = () => {
    setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handleProceed = () => {
    if (onProceed) {
      onProceed(); // Call the passed onProceed function if provided
    } else {
      console.log("Proceeding to the next component...");
      // Default behavior if no onProceed callback is provided
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        {title}
      </h1>
      <div className="m-8">
        {renderContent(currentText)}
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
            {currentPage === totalPages ? 'Finish' : 'Next'}
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

export default Pagination;
