import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { ADMIN_TROPHIES } from 'router/route_names';
import AddTrophyLogic from 'components/admin/team/trophies/AddTrophyLogic';

const AddTrophyPage = () => {
  return (
    <div>
      <PageHeader title='Add Trophy' backTo={ADMIN_TROPHIES} />
      <AddTrophyLogic />
    </div>
  );
};

export default AddTrophyPage;
