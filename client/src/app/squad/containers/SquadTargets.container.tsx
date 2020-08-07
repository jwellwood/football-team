import React, { useMemo } from 'react';
import { getTeamTargets, getStatTotals } from 'functions/player';
import { getPercentage } from 'functions';
import { IPlayer } from 'shared/types';
import {
  ISquadTargets,
  ISquadTotals,
  ISquadPercentages,
} from '../shared/types';
import SquadTargets from '../components/SquadTargets.component';

interface Props {
  players: IPlayer[];
}

export default ({ players }: Props) => {
  const teamTargetStats: ISquadTargets = useMemo(
    () => getTeamTargets(players),
    [players]
  );
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
  const teamTotalStats: ISquadTotals = useMemo(() => getStatTotals(players), [
    players,
  ]);
  const { totalApps, totalGoals, totalAssists, totalOverall } = teamTotalStats;
  const teamTotals = {
    totalApps,
    totalGoals,
    totalAssists,
    totalOverall,
  };

  const percentages: ISquadPercentages = {
    apps: getPercentage(totalApps, targetApps, 1),
    goals: getPercentage(totalGoals, targetGoals, 1),
    assists: getPercentage(totalAssists, targetAssists, 1),
    overall: getPercentage(totalOverall, targetTotal, 1),
  };
  return (
    <div>
      <SquadTargets
        teamTargets={teamTargets}
        teamTotals={teamTotals}
        percentages={percentages}
      />
    </div>
  );
};
