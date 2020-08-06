import React, { useMemo } from 'react';
import { getVersusStats } from 'functions/player';
import PlaceholderText from 'lib/components/typography/Placeholder';
import VersusWrapper from 'lib/components/wrappers/VersusWrapper';
import { IPlayer } from 'shared/types';
import { IVersusGame } from 'Pages/results/shared/types';

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
    <PlaceholderText />
  );
};

export default PlayerVersus;
