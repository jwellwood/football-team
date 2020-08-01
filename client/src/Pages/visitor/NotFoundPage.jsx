import React from 'react';
import NotFound from 'components/visitor/not-found/NotFound';
import { visitor_routes } from 'router';
import PageHeader from 'components/ui/text/PageHeader';

const NotFoundPage = () => {
  return (
    <div>
      <PageHeader title='Not Found' backTo={visitor_routes.HOME} />
      <NotFound />
    </div>
  );
};

export default NotFoundPage;
