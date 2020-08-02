import React from 'react';
import { useSelector } from 'react-redux';
import Home from './Home.component';

export default () => {
  const team = useSelector((state) => state.team.teamData);

  return <Home team={team} />;
};
