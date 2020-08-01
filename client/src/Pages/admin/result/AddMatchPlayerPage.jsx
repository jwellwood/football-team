import React from 'react';
import { admin_routes } from 'router';
import PageHeader from 'components/ui/text/PageHeader';
import AddMatchPlayersLogic from 'components/admin/matchPlayers/AddMatchPlayerLogic';

const AddMatchPlayerPage = () => {
  return (
    <div>
      <PageHeader
        title='Add Match Player'
        backTo={admin_routes.ADMIN_RESULTS}
      />
      <AddMatchPlayersLogic />
    </div>
  );
};

export default AddMatchPlayerPage;
