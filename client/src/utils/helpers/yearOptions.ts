import { base_year, max_year } from 'constants/data';

interface IYearOptions {
  text: string;
  value: number;
}

export const yearOptions: Function = (
  minYear: number = base_year,
  maxYear: number = max_year
): IYearOptions[] => {
  if (typeof minYear !== 'number') minYear = +minYear;
  if (typeof maxYear !== 'number') maxYear = +maxYear;
  const years = [];
  for (let i: number = minYear; i <= maxYear; i++) {
    years.push(i);
  }
  return years.map((year) => ({ text: year.toString(), value: year }));
};
