import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// MUI
import IconButton from '@material-ui/core/IconButton';
// Internal
import CustomIcon from '../icons/CustomIcon';

const EditImageButton = ({ link }) => {
  const icon = link === 'locked' ? 'lock' : 'camera';
  const linkTo = link === 'locked' ? null : link;
  return (
    <IconButton
      aria-label='delete'
      color='primary'
      component={RouterLink}
      to={linkTo}
    >
      <CustomIcon size='sm' icon={icon} />
    </IconButton>
  );
};

export default EditImageButton;
