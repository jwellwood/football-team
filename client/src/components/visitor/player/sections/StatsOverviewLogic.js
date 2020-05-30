import React, { useMemo } from 'react';
// Functions
import { getTotals } from 'functions/player';
// Components
import StatsOverview from './StatsOverview';

const StatsOverviewLogic = ({ player }) => {
  const stats = useMemo(() => getTotals(player), [player]);
  const data = [
    {
      text: 'Apps',
      icon: 'app',
      value: stats.apps,
      noDivider: true,
    },
    { text: 'Goals', icon: 'goal', value: stats.goals },
    {
      text: 'Assists',
      icon: 'assist',
      value: stats.assists,
    },
    { text: 'Mvps', icon: 'mvp', value: stats.mvps },
    {
      text: 'Pens',
      icon: 'penScored',
      value: `${stats.pensScored}/${stats.pensScored + stats.pensMissed}`,
      secondary: 'scored/taken',
    },
    {
      text: 'Conceded',
      icon: 'conceded',
      value: stats.conceded,
    },
    {
      text: 'Own Goals',
      icon: 'ownGoal',
      value: stats.ownGoals,
    },
    {
      text: 'Yellow Cards',
      icon: 'yellowCard',
      value: stats.yellowCards,
    },
    {
      text: 'Red Cards',
      icon: 'redCard',
      value: stats.redCards,
    },
  ];

  return <StatsOverview data={data} />;
};

export default StatsOverviewLogic;
