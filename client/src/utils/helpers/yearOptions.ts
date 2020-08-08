import { ISelectOptions } from 'lib/components/inputs/SelectInput';

export const yearOptions: Function = (
  minYear: number = 2005,
  maxYear: number = 2050
): ISelectOptions[] => {
  const years = [];
  for (let i: number = minYear; i <= maxYear; i++) {
    years.push(i);
  }
  return years.map((year) => ({ text: year.toString(), value: year }));
};
