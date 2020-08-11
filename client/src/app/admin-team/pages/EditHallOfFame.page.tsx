import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import EditHOF from '../containers/EditHallOFFame.container';

const EditHOFPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Edit Hall of Fame' backTo={admin_routes.ADMIN_HOF} />
      <EditHOF />
    </>
  );
};

export default EditHOFPage;
