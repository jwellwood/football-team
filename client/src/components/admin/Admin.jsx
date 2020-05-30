import React from 'react';
// Internal
import ListWrapper from 'components/ui/lists/ListWrapper';
import AdminLink from './AdminLink';
import {
  ADMIN_USERS,
  // ADMIN_TEAM_ADD,
  ADMIN_TEAM_EDIT,
  ADMIN_RESULTS,
  ADMIN_TROPHIES,
  ADMIN_HOF,
  ADMIN_RESULTS_ADD,
  ADMIN_TEAM_EDIT_PHOTO,
  ADMIN_PREVIOUS_SEASON,
} from 'router/route_names';

const Admin = () => {
  const data = [
    {
      text: 'Results',
      icon: 'list-ul',
      links: [
        { text: 'Add Result', icon: 'plus', link: ADMIN_RESULTS_ADD },
        { text: 'Edit Results', icon: 'pen', link: ADMIN_RESULTS },
      ],
    },
    {
      text: 'Users',
      icon: 'user-friends',
      links: [{ text: 'Set permissions', icon: 'cog', link: ADMIN_USERS }],
    },
    {
      text: 'Team',
      icon: 'shield-alt',
      links: [
        // { text: 'Add', icon: 'plus', link: ADMIN_TEAM_ADD },
        { text: 'Details', icon: 'pen', link: ADMIN_TEAM_EDIT },
        { text: 'Photo', icon: 'camera', link: ADMIN_TEAM_EDIT_PHOTO },
        { text: 'Trophies', icon: 'trophy', link: ADMIN_TROPHIES },
        { text: 'Hall of Fame', icon: 'landmark', link: ADMIN_HOF },
        {
          text: 'Previous Seasons',
          icon: 'monument',
          link: ADMIN_PREVIOUS_SEASON,
        },
      ],
    },
  ];

  return (
    <ListWrapper>
      {data.map((item) => (
        <AdminLink key={item.text} item={item} />
      ))}
    </ListWrapper>
  );
};

export default Admin;
