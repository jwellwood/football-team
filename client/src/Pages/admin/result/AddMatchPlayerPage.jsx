import React from 'react';
import { ADMIN_RESULTS } from 'router/route_names';
import PageHeader from 'components/ui/headers/PageHeader';
import AddMatchPlayersLogic from 'components/admin/matchPlayers/AddMatchPlayerLogic';

const AddMatchPlayerPage = () => {
  return (
    <div>
      <PageHeader title='Add Match Player' backTo={ADMIN_RESULTS} />
      <AddMatchPlayersLogic />
    </div>
  );
};

export default AddMatchPlayerPage;
