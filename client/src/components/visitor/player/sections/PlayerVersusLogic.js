import React, { useMemo } from 'react';
// Functions
import { getVersusStats } from 'functions/player';
// Components
import PlayerVersus from './PlayerVersus';
import PlaceholderText from 'components/ui/text/Placeholder';

const PlayerVersusLogic = ({ player }) => {
  const { matchesPlayed } = player;
  const versus = useMemo(() => getVersusStats(player), [player]);
  const data = [
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
    <PlayerVersus data={data} />
  ) : (
    <PlaceholderText />
  );
};

export default PlayerVersusLogic;
