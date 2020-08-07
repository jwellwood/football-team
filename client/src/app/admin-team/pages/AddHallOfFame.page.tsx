import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import AddHOFLogic from '../AddHOFLogic';

const AddHOFPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Add Hall of Famer' backTo={admin_routes.ADMIN_HOF} />
      <AddHOFLogic />
    </>
  );
};

export default AddHOFPage;
