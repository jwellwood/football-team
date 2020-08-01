import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { admin_routes } from 'router';
import UserPermissionFormLogic from 'components/admin/users/UserPermissionFormLogic';

const EditUserPermissionsPage = () => {
  return (
    <div>
      <PageHeader
        title='Change Permissions'
        backTo={admin_routes.ADMIN_USERS}
      />
      <UserPermissionFormLogic />
    </div>
  );
};

export default EditUserPermissionsPage;
