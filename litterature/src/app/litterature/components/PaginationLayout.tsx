import React from 'react';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';

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
  nextComponentLabel,
}) => {
  return (
    <div className="flex flex-col p-2 box-border">
      <h1 className="text-center mb-5 text-em font-bold">{title}</h1>
      <div className="flex-1">
        {currentText.map((paragraph, index) => (
          <p key={index} className="mb-2 text-em">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={onClickPrevious}
          disabled={currentPage === 1}
          className="px-0.5 py-0.5 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
        >
          <FaArrowLeft />
        </button>
        <span className="text-em">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage === totalPages ? (
          <button
            onClick={onProceed}
            className="px-0.5 py-0.5 bg-blue-500 text-white rounded"
          >
            <FaCheck /> {nextComponentLabel}
          </button>
        ) : (
          <button
            onClick={onClickNext}
            className="px-0.5 py-0.5 bg-gray-300 text-gray-800 rounded"
          >
            <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default PaginationLayout;
