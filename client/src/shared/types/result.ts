export interface IResult {
  _id?: string;
  type?: string;
  date: string;
  teamGoals: number;
  opponentGoals: number;
  opponentName: string;
  isForfeit: boolean;
  points: number;
}

export const IResultState = {
  date: '',
  teamGoals: 0,
  opponentGoals: 0,
  opponentName: '',
  isForfeit: false,
  points: 0,
};
