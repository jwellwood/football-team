import { currentYear } from 'constants/data';

export const $initAwardFormState = {
  awardName: '',
  awardWinner: '',
  awardValue: '',
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
