import { base_year, currentYear } from 'constants/data';

export const $initAddTeamFormState = {
  name: '',
  location: '',
  league: '',
  position: '',
};

export const $initAwardFormState = {
  awardName: '',
  awardWinner: '',
  awardValue: '',
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

export const $initPreviousSeasonFormState = {
  year: currentYear,
  seasonName: '',
  win: 0,
  draw: 0,
  lose: 0,
  goalsFor: 0,
  goalsAgainst: 0,
  finalPosition: 0,
};
