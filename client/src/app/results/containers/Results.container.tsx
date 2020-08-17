import React, { useState, useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { getAllResults } from 'reduxStore/result';
import { showAlert } from 'reduxStore/alert';
import { IResult } from 'shared/types';
import { AppDispatch } from 'reduxStore/rootReducer';
import { Spinner } from 'components/loaders';
// Components
const ResultsTotalsTable = lazy(() =>
  import('../components/ResultsTotalsTable')
);
const ResultList = lazy(() => import('../components/ResultList'));

export default () => {
  const dispatch: AppDispatch = useDispatch();
  const [results, setResults] = useState<IResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getAllResults()).then((res: any) => {
      const { success, message, type, data } = res.payload;
      setLoading(false);
      if (!success) {
        dispatch(showAlert(true, message, type));
      }
      setResults(data);
    });
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <ResultsTotalsTable results={results} />
      <ResultList results={results} />
    </>
  );
};
