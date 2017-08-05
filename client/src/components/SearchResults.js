import React from 'react';
import SingleSearchResult from './SingleSearchResult';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      <div> Search Results:</div>
      {results.map(result => {
        console.log('RESRESR', result);
        return (
          <SingleSearchResult
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
