import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
// Components
const ResultsTotalsLogic = lazy(() => import('./ResultsTotalsLogic'));
const ResultList = lazy(() => import('./ResultList'));

const ResultsListLogic = () => {
  const results = useSelector((state) => state.result.data) || [];

  return (
    <>
      <ResultsTotalsLogic results={results} />
      <ResultList results={results} />
    </>
  );
};

export default ResultsListLogic;
