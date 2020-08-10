import { IAward } from '.';

export interface IPreviousSeason {
  _id?: string;
  team?: string;
  seasonName: string;
  year: number;
  finalPosition: number;
  win: number;
  draw: number;
  lose: number;
  goalsFor: number;
  goalsAgainst: number;
  awards?: IAward[];
}
