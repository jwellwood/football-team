import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllResults } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';
// Components
import ResultStats from './ResultStats';

const ResultStatsLogic = () => {
  const dispatch = useDispatch();

  const [includeForfeits, setIncludeForfeits] = useState(true);

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

export default ResultStatsLogic;
