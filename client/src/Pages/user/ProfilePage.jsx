import React from 'react';
import { HOME } from 'router/route_names';
import PageHeader from 'components/ui/text/PageHeader';
import Profile from 'components/user/Profile';

const ProfilePage = () => {
  return (
    <div>
      <PageHeader title='Profile' backTo={HOME} />
      <Profile />
    </div>
  );
};

export default ProfilePage;
