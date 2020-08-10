import { IImage, IPlayerMatchPlayed } from '.';

export interface IPlayer {
  _id: string;
  name: string;
  squadNumber: number;
  position: string;
  image: IImage;
  description: string;
  yearJoined: number;
  appsTarget: number;
  goalsTarget: number;
  assistsTarget: number;
  matchesPlayed: IPlayerMatchPlayed[];
  isCaptain?: boolean;
}

export interface IPlayerStats {
  apps: number;
  assists: number;
  conceded: number;
  goals: number;
  mvps: number;
  ownGoals: number;
  pensMissed: number;
  pensScored: number;
  redCards: number;
  winPercentage: string;
  yellowCards: number;
}
