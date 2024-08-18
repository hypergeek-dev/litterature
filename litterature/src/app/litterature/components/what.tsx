import React, { useState, useEffect } from 'react';
import Pagination from "./pagination"
const WhatIsNaProgram: React.FC = () => { 
 
  const textArray = [
    "What is the Narcotics Anonymous Programme?",
    "NA is a nonprofit fellowship or society of men and women for whom drugs had become a major problem.",
    "We are recovering addicts who meet regularly to help each other stay clean.",
    "This is a programme of complete abstinence from all drugs.",
    "There is only one requirement for membership, the desire to stop using.",
    "We suggest that you keep an open mind and give yourself a break.",
    "Our programme is a set of principles written so simply that we can follow them in our daily lives.",
    "The most important thing about them is that they work.",
    "There are no strings attached to NA.",
    "We are not affiliated with any other organisations, we have no initiation fees or dues, no pledges to sign, no promises to make to anyone.",
    "We are not connected with any political, religious, or law enforcement groups, and are under no surveillance at any time.",
    "Anyone may join us, regardless of age, race, sexual identity, creed, religion or lack of religion.",
    "We are not interested in what or how much you used or who your connections were, what you have done in the past, how much or how little you have, but only in what you want to do about your problem and how we can help.",
    "The newcomer is the most important person at any meeting, because we can only keep what we have by giving it away.",
    "We have learned from our group experience that those who keep coming to our meetings regularly stay clean."
  ];

  return (
    <Pagination
      textArray={defaultTextArray}
      initialItemsPerPage={3}
      renderContent={(currentText) => (
        <div>
          {currentText.map((paragraph, index) => (
            <p key={index} className="mb-4 text-lg text-gray-800">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    />
  );
};
const App: React.FC = () => (
  <div>
    <WhatIsNaProgram />
  </div>
);

export default App;
