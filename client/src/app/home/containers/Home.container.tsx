import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../components/Home.component';
import { RootState } from 'reduxStore/rootReducer';

export default () => {
  const team = useSelector((state: RootState) => state.team.data);
  return <Home team={team} />;
};
