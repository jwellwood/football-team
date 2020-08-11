import React, { lazy, Suspense } from 'react';
import { IPlayer } from 'shared/types';
import { Spinner } from 'components/loaders';
import { getTargetStats, targetsTotal } from '../functions';

const TargetsTable = lazy(() => import('../components/SquadTargetsTable'));

interface Props {
  players: IPlayer[];
}

interface ISquadTargets {
  apps: ITargetData;
  assists: ITargetData;
  goals: ITargetData;
  name: string;
  total: number;
}

interface ITargetData {
  percentage: string;
  target: number;
  total: number;
}

const TargetTableLogic: React.FC<Props> = ({ players }) => {
  // Get the values for the player targets table
  const targets: ISquadTargets[] = players.map((player) => {
    const apps = getTargetStats(player, 'apps', player.appsTarget);
    const goals = getTargetStats(player, 'goals', player.goalsTarget);
    const assists = getTargetStats(player, 'assists', player.assistsTarget);
    const total: number = targetsTotal(player);
    return {
      name: player.name,
      apps,
      goals,
      assists,
      total,
    };
  });

  return (
    <Suspense fallback={<Spinner isSecondary />}>
      <TargetsTable targets={targets} />
    </Suspense>
  );
};

export default TargetTableLogic;
