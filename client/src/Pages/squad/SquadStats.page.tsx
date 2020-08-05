import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { visitor_routes } from 'router';
import PlayerStatsLogic from 'components/visitor/stats/player-stats/PlayerStatsLogic';

const PlayersStatsPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Player Stats' backTo={visitor_routes.HOME} />
      <PlayerStatsLogic />
    </>
  );
};

export default PlayersStatsPage;
