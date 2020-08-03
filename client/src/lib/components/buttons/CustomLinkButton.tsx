import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

interface Props {
  children: string;
  link: string;
  type?: any;
  color?: any;
}

const CustomLinkButton: React.FC<Props> = ({
  children,
  link,
  type = 'text',
  color = 'secondary',
}) => {
  return (
    <Button variant={type} component={RouterLink} to={link} color={color}>
      {children}
    </Button>
  );
};

export default CustomLinkButton;
