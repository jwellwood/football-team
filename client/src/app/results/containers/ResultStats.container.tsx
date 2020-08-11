import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllResults } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { IResult } from 'shared/types';
import ResultStats from '../components/ResultStats';
import { AppDispatch } from 'reduxStore/rootReducer';

export default () => {
  const dispatch: AppDispatch = useDispatch();
  const [results, setResults] = useState<IResult[]>([]);
  const [includeForfeits, setIncludeForfeits] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getAllResults()).then((res: any) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setResults(data);
    });
  }, [dispatch]);

  const toggleForfeits = () => {
    setIncludeForfeits(!includeForfeits);
  };

  return (
    <ResultStats
      results={results}
      toggleForfeits={toggleForfeits}
      includeForfeits={includeForfeits}
    />
  );
};
