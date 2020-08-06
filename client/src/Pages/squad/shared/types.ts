import { IPlayer } from 'shared/types';

export interface IStatBoxDetails {
  text: string;
  value: number | string;
}

export interface IPlayerByPosition {
  text: string;
  value: IPlayer[];
}

export interface ISquadTargets {
  targetApps: number;
  targetAssists: number;
  targetGoals: number;
  targetTotal: number;
}
export interface ISquadTotals {
  totalApps: number;
  totalAssists: number;
  totalGoals: number;
  totalOverall: number;
}

export interface ISquadPercentages {
  apps: string;
  assists: string;
  goals: string;
  overall: string;
}

export interface ILeaderboardStat {
  name: string;
  stat: number;
}

export interface ILeaderboardData {
  title: string;
  icon: string;
  value: ILeaderboardStat | ILeaderboardStat[];
}
