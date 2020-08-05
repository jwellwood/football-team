import React from 'react';
import { visitor_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import SquadListLogic from 'components/visitor/squad/SquadListLogic';

const SquadPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Squad' backTo={visitor_routes.HOME} />
      <SquadListLogic />
    </>
  );
};

export default SquadPage;
