import React from 'react';
import { useSelector } from 'react-redux';
// Routes
import {
  SQUAD,
  RESULTS,
  TEAM,
  PLAYERS_STATS,
  RESULTS_STATS,
  ABOUT,
} from 'router/route_names';
// Components
import Home from './Home';

const HomeLogic = () => {
  const team = useSelector((state) => state.team.teamData);
  const results = useSelector((state) => state.result.data);

  const data = [
    {
      icon: 'list-ul',
      text: 'results',
      link: RESULTS,
    },
    {
      icon: 'chart-pie',
      text: 'results stats',
      link: RESULTS_STATS,
    },
    {
      icon: 'user-friends',
      text: 'squad',
      link: SQUAD,
    },
    {
      icon: 'chart-line',
      text: 'player stats',
      link: PLAYERS_STATS,
    },
    {
      icon: 'shield-alt',
      text: 'team',
      link: TEAM,
    },
    {
      icon: 'question-circle',
      text: 'about',
      link: ABOUT,
    },
  ];

  return <Home data={data} team={team} results={results} />;
};

export default HomeLogic;
