import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import AddTrophyLogic from '../AddTrophyLogic';

const AddTrophyPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Add Trophy' backTo={admin_routes.ADMIN_TROPHIES} />
      <AddTrophyLogic />
    </>
  );
};

export default AddTrophyPage;
