import React from 'react';
import Stats from 'components/visitor/stats/Stats';
import PageHeader from 'components/ui/text/PageHeader';
import { visitor_routes } from 'router';

const StatsPage = () => {
  return (
    <div>
      <PageHeader title='Stats' backTo={visitor_routes.HOME} />
      <Stats />
    </div>
  );
};

export default StatsPage;
