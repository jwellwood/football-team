import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// MUI
import Button from '@material-ui/core/Button';
// Internal
import CustomIcon from '../../../lib/components/icons/CustomIcon';

const EditImageButton = ({ link }) => {
  return (
    <Button
      variant='contained'
      aria-label='delete'
      color='primary'
      component={RouterLink}
      to={link}
      disabled={link === 'locked'}
      startIcon={<CustomIcon size='sm' icon='camera' />}
    >
      edit photo
    </Button>
  );
};

export default EditImageButton;
