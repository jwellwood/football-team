import React from 'react';
import NotFound from 'components/visitor/not-found/NotFound';
import { HOME } from 'router/route_names';
import PageHeader from 'components/ui/headers/PageHeader';

const NotFoundPage = () => {
  return (
    <div>
      <PageHeader title='Not Found' backTo={HOME} />
      <NotFound />
    </div>
  );
};

export default NotFoundPage;
