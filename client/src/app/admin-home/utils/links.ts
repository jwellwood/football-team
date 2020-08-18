import { admin_routes } from 'router';
import { IAdminLinkData } from '../shared/types';
import { link_text } from 'constants/text';

export const adminLinks: IAdminLinkData[] = [
  {
    text: link_text.results,
    icon: 'list-ul',
    links: [
      {
        text: link_text.add_result,
        icon: 'plus',
        link: admin_routes.ADMIN_RESULTS_ADD,
      },
      {
        text: link_text.edit_result,
        icon: 'pen',
        link: admin_routes.ADMIN_RESULTS,
      },
    ],
  },
  {
    text: link_text.users,
    icon: 'user-friends',
    links: [
      {
        text: link_text.set_permissions,
        icon: 'cog',
        link: admin_routes.ADMIN_USERS,
      },
    ],
  },
  {
    text: link_text.team,
    icon: 'shield-alt',
    links: [
      // { text: 'Add', icon: 'plus', link: ADMIN_TEAM_ADD },
      {
        text: link_text.team_details,
        icon: 'pen',
        link: admin_routes.ADMIN_TEAM_EDIT,
      },
      {
        text: link_text.team_photo,
        icon: 'camera',
        link: admin_routes.ADMIN_TEAM_EDIT_PHOTO,
      },
      {
        text: link_text.trophies,
        icon: 'trophy',
        link: admin_routes.ADMIN_TROPHIES,
      },
      {
        text: link_text.hall_of_fame,
        icon: 'landmark',
        link: admin_routes.ADMIN_HOF,
      },
      {
        text: link_text.previous_seasons,
        icon: 'monument',
        link: admin_routes.ADMIN_PREVIOUS_SEASON,
      },
    ],
  },
];
