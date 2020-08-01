import React from 'react';
import About from 'components/visitor/about/About';
import PageHeader from 'components/ui/text/PageHeader';
import { visitor_routes } from 'router';

const AboutPage = () => {
  return (
    <>
      <PageHeader title='About' backTo={visitor_routes.HOME} />
      <About />
    </>
  );
};

export default AboutPage;
