import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AddTeamToDB from '../containers/AddTeamToDB.container';
import { page_headers } from 'constants/text';

const AddTeamPage: React.FC = () => {
  return (
    <>
      <PageHeader title={page_headers.ADD_TEAM} backTo={admin_routes.ADMIN} />
      <AddTeamToDB />
    </>
  );
};

export default AddTeamPage;
