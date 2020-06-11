import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
// Functions
import { showMessage } from 'reduxStore/app/message_actions';
import { getAuth } from 'reduxStore/auth/auth_actions';
import { getTeam } from 'reduxStore/team/team_actions';
import { getAllResults } from 'reduxStore/result/result_actions';
// UI
import Message from 'components/ui/messages/Message';
import Spinner from 'components/ui/loading/Spinner';
import NavDrawerLogic from 'components/navs/NavDrawerLogic';

const Routes = lazy(() => import('./Routes'));

const AppRouter = () => {
  const dispatch = useDispatch();

  const effects = (action, name) => {
    console.log(`${name} init`);
    dispatch(action()).then(
      (res) => {
        console.log(`${name} loaded`);
        const { success, message, type } = res.payload;
        if (!success) {
          dispatch(showMessage(true, message, type));
        }
      },
      [dispatch]
    );
  };
  useEffect(() => {
    dispatch(getAuth());
  });
  useEffect(() => {
    effects(getTeam, 'team');
  });
  useEffect(() => {
    effects(getAllResults, 'results');
  });

  return (
    <>
      <React.Suspense fallback={<Spinner />}>
        <NavDrawerLogic />
        <Routes />
      </React.Suspense>
      <Message />
    </>
  );
};

export default AppRouter;
