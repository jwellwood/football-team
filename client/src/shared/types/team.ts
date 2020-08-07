export interface ITeam {
  _id?: string;
  id?: string;
  name: string;
  location: string;
  position: string;
  league: string;
  teamPhoto?: {
    url: string;
    public_id: number;
  };
  trophies?: ITrophy[];
  hallOfFame?: IHallOfFame[];
}

export interface ITrophy {
  _id?: string;
  id?: string; // Team ID
  name: string;
  year: string;
  isWinner: boolean;
  opponent?: string;
  description?: string;
  isFinal?: boolean;
}

export interface IHallOfFame {
  _id?: string;
  id?: string; // Team ID
  name: string;
  yearInducted: number;
  yearJoined: number;
  yearLeft: number;
  description?: string;
}

export interface IPreviousSeason {
  _id?: string;
  team?: string;
  year: number;
  seasonName: string;
  win: number;
  draw: number;
  lose: number;
  goalsFor: number;
  goalsAgainst: number;
  finalPosition: number;
  awards?: ISeasonAward[];
}

export interface ISeasonAward {
  _id?: string;
  awardName: string;
  awardWinner: string;
  awardValue: string;
}
