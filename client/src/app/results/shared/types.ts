import { ReactElement } from 'react';

export interface IResultVersusData {
  title: string;
  icon: string;
  value: number;
  secondaryList: IVersusGame[];
}

export interface IVersusGame {
  conceded: number;
  date: string;
  name: string;
  scored: number;
}

export interface IResultTotalsData {
  divider?: boolean;
  title: string | ReactElement;
  value: any;
}
