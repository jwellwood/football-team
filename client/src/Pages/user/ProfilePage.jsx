import React from 'react';
import { visitor_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import Profile from 'components/user/Profile';

const ProfilePage = () => {
  return (
    <div>
      <PageHeader title='Profile' backTo={visitor_routes.HOME} />
      <Profile />
    </div>
  );
};

export default ProfilePage;
