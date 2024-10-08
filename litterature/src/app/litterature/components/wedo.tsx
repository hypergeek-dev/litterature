import React from 'react';
import Pagination from "./pagination";

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

  return (
    <Pagination
      textArray={textArray}
      nextComponentLabel="Next text" 
    />
  );
};

const App: React.FC = () => (
  <div>
    <WeDoRecover />
  </div>
);

export default WeDoRecover;
