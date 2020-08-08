import { version } from 'shared/data';

interface IFooter {
  name: string;
  link: string;
  date: number;
  version: string;
}

export const footer_data: IFooter = {
  name: 'jwellwood',
  link: 'https://github.com/jwellwood',
  date: new Date().getFullYear(),
  version: version,
};
