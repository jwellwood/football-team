import { IResultPlayerStats } from '.';

export interface IResult {
  _id?: string;
  isForfeit: boolean;
  isOwnForfeit?: boolean;
  isHome: boolean;
  teamGoals: number;
  opponentGoals: number;
  date?: string;
  opponentName: string;
  type: string;
  points?: number;
  players: IResultPlayerStats[];
  matchReport?: string;
  createdAt?: string;
  updatedAt?: string;
}
