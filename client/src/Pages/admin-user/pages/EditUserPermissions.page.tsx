import React from 'react';
import PageHeader from 'lib/components/typography/PageHeader';
import { admin_routes } from 'router';
import UserPermissionsForm from 'Pages/admin-user/containers/UserPermissionsForm.container';

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
