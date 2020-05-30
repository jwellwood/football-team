import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

export const useStyles = makeStyles((theme) => ({
  divider: {
    background: theme.palette.secondary.dark,
    width: '3px',
  },
}));

const CustomDivider = ({ isVertical }) => {
  const classes = useStyles();
  return isVertical ? (
    <Divider orientation='vertical' className={classes.divider} flexItem />
  ) : (
    <Divider />
  );
};

export default CustomDivider;
