import { ReactElement } from 'react';

export interface IPlayerTargetsData {
  title: string;
  icon: string;
  value: number;
  secondary: number;
}

export interface IPlayerStats {
  apps: number;
  assists: number;
  conceded: number;
  goals: number;
  mvps: number;
  ownGoals: number;
  pensMissed: number;
  pensScored: number;
  redCards: number;
  winPercentage: string;
  yellowCards: number;
}

export interface IPlayerStatsListData {
  text: string;
  icon: string;
  value: number | string;
  noDivider?: boolean;
  secondary?: string;
}

export interface IPlayerAveragesTableData {
  title: string;
  component: ReactElement;
}

export interface IPlayerAveragesListData {
  title: string;
  value: string;
}
