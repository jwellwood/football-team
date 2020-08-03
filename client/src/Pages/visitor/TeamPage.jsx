import React from 'react';
import { visitor_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import TeamLogic from 'components/visitor/team/TeamLogic';

const TeamPage = () => {
  return (
    <div>
      <PageHeader title='The Team' backTo={visitor_routes.HOME} />
      <TeamLogic />
    </div>
  );
};

export default TeamPage;
