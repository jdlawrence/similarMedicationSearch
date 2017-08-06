import React from 'react';
import SingleAlternative from './SingleAlternative';

const Alternatives = ({ alternatives }) => {
  console.log('type', typeof alternatives, Array.isArray(alternatives), alternatives[3]);
  return (
    <div className="search-results">
      <div> Alternatives:</div>
      {alternatives.map(alternative => {
        return (
          <SingleAlternative
            alternative={alternative}
            key={alternative.rxcui}
          />
        );
      }
      )}
    </div>
  );
};
export default Alternatives;
