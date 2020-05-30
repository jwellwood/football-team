import React, { useMemo } from 'react';
// Functions
import { getResultVersus } from 'functions/results';
// Components
import VersusWrapper from 'components/ui/lists/VersusWrapper';
import PlaceholderText from 'components/ui/text/Placeholder';

const ResultVersus = ({ results }) => {
  const stats = useMemo(() => getResultVersus(results), [results]);
  const {
    mostGoals,
    mostScoredDetails,
    cleanSheets,
    cleanSheetsDetails,
    biggestWinDiff,
    biggestWinResults,
  } = stats;
  const data = [
    {
      title: 'Most Scored',
      icon: 'goal',
      value: mostGoals,
      secondaryList: mostScoredDetails,
    },
    {
      title: 'Clean Sheets',
      icon: 'goal',
      value: cleanSheets,
      secondaryList: cleanSheetsDetails,
    },
    {
      title: 'Biggest Win',
      icon: 'goal',
      value: biggestWinDiff,
      secondaryList: biggestWinResults,
    },
  ];

  const dataToDisplay = results.length ? (
    <VersusWrapper data={data} />
  ) : (
    <PlaceholderText />
  );

  return dataToDisplay;
};

export default ResultVersus;
