import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface IAdminLinkData {
  text: string;
  icon: IconName;
  links: IAdminLink[];
}

export interface IAdminLink {
  text: string;
  icon: IconName;
  link: string;
}
