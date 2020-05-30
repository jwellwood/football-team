import React, { lazy, Suspense, useMemo } from 'react';
// Functions
import {
  getTargetStats,
  targetsTotal,
  getTeamTargets,
  getStatTotals,
} from 'functions/player';
import { getPercentage } from 'functions';
// Components
import Spinner from 'components/ui/loading/Spinner';
const TeamTargets = lazy(() => import('./TeamTargets'));
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

  // Get the values for the team stats graph

  const teamTargetStats = useMemo(() => getTeamTargets(players), [players]);
  const {
    targetApps,
    targetGoals,
    targetAssists,
    targetTotal,
  } = teamTargetStats;
  const teamTargets = {
    targetApps,
    targetGoals,
    targetAssists,
    targetTotal,
  };
  const teamTotalStats = useMemo(() => getStatTotals(players), [players]);
  const { totalApps, totalGoals, totalAssists, totalOverall } = teamTotalStats;
  const teamTotals = {
    totalApps,
    totalGoals,
    totalAssists,
    totalOverall,
  };

  const percentages = {
    apps: getPercentage(totalApps, targetApps, 1),
    goals: getPercentage(totalGoals, targetGoals, 1),
    assists: getPercentage(totalAssists, targetAssists, 1),
    overall: getPercentage(totalOverall, targetTotal, 1),
  };

  return (
    <Suspense fallback={<Spinner isButton />}>
      <TeamTargets
        teamTargets={teamTargets}
        teamTotals={teamTotals}
        percentages={percentages}
      />
      <TargetsTable targets={targets} />
    </Suspense>
  );
};

export default TargetTableLogic;
