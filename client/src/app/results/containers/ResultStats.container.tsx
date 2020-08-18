import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllResults } from 'reduxStore/results';
import { showAlert } from 'reduxStore/alert';
import { IResult } from 'shared/types';
import ResultStats from '../components/ResultStats';
import { AppDispatch } from 'reduxStore/rootReducer';
import { Spinner } from 'components/loaders';

export default () => {
  const dispatch: AppDispatch = useDispatch();
  const [results, setResults] = useState<IResult[]>([]);
  const [includeForfeits, setIncludeForfeits] = useState<boolean>(true);
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

  const toggleForfeits = () => {
    setIncludeForfeits(!includeForfeits);
  };

  return loading ? (
    <Spinner />
  ) : (
    <ResultStats
      results={results}
      toggleForfeits={toggleForfeits}
      includeForfeits={includeForfeits}
    />
  );
};
