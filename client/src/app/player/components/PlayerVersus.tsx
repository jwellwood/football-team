import React, { useMemo } from 'react';
import { getVersusStats } from '../functions';
import { Placeholder } from 'components/typography';
import VersusWrapper from 'shared/layout/wrappers/VersusWrapper';
import { IPlayer } from 'shared/types';
import { IVersusGame } from 'app/results/shared/types';

interface Props {
  player: IPlayer;
}

interface IPlayerVersusData {
  title: string;
  icon: string;
  value: number;
  secondaryList: IVersusGame[];
}

interface IPlayerVersusStatsData {
  mostGoalsVs: IVersusGame[];
  mostGoals: number;
  mostAssists: number;
  mostAssistsVs: IVersusGame[];
  mostConc: number;
  mostConcVs: IVersusGame[];
}

const PlayerVersus: React.FC<Props> = ({ player }) => {
  const { matchesPlayed } = player;
  const versus: IPlayerVersusStatsData = useMemo(() => getVersusStats(player), [
    player,
  ]);
  const versusData: IPlayerVersusData[] = [
    {
      title: 'Most goals',
      icon: 'goal',
      value: versus.mostGoals,
      secondaryList: versus.mostGoals ? versus.mostGoalsVs : [],
    },
    {
      title: 'Most assists',
      icon: 'assist',
      value: versus.mostAssists,
      secondaryList: versus.mostAssists ? versus.mostAssistsVs : [],
    },
    {
      title: 'Most conceded',
      icon: 'conceded',
      value: versus.mostConc,
      secondaryList: versus.mostConc ? versus.mostConcVs : [],
    },
  ];

  return matchesPlayed.length ? (
    <VersusWrapper data={versusData} />
  ) : (
    <Placeholder />
  );
};

export default PlayerVersus;
