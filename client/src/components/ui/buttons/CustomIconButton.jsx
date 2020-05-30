import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const CustomIconButton = ({ type, onClick, color }) => {
  const customIcon = (
    <IconButton onClick={onClick} edge='end' color={color || 'secondary'}>
      <Icon>{type}</Icon>
    </IconButton>
  );

  return customIcon;
};

export default CustomIconButton;
