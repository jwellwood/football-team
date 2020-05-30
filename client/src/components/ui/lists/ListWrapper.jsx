import React from 'react';
// MUI
import List from '@material-ui/core/List';

const ListWrapper = ({ children, dense }) => {
  return <List dense={dense}>{children}</List>;
};

export default ListWrapper;
