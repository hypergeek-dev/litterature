import React from 'react';
import Pagination from "./pagination";

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
    "12. Anonymity is the spiritual foundation of all our Traditions, ever reminding us to place principles before personalities.",
    "Understanding these Traditions comes slowly over a period of time. We pick up information as we talk to members and visit various groups.",
    "It usually isn’t until we get involved with service that someone points out that “personal recovery depends on NA unity,” and that unity depends on how well we follow our Traditions.",
    "The Twelve Traditions of NA are not negotiable. They are the guidelines that keep our Fellowship alive and free.",
    "By following these guidelines in our dealings with others, and society at large, we avoid many problems.",
    "That is not to say that our Traditions eliminate all problems. We still have to face difficulties as they arise: communication problems, differences of opinion, internal controversies, and troubles with individuals and groups outside the Fellowship.",
    "However, when we apply these principles, we avoid some of the pitfalls.",
    "Many of our problems are like those that our predecessors had to face.", 
    "Their hard won experience gave birth to the Traditions, and our own experience has shown that these principles are just as valid today as they were when these Traditions were formulated.",
    "Our Traditions protect us from the internal and external forces that could destroy us. They are truly the ties that bind us together.",
    "It is only through understanding and application that they work."
  ];

  return (
    <Pagination
      textArray={textArray}
      initialItemsPerPage={3} 
      nextComponentLabel="Next text" 
    />
  );
};

const App: React.FC = () => (
  <div>
    <TwelveTraditions />
  </div>
);

export default TwelveTraditions;
