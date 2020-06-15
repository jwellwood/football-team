import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
// MUI
import Grid from '@material-ui/core/Grid';

export const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
}));

const SectionTitle = ({ title, link, text }) => {
  const classes = useStyles();

  const editLink = link ? (
    <Button
      variant='contained'
      component={RouterLink}
      to={link}
      disabled={link === 'locked'}
      color='primary'
    >
      {text || 'edit'}
    </Button>
  ) : null;

  return (
    <Grid container direction='row' justify='space-between'>
      <Typography variant='h6' color='textSecondary' className={classes.header}>
        {title}
      </Typography>
      {editLink}
    </Grid>
  );
};

export default SectionTitle;
