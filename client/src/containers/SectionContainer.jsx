import React from 'react';
// Components
import GreyBackground from './GreyBackground';
import SectionTitle from 'components/ui/headers/SectionTitle';

const SectionContainer = ({ title, link, children, text }) => {
  return (
    <GreyBackground placeholder>
      <SectionTitle link={link} title={title} text={text || null} />
      <GreyBackground>{children}</GreyBackground>
    </GreyBackground>
  );
};

export default SectionContainer;
