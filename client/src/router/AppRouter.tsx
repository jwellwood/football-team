import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
// Functions
import { showMessage } from 'reduxStore/app/message_actions';
import { getAuth } from 'reduxStore/auth/auth_actions';
import { getTeam } from 'reduxStore/team/team_actions';
// UI
import AlertMessage from 'shared/messages/AlertMessage';
import Spinner from 'lib/components/loading/Spinner';
import Navigation from 'lib/navigation/Navigation.container';
import PageContainer from 'shared/layout/PageContainer';

const Routes = lazy(() => import('./Routes'));

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeam()).then(
      (res) => {
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
