import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
// Functions
import { showMessage } from 'reduxStore/app/message_actions';
import { getAuth } from 'reduxStore/auth/auth_actions';
import { getTeam } from 'reduxStore/team/team_actions';
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
          dispatch(showMessage(true, message, type));
        }
      },
      [dispatch]
    );
  });
  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  return (
    <PageContainer admin={false}>
      <React.Suspense fallback={<Spinner />}>
        <Navigation />
        <Routes />
      </React.Suspense>
      <AlertMessage />
    </PageContainer>
  );
};
