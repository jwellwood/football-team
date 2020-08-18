export interface IResultPlayerStats {
  _id?: string;
  player_id: any; // TODO
  goals: number;
  assists: number;
  mvp: boolean;
  conceded: number;
  pensScored: number;
  pensMissed: number;
  ownGoals: number;
  yellowCards: number;
  redCard: boolean;
}

export interface IResultPlayerId {
  _id: string;
  name: string;
}
