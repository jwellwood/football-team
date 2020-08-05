export interface IPlayer {
  name: string;
  squadNumber: number;
  position: string;
  image: IPlayerImage;
  description: string;
  yearJoined: number;
  appsTarget: number;
  goalsTarget: number;
  assistsTarget: number;
  matchesPlayed: IPlayerMatches[];
}

export interface IPlayerMatches {
  assists: number;
  conceded: number;
  goals: number;
  mvp: boolean;
  ownGoals: number;
  pensMissed: number;
  pensScored: number;
  redCard: boolean;
  result: IPlayerMatchResult;
  yellowCards: number;
  _id: string;
}

export interface IPlayerMatchResult {
  date: string;
  isHome: false;
  opponentGoals: number;
  opponentName: string;
  points: number;
  teamGoals: number;
  type: string;
  _id: string;
}

interface IPlayerImage {
  url: string;
  public_id: number;
}
