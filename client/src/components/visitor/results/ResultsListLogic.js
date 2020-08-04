import React, { useState, useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { getAllResults } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';
// Components
const ResultsTotals = lazy(() =>
  import('../../../Pages/results/ResultsTotals.container')
);
const ResultList = lazy(() => import('./ResultList'));

const ResultsListLogic = () => {
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);

  useEffect(() => {
    dispatch(getAllResults()).then((res) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setResults(data);
    });
  }, [dispatch]);

  return (
    <>
      <ResultsTotals results={results} />
      <ResultList results={results} />
    </>
  );
};

export default ResultsListLogic;
