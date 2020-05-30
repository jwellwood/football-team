import React from 'react';
import { useSelector } from 'react-redux';
// Components
import PlayerStats from './PlayerStats';

const PlayerStatsLogic = () => {
  const players = useSelector((state) => state.squad.squadData) || [];
  const allResults = useSelector((state) => state.result.data) || [];
  const results = allResults.filter((result) => !result.isForfeit);
  return <PlayerStats players={players} results={results} />;
};

export default PlayerStatsLogic;
