import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { visitor_routes } from 'router';
import SquadStats from '../containers/SquadStats.container';

const SquadStatsPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Player Stats' backTo={visitor_routes.HOME} />
      <SquadStats />
    </>
  );
};

export default SquadStatsPage;
