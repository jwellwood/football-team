import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import EditTeamDetails from 'app/admin-team/containers/EditTeamDetails.container';
import { page_headers } from 'constants/text';

const EditTeamPage: React.FC = () => {
  return (
    <>
      <PageHeader title={page_headers.EDIT_TEAM} backTo={admin_routes.ADMIN} />
      <EditTeamDetails />
    </>
  );
};

export default EditTeamPage;
