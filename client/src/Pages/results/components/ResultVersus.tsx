import React, { useMemo, ReactElement } from 'react';
import { getResultVersus } from 'functions/results';
import { IResult } from 'shared/types';
import { IResultVersusData, IVersusGame } from '../shared/types';
import VersusWrapper from 'components/ui/lists/VersusWrapper';
import PlaceholderText from 'components/ui/text/Placeholder';

interface Props {
  results: IResult[];
}

interface IVersusStatsData {
  mostScoredDetails: IVersusGame[];
  mostGoals: number;
  biggestWinDiff: number;
  biggestWinResults: IVersusGame[];
  cleanSheets: number;
  cleanSheetsDetails: IVersusGame[];
}

const ResultVersus: React.FC<Props> = ({ results }) => {
  const stats: IVersusStatsData = useMemo(() => getResultVersus(results), [
    results,
  ]);
  const {
    mostGoals,
    mostScoredDetails,
    cleanSheets,
    cleanSheetsDetails,
    biggestWinDiff,
    biggestWinResults,
  } = stats;

  const data: IResultVersusData[] = [
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

  const dataToDisplay: ReactElement = results.length ? (
    <VersusWrapper data={data} />
  ) : (
    <PlaceholderText />
  );

  return dataToDisplay;
};

export default ResultVersus;
