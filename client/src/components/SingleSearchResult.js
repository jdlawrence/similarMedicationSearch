import React from 'react';

const SingleSearchResult = ({result, getRXCUI}) => {
  const {rxcui, name, synonym} = result;
  console.log('single', rxcui, synonym);
  return (
    <div className="single-search-result" onClick={getRXCUI}>
      <div>{name}</div>
      <div>{synonym}</div>
    </div>
  );
};


export default SingleSearchResult;
