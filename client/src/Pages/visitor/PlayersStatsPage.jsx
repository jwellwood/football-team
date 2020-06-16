import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { HOME } from 'router/route_names';
import PlayerStatsLogic from 'components/visitor/stats/player-stats/PlayerStatsLogic';

const PlayersStatsPage = () => {
  return (
    <div>
      <PageHeader title='Player Stats' backTo={HOME} />
      <PlayerStatsLogic />
    </div>
  );
};

export default PlayersStatsPage;
