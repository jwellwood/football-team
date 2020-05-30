import React from 'react';
import { HOME } from 'router/route_names';
import PageHeader from 'components/ui/headers/PageHeader';
import SquadListLogic from 'components/visitor/squad/SquadListLogic';

const SquadPage = () => {
  return (
    <div>
      <PageHeader title='Squad' backTo={HOME} />
      <SquadListLogic />
    </div>
  );
};

export default SquadPage;
