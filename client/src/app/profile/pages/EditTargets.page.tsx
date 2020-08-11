import React from 'react';
import { user_routes } from 'router';
import { PageHeader } from 'components/typography';
import EditTargets from '../containers/EditTargets.container';

const EditTargetsPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Edit targets' backTo={user_routes.PROFILE} />
      <EditTargets />
    </>
  );
};

export default EditTargetsPage;
