export interface IResult {
  _id?: string;
  type?: string;
  date: string;
  teamGoals: number;
  opponentGoals: number;
  opponentName: string;
  isForfeit?: boolean;
  isOwnForfeit?: boolean;
  points?: number;
  isHome?: boolean;
  matchReport?: string;
  players?: IMatchPlayer[];
}

export interface IMatchPlayer {
  assists: number;
  conceded: number;
  goals: number;
  mvp: boolean;
  ownGoals: number;
  pensMissed: number;
  pensScored: number;
  player_id: IMatchPlayerID;
  redCard: boolean;
  yellowCards: number;
}

export interface IMatchPlayerID {
  _id: string;
  name: string;
}

export const IResultState = {
  date: '',
  teamGoals: 0,
  opponentGoals: 0,
  opponentName: '',
  isForfeit: false,
};
