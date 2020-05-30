import React from 'react';
import PageHeader from 'components/ui/headers/PageHeader';
import { ADMIN_HOF } from 'router/route_names';
import AddHOFLogic from 'components/admin/team/hof/AddHOFLogic';

const AddHOFPage = () => {
  return (
    <div>
      <PageHeader title='Add Hall of Famer' backTo={ADMIN_HOF} />
      <AddHOFLogic />
    </div>
  );
};

export default AddHOFPage;
