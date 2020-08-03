import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import AddHOFLogic from 'components/admin/team/hof/AddHOFLogic';

const AddHOFPage = () => {
  return (
    <div>
      <PageHeader title='Add Hall of Famer' backTo={admin_routes.ADMIN_HOF} />
      <AddHOFLogic />
    </div>
  );
};

export default AddHOFPage;
