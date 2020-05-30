// Links, icons and text for navlink list inside the drawer
// Contolled by auth status
// ------------------------------------------------------
import React from 'react';
import {
  HOME,
  RESULTS,
  SQUAD,
  TEAM,
  ABOUT,
  PROFILE,
  SIGN_IN,
  ADMIN,
  PLAYERS_STATS,
  RESULTS_STATS,
} from 'router/route_names';
// Internal
import ListItemLink from 'components/ui/link/ListLinkItem';
import LogoutButton from 'components/ui/buttons/LogoutButton';
import CustomImageAvatar from 'components/ui/avatars/CustomImageAvatar';
import CustomDivider from 'components/ui/dividers/CustomDivider';
import ListWrapper from 'components/ui/lists/ListWrapper';

const NavDrawerList = ({ onSelect, onLogout, auth, admin, user }) => {
  const nav_items = [
    { text: 'Home', icon: 'home', link: HOME },
    { text: 'Results', icon: 'list-ul', link: RESULTS },
    { text: 'Squad', icon: 'user-friends', link: SQUAD },
    { text: 'Team', icon: 'shield-alt', link: TEAM },
    { text: 'Result Stats', icon: 'chart-pie', link: RESULTS_STATS },
    { text: 'Player Stats', icon: 'chart-line', link: PLAYERS_STATS },
    { text: 'About', icon: 'question-circle', link: ABOUT },
  ];

  const auth_items = [
    {
      text: 'Sign In',
      icon: 'sign-in-alt',
      link: SIGN_IN,
      guard: !auth,
    },
    {
      text: 'Admin',
      icon: 'user-cog',
      link: ADMIN,
      guard: auth && admin,
    },
  ];

  const userDetails =
    user && auth ? (
      <>
        <ListItemLink
          avatar={<CustomImageAvatar image={user.image.url} />}
          text={user.name}
          secondary={user.email}
          to={PROFILE}
          onClick={onSelect}
        />
        <CustomDivider />
      </>
    ) : null;

  const logout = auth ? <LogoutButton onClick={onLogout} /> : null;

  return (
    <ListWrapper>
      {userDetails}
      {nav_items.map((item) => (
        <ListItemLink
          key={item.text}
          to={item.link}
          text={item.text}
          icon={item.icon}
          onClick={onSelect}
        />
      ))}
      <CustomDivider />
      {auth_items.map((item) =>
        item.guard ? (
          <ListItemLink
            key={item.text}
            to={item.link}
            text={item.text}
            icon={item.icon}
            onClick={onSelect}
          />
        ) : null
      )}
      {logout}
    </ListWrapper>
  );
};

export default NavDrawerList;
