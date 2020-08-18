import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import EditHOF from '../containers/EditHallOFFame.container';
import { page_headers } from 'constants/text';

const EditHOFPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.EDIT_HOF}
        backTo={admin_routes.ADMIN_HOF}
      />
      <EditHOF />
    </>
  );
};

export default EditHOFPage;
