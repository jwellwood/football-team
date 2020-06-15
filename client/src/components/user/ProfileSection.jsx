import React from 'react';
// Components
import SectionTitle from 'components/ui/headers/SectionTitle';
import GreyBackground from 'containers/GreyBackground';

const ProfileSection = ({ children, link, title }) => {
  return (
    <GreyBackground placeholder>
      <SectionTitle link={link} title={title} />
      {children}
    </GreyBackground>
  );
};

export default ProfileSection;
