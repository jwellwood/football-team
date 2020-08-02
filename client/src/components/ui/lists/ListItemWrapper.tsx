import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// MUI
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

interface Props {
  children: React.ReactNode;
  button?: true;
  linkTo?: string;
  onClick?: () => void;
  noDivider?: boolean;
}

const ListItemWrapper: React.FC<Props> = ({
  children,
  button,
  linkTo,
  onClick,
  noDivider,
}) => {
  return (
    <>
      {noDivider ? null : <Divider />}
      <ListItem
        button={button}
        component={linkTo ? RouterLink : null}
        to={linkTo}
        onClick={onClick}
      >
        {children}
      </ListItem>
    </>
  );
};

export default ListItemWrapper;
