import React, { useMemo } from 'react';
import { IPlayer } from 'shared/types';
import { IPlayerTargetsData, IPlayerStats } from '../shared/types';
import { getTotals } from '../functions';
import CustomTypography from 'lib/components/typography/CustomTypography';
import TargetsOverview from '../components/PlayerTargets.component';

interface Props {
  player: IPlayer;
}

const PlayerTargets: React.FC<Props> = ({ player }) => {
  const { appsTarget, goalsTarget, assistsTarget } = player;

  const stats: IPlayerStats = useMemo(() => getTotals(player), [player]);

  const data: IPlayerTargetsData[] = [
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
    <TargetsOverview targetsData={data} />
  ) : (
    <CustomTypography>No targets set</CustomTypography>
  );
};

export default PlayerTargets;
