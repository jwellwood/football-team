export interface IResultInput {
  date?: string | Date;
  type: string;
  isHome: boolean;
  isForfeit: boolean;
  isOwnForfeit?: boolean;
  opponentName: string;
  teamGoals: number;
  opponentGoals: number;
  matchReport: string;
}
