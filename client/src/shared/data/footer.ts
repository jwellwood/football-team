import { version } from '.';

interface IFooterData {
  name: string;
  link: string;
  date: number;
  version: string;
}

export const footer_data: IFooterData = {
  name: 'jwellwood',
  link: 'https://github.com/jwellwood',
  date: new Date().getFullYear(),
  version: version,
};
