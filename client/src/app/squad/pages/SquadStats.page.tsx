import React from 'react';
import { PageHeader } from 'components/typography';
import { visitor_routes } from 'router';
import SquadStats from '../containers/SquadStats.container';
import { page_headers } from 'constants/text';

const SquadStatsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.SQUAD_STATS}
        backTo={visitor_routes.HOME}
      />
      <SquadStats />
    </>
  );
};

export default SquadStatsPage;
