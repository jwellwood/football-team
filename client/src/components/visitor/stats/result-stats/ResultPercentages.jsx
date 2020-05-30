import React, { useMemo } from 'react';
// Functions
import { getResultPercentages } from 'functions/results';
// Assets
import { theme } from 'assets/theme';
// Components
import ResultAverages from './ResultAverages';
import DonutGraph from 'components/ui/graphs/DonutGraph';
import PlaceholderText from 'components/ui/text/Placeholder';

const ResultPercentages = ({ results }) => {
  const { success, warning, primary, secondary } = theme.palette;
  const percentages = useMemo(() => getResultPercentages(results), [results]);

  const data = {
    labels: ['Win', 'Draw', 'Lose'],

    datasets: [
      {
        data: [
          percentages.winPercentage,
          percentages.drawPercentage,
          percentages.lossPercentage,
        ],
        backgroundColor: [success.light, warning.light, primary.light],
        borderColor: secondary.dark,
      },
    ],
  };

  return results.length ? (
    <>
      <DonutGraph data={data} />
      <ResultAverages results={results} />
    </>
  ) : (
    <PlaceholderText />
  );
};

export default ResultPercentages;
