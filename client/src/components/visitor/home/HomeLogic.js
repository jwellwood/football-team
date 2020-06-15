import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { getLatestResult } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';

const HomeLogic = () => {
  const dispatch = useDispatch();

  const team = useSelector((state) => state.team.teamData);
  const [latestResult, setLatestResult] = useState({});

  useEffect(() => {
    dispatch(getLatestResult()).then((res) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setLatestResult(data);
    });
  }, [dispatch]);

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

  return <Home data={data} team={team} result={latestResult} />;
};

export default HomeLogic;
