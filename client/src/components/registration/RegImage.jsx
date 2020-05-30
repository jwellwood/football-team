import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// assets
import teamPhoto from 'assets/images/badge.jpg';
// Components
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import CircularImage from 'components/ui/images/CircularImage';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    maxHeight: '30vh',
    marginBottom: theme.spacing(3),
  },
}));
const RegImage = () => {
  const classes = useStyles();
  return (
    <CenteredGrid>
      <Grid item sm={4} align='center' className={classes.imageContainer}>
        <CircularImage image={teamPhoto} />
      </Grid>
    </CenteredGrid>
  );
};

export default RegImage;
