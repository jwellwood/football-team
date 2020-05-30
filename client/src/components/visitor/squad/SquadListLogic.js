import React from 'react';
import { useSelector } from 'react-redux';

// Components
import SquadList from './SquadList';

const SquadListLogic = () => {
  const players = useSelector((state) => state.squad.squadData) || [];

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

  return <SquadList players={players} playersByPosition={playersByPosition} />;
};

export default SquadListLogic;
