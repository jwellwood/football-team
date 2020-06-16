import React, { lazy, Suspense } from 'react';
// Functions
import { getTargetStats, targetsTotal } from 'functions/player';
// Components
import Spinner from 'components/ui/loading/Spinner';
const TargetsTable = lazy(() => import('./TargetsTable'));

const TargetTableLogic = ({ players }) => {
  // Get the values for the player targets table
  const targets = players.map((player) => {
    const apps = getTargetStats(player, 'apps', player.appsTarget);
    const goals = getTargetStats(player, 'goals', player.goalsTarget);
    const assists = getTargetStats(player, 'assists', player.assistsTarget);
    const total = targetsTotal(player);
    return {
      name: player.name,
      apps,
      goals,
      assists,
      total,
    };
  });

  return (
    <Suspense fallback={<Spinner isButton />}>
      <TargetsTable targets={targets} />
    </Suspense>
  );
};

export default TargetTableLogic;
