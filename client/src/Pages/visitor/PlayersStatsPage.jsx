import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { visitor_routes } from 'router';
import PlayerStatsLogic from 'components/visitor/stats/player-stats/PlayerStatsLogic';

const PlayersStatsPage = () => {
  return (
    <div>
      <PageHeader title='Player Stats' backTo={visitor_routes.HOME} />
      <PlayerStatsLogic />
    </div>
  );
};

export default PlayersStatsPage;
