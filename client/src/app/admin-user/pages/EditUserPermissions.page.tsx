import React from 'react';
import { PageHeader } from 'components/typography';
import { admin_routes } from 'router';
import UserPermissionsForm from 'app/admin-user/containers/UserPermissionsForm.container';

const EditUserPermissionsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title='Change Permissions'
        backTo={admin_routes.ADMIN_USERS}
      />
      <UserPermissionsForm />
    </>
  );
};

export default EditUserPermissionsPage;
