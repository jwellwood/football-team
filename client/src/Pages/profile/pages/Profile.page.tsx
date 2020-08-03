import React from 'react';
import { visitor_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import Profile from '../containers/Profile.container';

const ProfilePage: React.FC = () => {
  return (
    <>
      <PageHeader title='Profile' backTo={visitor_routes.HOME} />
      <Profile />
    </>
  );
};

export default ProfilePage;
