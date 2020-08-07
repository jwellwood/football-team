import React from 'react';
// Components
import SectionBackground from './SectionBackground';
import SectionTitle from 'lib/components/typography/SectionTitle';

interface Props {
  title: string;
  link?: string;
  children: React.ReactNode;
  text?: string;
}

const SectionContainer: React.FC<Props> = ({ title, link, children, text }) => {
  return (
    <SectionBackground placeholder>
      <SectionTitle link={link} title={title} text={text} />
      <SectionBackground>{children}</SectionBackground>
    </SectionBackground>
  );
};

export default SectionContainer;
