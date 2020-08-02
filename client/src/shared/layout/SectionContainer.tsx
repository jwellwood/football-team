import React from 'react';
// Components
import SectionBackground from './SectionBackground';
import SectionTitle from 'components/ui/text/SectionTitle';

interface Props {
  title: string;
  link?: string;
  children: React.ReactNode;
  text?: string;
}

const SectionContainer: React.FC<Props> = ({ title, link, children, text }) => {
  return (
    <SectionBackground placeholder>
      <SectionTitle link={link} title={title} text={text || null} />
      <SectionBackground>{children}</SectionBackground>
    </SectionBackground>
  );
};

export default SectionContainer;
