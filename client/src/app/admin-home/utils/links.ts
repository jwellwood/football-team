import { admin_routes } from 'router';
import { IAdminLinkData } from '../shared/types';

export const adminLinks: IAdminLinkData[] = [
  {
    text: 'Results',
    icon: 'list-ul',
    links: [
      {
        text: 'Add Result',
        icon: 'plus',
        link: admin_routes.ADMIN_RESULTS_ADD,
      },
      { text: 'Edit Results', icon: 'pen', link: admin_routes.ADMIN_RESULTS },
    ],
  },
  {
    text: 'Users',
    icon: 'user-friends',
    links: [
      {
        text: 'Set permissions',
        icon: 'cog',
        link: admin_routes.ADMIN_USERS,
      },
    ],
  },
  {
    text: 'Team',
    icon: 'shield-alt',
    links: [
      // { text: 'Add', icon: 'plus', link: ADMIN_TEAM_ADD },
      { text: 'Details', icon: 'pen', link: admin_routes.ADMIN_TEAM_EDIT },
      {
        text: 'Photo',
        icon: 'camera',
        link: admin_routes.ADMIN_TEAM_EDIT_PHOTO,
      },
      { text: 'Trophies', icon: 'trophy', link: admin_routes.ADMIN_TROPHIES },
      {
        text: 'Hall of Fame',
        icon: 'landmark',
        link: admin_routes.ADMIN_HOF,
      },
      {
        text: 'Previous Seasons',
        icon: 'monument',
        link: admin_routes.ADMIN_PREVIOUS_SEASON,
      },
    ],
  },
];
