import React from 'react';
import { visitor_routes } from 'router';
import { PageHeader } from 'components/typography';
import Team from '../containers/Team.container';
import { page_headers } from 'constants/text';

const TeamPage: React.FC = () => {
  return (
    <>
      <PageHeader title={page_headers.TEAM} backTo={visitor_routes.HOME} />
      <Team />
    </>
  );
};

export default TeamPage;
