import React from 'react';

interface PaginationLayoutProps {
  title: string;
  currentText: string[];
  currentPage: number;
  totalPages: number;
  onClickPrevious: () => void;
  onClickNext: () => void;
  onProceed: () => void;
  nextComponentLabel: string;
}

const PaginationLayout: React.FC<PaginationLayoutProps> = ({
  title,
  currentText,
  currentPage,
  totalPages,
  onClickPrevious,
  onClickNext,
  onProceed,
  nextComponentLabel
}) => {
  return (
    <div className="p-2 md:p-4 lg:p-6">
      <h1 className="font-bold text-center mb-4 text-xl md:text-2xl lg:text-4xl">{title}</h1>
      <div>
        {currentText.map((paragraph, index) => (
          <p key={index} className="text-base p-1 md:text-lg lg:text-3xl text-white-800">{paragraph}</p>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-3">
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={onClickPrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-base md:text-lg lg:text-xl">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={onClickNext}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
          >
            {currentPage === totalPages ? nextComponentLabel : 'Next'}
          </button>
        </div>
        {currentPage === totalPages && (
          <button
            onClick={onProceed}
            className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
          >
            {nextComponentLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default PaginationLayout;
