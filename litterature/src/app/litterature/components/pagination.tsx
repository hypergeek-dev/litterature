import React, { useState, useEffect, useCallback } from 'react';
import PaginationLayout from './PaginationLayout';

interface PaginationControlsProps {
  textArray: string[];
  initialItemsPerPage?: number;
  onProceed?: () => void;
  nextComponentLabel?: string;
}

const Pagination: React.FC<PaginationControlsProps> = ({
  textArray,
  initialItemsPerPage = 4, 
  onProceed,
  nextComponentLabel = "Next Component",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const calculateItemsPerPage = useCallback(() => {
    let baseItemsPerPage = initialItemsPerPage;

    // Adjust based on screen size
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      baseItemsPerPage = 3; 
    } else if (screenWidth < 900) {
      baseItemsPerPage = 6; 
    } else {
      baseItemsPerPage = 8; 
    }

    setItemsPerPage(baseItemsPerPage);
  }, [initialItemsPerPage]);

  useEffect(() => {
    calculateItemsPerPage();
    window.addEventListener('resize', calculateItemsPerPage);

    return () => window.removeEventListener('resize', calculateItemsPerPage);
  }, [calculateItemsPerPage]);

  const title = textArray[0]; 
  const contentArray = textArray.slice(1); 
  const totalPages = Math.ceil(contentArray.length / itemsPerPage);


  const currentText = contentArray.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    } else {
      handleProceed();
    }
  };

  const handleClickPrevious = () => {
    setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handleProceed = () => {
    if (onProceed) {
      onProceed();
    } else {
      console.log("Proceeding to the next text...");
    }
  };

  return (
    <PaginationLayout
      title={currentPage === 1 ? title : ""} 
      currentText={currentText}
      currentPage={currentPage}
      totalPages={totalPages}
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      onProceed={handleProceed}
      nextComponentLabel={nextComponentLabel}
    />
  );
};

export default Pagination;
