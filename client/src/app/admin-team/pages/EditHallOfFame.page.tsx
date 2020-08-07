import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import EditHOFLogic from '../EditHOFLogic';

const EditHOFPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Edit Hall of Fame' backTo={admin_routes.ADMIN_HOF} />
      <EditHOFLogic />
    </>
  );
};

export default EditHOFPage;
