import { ISelectOptions } from 'components/inputs/SelectInput';

export const leaguePositionOptions: Function = (): ISelectOptions[] => {
  let options: ISelectOptions[] = [{ text: '0', value: '0' }];
  for (let i = 1; i < 21; i++) {
    options.push({ text: i.toString(), value: i.toString() });
  }
  return options;
};
