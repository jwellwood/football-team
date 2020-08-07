import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import AddTrophy from '../containers/AddTrophy.container';

const AddTrophyPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Add Trophy' backTo={admin_routes.ADMIN_TROPHIES} />
      <AddTrophy />
    </>
  );
};

export default AddTrophyPage;
