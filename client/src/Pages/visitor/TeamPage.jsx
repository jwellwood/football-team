import React from 'react';
import { HOME } from 'router/route_names';
import PageHeader from 'components/ui/headers/PageHeader';
import TeamLogic from 'components/visitor/team/TeamLogic';

const TeamPage = () => {
  return (
    <div>
      <PageHeader title='The Team' backTo={HOME} />
      <TeamLogic />
    </div>
  );
};

export default TeamPage;
