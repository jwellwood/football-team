import React, { useState, useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { getAllResults } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { IResult } from 'shared/types';
import { AppDispatch } from 'reduxStore/rootReducer';
// Components
const ResultsTotalsTable = lazy(() =>
  import('../components/ResultsTotalsTable')
);
const ResultList = lazy(() => import('../components/ResultList'));

export default () => {
  const dispatch: AppDispatch = useDispatch();
  const [results, setResults] = useState<IResult[]>([]);

  useEffect(() => {
    dispatch(getAllResults()).then((res: any) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setResults(data);
    });
  }, [dispatch]);

  return (
    <>
      <ResultsTotalsTable results={results} />
      <ResultList results={results} />
    </>
  );
};
