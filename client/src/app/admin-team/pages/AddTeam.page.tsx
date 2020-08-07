import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import AddTeamToDB from '../AddTeamToDB';

const AddTeamPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Add Team' backTo={admin_routes.ADMIN} />
      <AddTeamToDB />
    </>
  );
};

export default AddTeamPage;
