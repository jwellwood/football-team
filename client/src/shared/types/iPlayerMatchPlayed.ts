import { IResult } from './iResult';

export interface IPlayerMatchPlayed {
  goals: number;
  assists: number;
  conceded: number;
  pensScored: number;
  pensMissed: number;
  ownGoals: number;
  yellowCards: number;
  mvp: boolean;
  redCard: boolean;
  _id: string;
  result: IResult;
}
