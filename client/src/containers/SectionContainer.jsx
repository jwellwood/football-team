import React from 'react';
// Components
import SectionBackground from './SectionBackground';
import SectionTitle from 'components/ui/text/SectionTitle';

const SectionContainer = ({ title, link, children, text }) => {
  return (
    <SectionBackground placeholder>
      <SectionTitle link={link} title={title} text={text || null} />
      <SectionBackground>{children}</SectionBackground>
    </SectionBackground>
  );
};

export default SectionContainer;
