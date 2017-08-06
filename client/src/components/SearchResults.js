import React from 'react';
import SingleSearchResult from './SingleSearchResult';

const SearchResults = ({ results, getAlternatives }) => {
  return (
    <div className="search-results">
      <div> Search Results:</div>
      {results.map(result => {
        return (
          <SingleSearchResult
            getAlternatives={getAlternatives}
            key={result.rxcui}
            result={result}
          />
        );
      }
      )}
    </div>
  );
};
export default SearchResults;
