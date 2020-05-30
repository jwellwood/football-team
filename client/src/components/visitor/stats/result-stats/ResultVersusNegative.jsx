import React, { useMemo } from 'react';
// Functions
import { getResultVersus } from 'functions/results';
// Components
import VersusWrapper from '../../../ui/lists/VersusWrapper';
import PlaceholderText from 'components/ui/text/Placeholder';

const ResultVersusNegative = ({ results }) => {
  const stats = useMemo(() => getResultVersus(results), [results]);
  const {
    mostConc,
    mostConcededDetails,
    fewestGoals,
    fewestGoalsDetails,
    biggestLossDiff,
    biggestDefeatResults,
  } = stats;
  const data = [
    {
      title: 'Most Conceded',
      icon: 'conceded',
      value: mostConc,
      secondaryList: mostConcededDetails,
    },
    {
      title: 'Fewest Scored',
      icon: 'conceded',
      value: fewestGoals,
      secondaryList: fewestGoalsDetails,
    },
    {
      title: 'Heaviest Defeat',
      icon: 'conceded',
      value: biggestLossDiff,
      secondaryList: biggestDefeatResults,
    },
  ];

  const dataToDisplay = results.length ? (
    <VersusWrapper data={data} />
  ) : (
    <PlaceholderText />
  );

  return dataToDisplay;
};

export default ResultVersusNegative;
