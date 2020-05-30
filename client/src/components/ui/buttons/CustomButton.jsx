import React from 'react';
import Button from '@material-ui/core/Button';
const CustomButton = ({ children, onClick, type, disabled, color }) => {
  return (
    <Button
      variant='outlined'
      onClick={onClick}
      type={type}
      disabled={disabled}
      color={color || 'secondary'}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
