import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

interface Props {
  children: string;
  link: string;
  type?: any;
  color?: any;
  disabled?: boolean;
}

const CustomLinkButton: React.FC<Props> = ({
  children,
  link,
  type = 'text',
  color = 'secondary',
  disabled = false,
}) => {
  return (
    <Button
      variant={type}
      component={RouterLink}
      to={link}
      color={color}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default CustomLinkButton;
