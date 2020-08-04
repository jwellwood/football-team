import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import badge from 'shared/assets/images/badge.jpg';
import { ITeamData } from 'shared/types';
import CircularImage from 'components/ui/images/CircularImage';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import GridItem from 'lib/components/grids/GridItem';

export const useStyles = makeStyles((theme) => ({
  main: {
    color: theme.palette.secondary.light,
    fontSize: '5rem',
  },
}));

interface Props {
  team: ITeamData;
}

const Title: React.FC<Props> = ({ team }) => {
  const name = team ? team.name.split(' ') : [];
  const [first, ...rest] = name;
  const classes = useStyles();

  const title = (
    <GridItem>
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
