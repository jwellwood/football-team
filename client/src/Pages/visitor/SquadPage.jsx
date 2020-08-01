import React from 'react';
import { visitor_routes } from 'router';
import PageHeader from 'components/ui/text/PageHeader';
import SquadListLogic from 'components/visitor/squad/SquadListLogic';

const SquadPage = () => {
  return (
    <div>
      <PageHeader title='Squad' backTo={visitor_routes.HOME} />
      <SquadListLogic />
    </div>
  );
};

export default SquadPage;
