export interface ITrophy {
  id?: string; // Team ID
  _id?: string;
  name: string;
  year: number;
  isWinner: boolean;
  isFinal: boolean;
  opponent?: string;
  description?: string;
}
