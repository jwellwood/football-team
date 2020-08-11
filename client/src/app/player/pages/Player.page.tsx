import React from 'react';
import { visitor_routes } from 'router';
import { PageHeader } from 'components/typography';
import Player from '../containers/Player.container';

const PlayerPage: React.FC = () => {
  return (
    <>
      <PageHeader backTo={visitor_routes.SQUAD} title='Player Details' />
      <Player />
    </>
  );
};

export default PlayerPage;
