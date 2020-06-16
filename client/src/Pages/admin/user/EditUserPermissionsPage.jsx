import React from 'react';
import PageHeader from 'components/ui/text/PageHeader';
import { ADMIN_USERS } from 'router/route_names';
import UserPermissionFormLogic from 'components/admin/users/UserPermissionFormLogic';

const EditUserPermissionsPage = () => {
  return (
    <div>
      <PageHeader title='Change Permissions' backTo={ADMIN_USERS} />
      <UserPermissionFormLogic />
    </div>
  );
};

export default EditUserPermissionsPage;
