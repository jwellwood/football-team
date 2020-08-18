import React from 'react';
import { user_routes } from 'router';
import { PageHeader } from 'components/typography';
import EditTargets from '../containers/EditTargets.container';
import { page_headers } from 'constants/text';

const EditTargetsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.EDIT_TARGETS}
        backTo={user_routes.PROFILE}
      />
      <EditTargets />
    </>
  );
};

export default EditTargetsPage;
