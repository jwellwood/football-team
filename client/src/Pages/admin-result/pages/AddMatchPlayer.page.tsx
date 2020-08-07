import React from 'react';
import { admin_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import AddMatchPlayersLogic from 'Pages/admin-result/AddMatchPlayerLogic';

const AddMatchPlayerPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title='Add Match Player'
        backTo={admin_routes.ADMIN_RESULTS}
      />
      <AddMatchPlayersLogic />
    </>
  );
};

export default AddMatchPlayerPage;
