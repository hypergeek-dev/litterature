import React from 'react';
import Pagination from "./pagination"; 
const SpiritualJourney: React.FC = () => {
  const textArray = [
    "A Spiritual Journey",
    "We each find a way to surrender, but that does not mean we all come to believe in God. Many of our members have been clean for years as atheists. For some of us, coming to believe that NA can accommodate our atheism has itself been a leap of faith. We are welcome no matter what we believe. NA has no opinion on how our members define or practice spirituality. Our individual challenge is to find a definition of spirituality that makes sense to us. By listening carefully and with an open mind to a range of members’ opinions and experiences, we form our own understanding that we can use in our own recovery."
  ];

  return (
    <Pagination
      textArray={textArray}
      initialItemsPerPage={1} 
      nextComponentLabel="Next text" 
    />
  );
};

const App: React.FC = () => (
  <div>
    <SpiritualJourney />
  </div>
);

export default SpiritualJourney;
