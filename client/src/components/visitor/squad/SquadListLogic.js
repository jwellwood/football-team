import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// Components
import SquadList from './SquadList';
import { getAllPlayers } from 'reduxStore/squad/squad_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { useDispatch } from 'react-redux';
import Spinner from 'lib/components/loading/Spinner';

const SquadListLogic = () => {
  const dispatch = useDispatch();
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    dispatch(getAllPlayers()).then((res) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setPlayers(data);
    });
  }, [dispatch]);

  const filterBy = (pos) => players.filter((player) => player.position === pos);
  const playersByPosition = [
    {
      text: 'Goalkeepers',
      value: filterBy('GK'),
    },
    {
      text: 'Defenders',
      value: filterBy('DF'),
    },
    {
      text: 'Midfielders',
      value: filterBy('MF'),
    },
    {
      text: 'Forwards',
      value: filterBy('FW'),
    },
  ];

  return players ? (
    <SquadList players={players} playersByPosition={playersByPosition} />
  ) : (
    <Spinner />
  );
};

export default SquadListLogic;
