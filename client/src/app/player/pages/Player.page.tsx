import React from 'react';
import { visitor_routes } from 'router';
import { PageHeader } from 'components/typography';
import Player from '../containers/Player.container';
import { page_headers } from 'constants/text';

const PlayerPage: React.FC = () => {
  return (
    <>
      <PageHeader backTo={visitor_routes.SQUAD} title={page_headers.PLAYER} />
      <Player />
    </>
  );
};

export default PlayerPage;
