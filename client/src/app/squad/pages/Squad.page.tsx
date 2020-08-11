import React from 'react';
import { visitor_routes } from 'router';
import { PageHeader } from 'components/typography';
import SquadList from '../containers/SquadList.container';

const SquadPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Squad' backTo={visitor_routes.HOME} />
      <SquadList />
    </>
  );
};

export default SquadPage;
