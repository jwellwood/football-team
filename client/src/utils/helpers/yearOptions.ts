import { ISelectOptions } from 'components/inputs/SelectInput';
import { base_year, max_year } from 'constants/data';

export const yearOptions: Function = (
  minYear: number = base_year,
  maxYear: number = max_year
): ISelectOptions[] => {
  const years = [];
  for (let i: number = minYear; i <= maxYear; i++) {
    years.push(i);
  }
  return years.map((year) => ({ text: year.toString(), value: year }));
};
