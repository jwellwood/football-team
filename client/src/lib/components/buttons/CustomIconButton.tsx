import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

interface Props {
  type: string;
  onClick: () => void;
  color: any; // TODO
}

const CustomIconButton: React.FC<Props> = ({
  type,
  onClick,
  color = 'secondary',
}) => {
  const customIcon = (
    <IconButton onClick={onClick} edge='end' color={color}>
      <Icon>{type}</Icon>
    </IconButton>
  );

  return customIcon;
};

export default CustomIconButton;
