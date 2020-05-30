import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
// MUI
import Grid from '@material-ui/core/Grid';
import CustomIconButton from '../buttons/CustomIconButton';
export const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
}));

const SectionTitle = ({ title, link, text }) => {
  const classes = useStyles();

  const editLink = link ? (
    <Button component={RouterLink} to={link} color='primary'>
      {text || 'edit'}
    </Button>
  ) : null;

  const locked = <CustomIconButton type='lock' />;
  return (
    <Grid container direction='row' justify='space-between'>
      <Typography variant='h6' color='textSecondary' className={classes.header}>
        {title}
      </Typography>
      {link === 'locked' ? locked : editLink}
    </Grid>
  );
};

export default SectionTitle;
