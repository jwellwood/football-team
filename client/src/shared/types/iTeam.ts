import { IImage, ITrophy, IHallOfFame } from '.';

export interface ITeam {
  id?: string;
  _id?: string;
  badge?: IImage;
  teamPhoto?: IImage;
  name: string;
  location: string;
  league: string;
  position: string;
  trophies?: ITrophy[];
  hallOfFame?: IHallOfFame[];
  currentSeason?: string;
}
