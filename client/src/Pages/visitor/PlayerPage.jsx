import React from 'react';
import { visitor_routes } from 'router';
import PageHeader from 'components/ui/text/PageHeader';
import PlayerLogic from 'components/visitor/player/PlayerLogic';

const PlayerPage = () => {
  return (
    <div>
      <PageHeader backTo={visitor_routes.SQUAD} />
      <PlayerLogic />
    </div>
  );
};

export default PlayerPage;
