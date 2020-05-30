import React from 'react';
import About from 'components/visitor/about/About';
import PageHeader from 'components/ui/headers/PageHeader';
import { HOME } from 'router/route_names';

const AboutPage = () => {
  return (
    <>
      <PageHeader title='About' backTo={HOME} />
      <About />
    </>
  );
};

export default AboutPage;
