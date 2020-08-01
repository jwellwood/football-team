import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { admin_routes } from 'router';
import AddTrophyLogic from 'components/admin/team/trophies/AddTrophyLogic';

const AddTrophyPage = () => {
  return (
    <div>
      <PageHeader title='Add Trophy' backTo={admin_routes.ADMIN_TROPHIES} />
      <AddTrophyLogic />
    </div>
  );
};

export default AddTrophyPage;
