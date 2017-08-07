import React from 'react';
import SingleSearchResult from './SingleSearchResult';

const SearchResults = ({ errorInSearch, results, getAlternatives }) => {
  if (errorInSearch) {
    return (
      <div className="search-results error-in-search">Please enter a valid drug</div>
    );
  } else {
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
  }
};
export default SearchResults;
