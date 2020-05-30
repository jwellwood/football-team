import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
// Functions
import { showMessage } from 'reduxStore/app/message_actions';
import { getAuth } from 'reduxStore/auth/auth_actions';
import { getTeam } from 'reduxStore/team/team_actions';
import { getAllResults } from 'reduxStore/result/result_actions';
import { getAllPlayers } from 'reduxStore/squad/squad_actions';
// UI
import NavBar from 'components/navs/Navbar';
import Message from 'components/ui/messages/Message';
import Spinner from 'components/ui/loading/Spinner';

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
    effects(getAllPlayers, 'players');
  });
  useEffect(() => {
    effects(getAllResults, 'results');
  });

  return (
    <>
      <React.Suspense fallback={<Spinner />}>
        <NavBar />
        <Routes />
      </React.Suspense>
      <Message />
    </>
  );
};

export default AppRouter;
