import React, { useMemo } from 'react';
// Functions
import { getTotals } from 'functions/player';
// Components
import TargetsOverview from './TargetsOverview';
import CustomText from 'components/ui/text/CustomText';

const TargetsOverviewLogic = ({ player }) => {
  const { appsTarget, goalsTarget, assistsTarget } = player;
  const stats = useMemo(() => getTotals(player), [player]);
  const data = [
    {
      title: 'Apps',
      icon: 'app',
      value: stats.apps,
      secondary: appsTarget,
    },
    {
      title: 'Goals',
      icon: 'goal',
      value: stats.goals,
      secondary: goalsTarget,
    },
    {
      title: 'Assists',
      icon: 'assist',
      value: stats.assists,
      secondary: assistsTarget,
    },
  ];

  return appsTarget ? (
    <TargetsOverview data={data} />
  ) : (
    <CustomText type='placeholder' text='No targets set' />
  );
};

export default TargetsOverviewLogic;
