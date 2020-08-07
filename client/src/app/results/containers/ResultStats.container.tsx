import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllResults } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { IResult } from 'shared/types';
import ResultStats from '../components/ResultStats';

export default () => {
  const dispatch = useDispatch();
  const [results, setResults] = useState<IResult[]>([]);
  const [includeForfeits, setIncludeForfeits] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getAllResults()).then((res) => {
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
