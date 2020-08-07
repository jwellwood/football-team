import React from 'react';
import { visitor_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import Team from '../containers/Team.container';

const TeamPage: React.FC = () => {
  return (
    <>
      <PageHeader title='The Team' backTo={visitor_routes.HOME} />
      <Team />
    </>
  );
};

export default TeamPage;