import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AddAward from '../containers/AddAward.container';
import { page_headers } from 'constants/text';

const AddSeasonAwardPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.ADD_AWARD}
        backTo={admin_routes.ADMIN_PREVIOUS_SEASON}
      />
      <AddAward />
    </>
  );
};

export default AddSeasonAwardPage;
