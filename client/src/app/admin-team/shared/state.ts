import { base_year, currentYear } from 'constants/data';

export const $initAddTeamFormState = {
  name: '',
  location: '',
  league: '',
  position: '',
  currentSeason: '',
};

export const $initHOFFormState = {
  name: '',
  yearInducted: base_year,
  yearJoined: base_year,
  yearLeft: base_year,
  description: '',
};

export const $initTrophyFormState = {
  name: '',
  year: currentYear,
  isWinner: false,
  isFinal: false,
};
