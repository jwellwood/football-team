import React from 'react';
import { useSelector } from 'react-redux';
// Routes
import { visitor_routes } from 'router';
// Components
import Home from './Home';

const HomeLogic = () => {
  const team = useSelector((state) => state.team.teamData);

  const data = [
    {
      icon: 'list-ul',
      text: 'results',
      link: visitor_routes.RESULTS,
    },
    {
      icon: 'chart-pie',
      text: 'results stats',
      link: visitor_routes.RESULTS_STATS,
    },
    {
      icon: 'user-friends',
      text: 'squad',
      link: visitor_routes.SQUAD,
    },
    {
      icon: 'chart-line',
      text: 'player stats',
      link: visitor_routes.PLAYERS_STATS,
    },
    {
      icon: 'shield-alt',
      text: 'team',
      link: visitor_routes.TEAM,
    },
    {
      icon: 'question-circle',
      text: 'about',
      link: visitor_routes.ABOUT,
    },
  ];

  return <Home data={data} team={team} />;
};

export default HomeLogic;
