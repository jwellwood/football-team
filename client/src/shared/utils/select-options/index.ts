export interface IStringValueOptions {
  text: string;
  value: string;
}

export interface INumberValueOptions {
  text: number;
  value: number;
}
export interface IMixedValueOptions {
  text: string | boolean;
  value: string | boolean;
}

export const matchTypeOptions: IStringValueOptions[] = [
  { text: '', value: '' },
  { text: 'League', value: 'League' },
  { text: 'Cup', value: 'Cup' },
  { text: 'Tournament', value: 'Tournament' },
  { text: 'Friendly', value: 'Friendly' },
];

export const positionOptions: IStringValueOptions[] = [
  { value: '', text: '' },
  { value: 'GK', text: 'Goalkeeper' },
  { value: 'DF', text: 'Defender' },
  { value: 'MF', text: 'Midfielder' },
  { value: 'FW', text: 'Forward' },
];

export const getLeaguePositionOptions: Function = (): INumberValueOptions[] => {
  let options: INumberValueOptions[] = [{ text: 0, value: 0 }];
  for (let i = 1; i < 21; i++) {
    options.push({ text: i, value: i });
  }
  return options;
};

export const homeOrAwayOptions: IMixedValueOptions[] = [
  { value: '', text: '' },
  { value: true, text: 'Home' },
  { value: false, text: 'Away' },
];

export const forfeitOptions: IMixedValueOptions[] = [
  { value: '', text: '' },
  { value: true, text: 'Forfeit by team' },
  { value: false, text: 'Forfeit by opponent' },
];

export const trophyWinnerOptions: IMixedValueOptions[] = [
  { value: '', text: '' },
  { value: true, text: 'Winner' },
  { value: false, text: 'Runner-up' },
];

export const playerOptions: Function = (result, players) => {
  const matchPlayerIds = result.players
    ? result.players.map((player) => player.player_id._id)
    : [];
  const unselectedPlayers = players.filter(
    (player) => !matchPlayerIds.includes(player._id)
  );

  const playerList = unselectedPlayers.map((player) => ({
    text: player.name,
    value: player._id,
  }));

  return [{ text: '', value: '' }, ...playerList];
};

export const yearOptions: Function = (
  minYear: number = 2005,
  maxYear: number = 2050
): INumberValueOptions[] => {
  const years = [];
  for (let i: number = minYear; i <= maxYear; i++) {
    years.push(i);
  }
  return years.map((year) => ({ text: year.toString(), value: year }));
};
