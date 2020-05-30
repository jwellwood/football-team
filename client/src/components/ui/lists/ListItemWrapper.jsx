import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// MUI
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const ListItemWrapper = ({ children, button, linkTo, onClick, noDivider }) => {
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
