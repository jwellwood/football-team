import React from 'react';
import Button from '@material-ui/core/Button';

interface Props {
  children?: string;
  onClick?: () => void;
  type?: any;
  disabled?: boolean;
  color?: any;
}

const CustomButton: React.FC<Props> = ({
  children,
  onClick,
  type,
  disabled,
  color = 'secondary',
}) => {
  return (
    <Button
      variant='outlined'
      onClick={onClick}
      type={type}
      disabled={disabled}
      color={color}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
