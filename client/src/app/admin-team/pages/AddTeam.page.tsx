import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AddTeamToDB from '../containers/AddTeamToDB.container';

const AddTeamPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Add Team' backTo={admin_routes.ADMIN} />
      <AddTeamToDB />
    </>
  );
};

export default AddTeamPage;
