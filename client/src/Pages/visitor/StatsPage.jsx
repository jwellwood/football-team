import React from 'react';
import Stats from 'components/visitor/stats/Stats';
import PageHeader from 'components/ui/headers/PageHeader';
import { HOME } from 'router/route_names';

const StatsPage = () => {
  return (
    <div>
      <PageHeader title='Stats' backTo={HOME} />
      <Stats />
    </div>
  );
};

export default StatsPage;
