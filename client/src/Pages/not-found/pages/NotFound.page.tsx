import React from 'react';
import { visitor_routes } from 'router';
import PageHeader from 'lib/components/typography/PageHeader';
import NotFound from '../components/NotFound.component';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <PageHeader title='Not Found' backTo={visitor_routes.HOME} />
      <NotFound />
    </>
  );
};

export default NotFoundPage;