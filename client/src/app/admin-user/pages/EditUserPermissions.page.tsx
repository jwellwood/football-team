import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import UserPermissionsForm from 'app/admin-user/containers/UserPermissionsForm.container';
import { page_headers } from 'constants/text';

const EditUserPermissionsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.EDIT_USER_PERMISSIONS}
        backTo={admin_routes.ADMIN_USERS}
      />
      <UserPermissionsForm />
    </>
  );
};

export default EditUserPermissionsPage;
