import { ISelectOptions } from 'components/inputs/SelectInput';

export const forfeitOptions: ISelectOptions[] = [
  { value: '', text: '' },
  { value: true, text: 'Forfeit by team' },
  { value: false, text: 'Forfeit by opponent' },
];
