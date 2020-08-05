import React from 'react';
// MUI
import List from '@material-ui/core/List';

interface Props {
  children: React.ReactNode;
  dense?: boolean;
}

const ListWrapper: React.FC<Props> = ({ children, dense = false }) => {
  return <List dense={dense}>{children}</List>;
};

export default ListWrapper;
