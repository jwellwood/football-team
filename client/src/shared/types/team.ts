export interface ITeamData {
  name: string;
  location: string;
  position: string;
  league: string;
  teamPhoto: {
    url: string;
    public_id: number;
  };
  trophies: ITrophyData[];
}

export interface ITrophyData {
  _id: string;
  name: string;
  year: string;
  isWinner: boolean;
  opponent?: string;
  description?: string;
}

export interface IHallOfFameData {
  name: string;
  yearInducted: number;
  yearJoined: number;
  yearLeft: number;
  description?: string;
}

export interface IPreviousSeasonData {
  team: string;
  year: number;
  seasonName: string;
  win: number;
  draw: number;
  lose: number;
  goalsFor: number;
  goalsAgainst: number;
  finalPosition: number;
  awards: ISeasonAwardData[];
}

export interface ISeasonAwardData {
  _id: string;
  awardName: string;
  awardWinner: string;
  awardValue: string;
}
