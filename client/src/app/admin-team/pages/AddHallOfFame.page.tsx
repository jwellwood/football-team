import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import AddHOF from '../containers/AddHallOfFame.container';

const AddHOFPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Add Hall of Famer' backTo={admin_routes.ADMIN_HOF} />
      <AddHOF />
    </>
  );
};

export default AddHOFPage;
