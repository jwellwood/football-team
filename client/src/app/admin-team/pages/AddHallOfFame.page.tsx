import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import AddHOF from '../containers/AddHallOfFame.container';
import { page_headers } from 'constants/text';

const AddHOFPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.ADD_HOF}
        backTo={admin_routes.ADMIN_HOF}
      />
      <AddHOF />
    </>
  );
};

export default AddHOFPage;
