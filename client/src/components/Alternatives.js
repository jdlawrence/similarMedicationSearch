import React from 'react';
import SingleAlternative from './SingleAlternative';

const Alternatives = ({ alternatives }) => {
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
