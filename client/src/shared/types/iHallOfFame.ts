export interface IHallOfFame {
  id?: string; // Team ID
  _id?: string;
  name: string;
  yearInducted: number;
  yearJoined: number;
  yearLeft: number;
  description?: string;
}
