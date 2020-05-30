import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// MUI
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from './styles'; // Styles
import { PROFILE } from 'router/route_names';
import CustomIcon from '../icons/CustomIcon';

const BackButton = ({ backTo, disabled }) => {
  const classes = useStyles();

  let link = backTo || PROFILE;

  return (
    <IconButton
      component={RouterLink}
      to={link}
      color='secondary'
      className={classes.button}
      disabled={disabled}
    >
      <CustomIcon icon='arrow-left' size='xs' />
    </IconButton>
  );
};

export default BackButton;
