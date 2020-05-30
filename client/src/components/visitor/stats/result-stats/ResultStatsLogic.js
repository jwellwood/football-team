import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// Components
import ResultStats from './ResultStats';

const ResultStatsLogic = () => {
  const results = useSelector((state) => state.result.data) || [];
  const [includeForfeits, setIncludeForfeits] = useState(true);

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
