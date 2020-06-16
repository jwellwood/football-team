import React from 'react';
import { SQUAD } from 'router/route_names';
import PageHeader from 'components/ui/text/PageHeader';
import PlayerLogic from 'components/visitor/player/PlayerLogic';

const PlayerPage = () => {
  return (
    <div>
      <PageHeader backTo={SQUAD} />
      <PlayerLogic />
    </div>
  );
};

export default PlayerPage;
