import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
// Components
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import CustomText from 'components/ui/text/CustomText';
import ValueText from 'components/ui/text/ValueText';

export const useStyles = makeStyles((theme) => ({
  number_avatar: {
    width: 30,
    height: 30,
    fontSize: '0.8rem',
    fontWeight: 'bold',
    background: theme.palette.secondary.dark,
  },
}));

const StatBoxes = ({ detailsToShow }) => {
  const classes = useStyles();
  return (
    <Grid>
      <CenteredGrid dir='row'>
        {detailsToShow.map((item, i) => (
          <Grid item key={i} align='center'>
            <Avatar className={classes.number_avatar}>
              <ValueText>{item.value}</ValueText>
            </Avatar>
            <CustomText type='caption'>{item.text}</CustomText>
          </Grid>
        ))}
      </CenteredGrid>
    </Grid>
  );
};

export default StatBoxes;
