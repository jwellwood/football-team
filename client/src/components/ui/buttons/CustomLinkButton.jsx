import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const CustomLinkButton = ({ children, link, type, color }) => {
  return (
    <Button
      variant={type || 'text'}
      component={RouterLink}
      to={link}
      color={color || 'secondary'}
    >
      {children}
    </Button>
  );
};

export default CustomLinkButton;
