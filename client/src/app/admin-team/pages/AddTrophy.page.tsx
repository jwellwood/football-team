import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AddTrophy from '../containers/AddTrophy.container';
import { page_headers } from 'constants/text';

const AddTrophyPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.ADD_TROPHY}
        backTo={admin_routes.ADMIN_TROPHIES}
      />
      <AddTrophy />
    </>
  );
};

export default AddTrophyPage;
