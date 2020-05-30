import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Internal
import CircularImage from 'components/ui/images/CircularImage';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import GridItem from 'components/ui/grids/GridItem';
import badge from 'assets/images/badge.jpg';

export const useStyles = makeStyles((theme) => ({
  main: {
    color: theme.palette.secondary.light,
    fontSize: '5rem',
  },
}));

const Title = ({ team }) => {
  const name = team ? team.name.split(' ') : [];
  const [first, ...rest] = name;
  const classes = useStyles();

  const title = (
    <GridItem align='left'>
      <Typography variant='h1' className={classes.main}>
        {first}
      </Typography>
      <Typography
        variant='h4'
        color='primary'
        style={{ textTransform: 'lowercase' }}
      >
        {rest.join(' ')}
      </Typography>
    </GridItem>
  );

  return (
    <CenteredGrid dir='row' just='space-evenly'>
      {title}
      <CircularImage image={badge} size='100px' />
    </CenteredGrid>
  );
};

export default Title;
