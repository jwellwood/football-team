import React, { useMemo } from 'react';
import { getTeamTargets, getStatTotals } from 'functions/player';
import { getPercentage } from 'functions';
import TeamTargets from './TeamTargets';

const TeamTargetsLogic = ({ players }) => {
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
    <div>
      <TeamTargets
        teamTargets={teamTargets}
        teamTotals={teamTotals}
        percentages={percentages}
      />
    </div>
  );
};

export default TeamTargetsLogic;
