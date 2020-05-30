import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CenteredGrid from '../grids/CenteredGrid';
import StatIcon from '../icons/StatIcon';

export const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
}));

const SectionSubtitle = ({ title, icon }) => {
  const classes = useStyles();

  return (
    <CenteredGrid dir='row' just={icon ? 'space-between' : 'center'}>
      {icon ? <StatIcon type={icon} size='lg' /> : null}

      <Typography
        variant='subtitle2'
        color='textSecondary'
        className={classes.header}
      >
        {title}
      </Typography>
    </CenteredGrid>
  );
};

export default SectionSubtitle;
