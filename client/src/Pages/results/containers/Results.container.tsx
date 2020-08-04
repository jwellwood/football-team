import React, { useState, useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { getAllResults } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { IResult } from 'shared/types';
// Components
const ResultsTotals = lazy(() => import('../components/ResultsTotalsTable'));
const ResultList = lazy(() => import('../components/ResultList'));

export default () => {
  const dispatch = useDispatch();
  const [results, setResults] = useState<IResult[]>([]);

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
