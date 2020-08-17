import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
// Functions
import { showAlert } from 'reduxStore/alert';
import { getAuth } from 'reduxStore/auth';
import { getTeam } from 'reduxStore/team';
// UI
import { AlertMessage } from 'shared/messages/components';
import { Spinner } from 'components/loaders';
import Navigation from 'app/navigation/Navigation.container';
import { PageContainer } from 'shared/layout/containers';
import { AppDispatch } from 'reduxStore/rootReducer';

const Routes = lazy(() => import('./Routes'));

export default () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeam()).then(
      (res: any) => {
        const { success, message, type } = res.payload;
        if (!success) {
          dispatch(showAlert(true, message, type));
        }
      },
      [dispatch]
    );
  });
  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  return (
    <PageContainer>
      <React.Suspense fallback={<Spinner />}>
        <Navigation />
        <Routes />
      </React.Suspense>
      <AlertMessage />
    </PageContainer>
  );
};
