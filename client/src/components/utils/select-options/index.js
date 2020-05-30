export const matchTypeOptions = [
  { text: '', value: '' },
  { text: 'League', value: 'League' },
  { text: 'Cup', value: 'Cup' },
  { text: 'Tournament', value: 'Tournament' },
  { text: 'Friendly', value: 'Friendly' }
];

export const positionOptions = [
  { value: '', text: '' },
  { value: 'GK', text: 'Goalkeeper' },
  { value: 'DF', text: 'Defender' },
  { value: 'MF', text: 'Midfielder' },
  { value: 'FW', text: 'Forward' }
];

export const getLeaguePositionOptions = () => {
  let options = [{ text: '', value: '' }];
  for (let i = 1; i < 21; i++) {
    options.push({ text: i, value: i });
  }
  return options;
};

export const homeOrAwayOptions = [
  { value: '', text: '' },
  { value: true, text: 'Home' },
  { value: false, text: 'Away' }
];

export const forfeitOptions = [
  { value: '', text: '' },
  { value: true, text: 'Forfeit by team' },
  { value: false, text: 'Forfeit by opponent' }
];

export const trophyWinnerOptions = [
  { value: '', text: '' },
  { value: true, text: 'Winner' },
  { value: false, text: 'Runner-up' }
];

export const playerOptions = (result, players) => {
  const matchPlayerIds = result.players
    ? result.players.map(player => player.player_id._id)
    : [];
  const unselectedPlayers = players.filter(
    player => !matchPlayerIds.includes(player._id)
  );

  const playerList = unselectedPlayers.map(player => ({
    text: player.name,
    value: player._id
  }));

  return [{ text: '', value: '' }, ...playerList];
};
