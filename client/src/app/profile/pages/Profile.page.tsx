import React from 'react';
import { visitor_routes } from 'router';
import { PageHeader } from 'components/typography';
import Profile from '../containers/Profile.container';
import { page_headers } from 'constants/text';

const ProfilePage: React.FC = () => {
  return (
    <>
      <PageHeader
        title={page_headers.USER_PROFILE}
        backTo={visitor_routes.HOME}
      />
      <Profile />
    </>
  );
};

export default ProfilePage;
