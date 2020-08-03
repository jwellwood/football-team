import React from 'react';
import { visitor_routes, admin_routes, reg_routes, user_routes } from 'router';
import { IUserData } from 'shared/types';
import ListItemLink from 'components/ui/link/ListLinkItem';
import LogoutButton from 'components/ui/buttons/LogoutButton';
import CustomImageAvatar from 'lib/components/avatars/CustomImageAvatar';
import CustomDivider from 'lib/components/dividers/CustomDivider';
import ListWrapper from 'components/ui/lists/ListWrapper';

interface Props {
  onSelect: () => void;
  onLogout: (e: any) => void;
  auth: boolean;
  admin: boolean;
  user: IUserData;
}

interface ILinkList {
  text: string;
  icon: string;
  link: string;
  guard?: boolean;
}

const NavDrawerList: React.FC<Props> = ({
  onSelect,
  onLogout,
  auth,
  admin,
  user,
}) => {
  const nav_items: ILinkList[] = [
    { text: 'Home', icon: 'home', link: visitor_routes.HOME },
    { text: 'Results', icon: 'list-ul', link: visitor_routes.RESULTS },
    { text: 'Squad', icon: 'user-friends', link: visitor_routes.SQUAD },
    { text: 'Team', icon: 'shield-alt', link: visitor_routes.TEAM },
    {
      text: 'Result Stats',
      icon: 'chart-pie',
      link: visitor_routes.RESULTS_STATS,
    },
    {
      text: 'Player Stats',
      icon: 'chart-line',
      link: visitor_routes.PLAYERS_STATS,
    },
    { text: 'About', icon: 'question-circle', link: visitor_routes.ABOUT },
  ];

  const auth_items: ILinkList[] = [
    {
      text: 'Sign In',
      icon: 'sign-in-alt',
      link: reg_routes.SIGN_IN,
      guard: !auth,
    },
    {
      text: 'Admin',
      icon: 'user-cog',
      link: admin_routes.ADMIN,
      guard: auth && admin,
    },
  ];

  const userDetails =
    user && auth ? (
      <>
        <ListItemLink
          avatar={<CustomImageAvatar imageUrl={user.image.url} />}
          text={user.name}
          secondary={user.email}
          to={user_routes.PROFILE}
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
