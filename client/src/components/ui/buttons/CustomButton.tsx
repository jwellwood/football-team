import React from 'react';
import Button from '@material-ui/core/Button';

export interface ICustomButton {
  children?: string;
  onClick?: () => void;
  type?: string;
  disabled?: boolean;
  color?: string;
}

const CustomButton = ({
  children,
  onClick,
  type,
  disabled,
  color,
}): ICustomButton => {
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
