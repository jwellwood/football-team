import React from 'react';
import Typography from '@material-ui/core/Typography';
import BackButton from '../buttons/BackButton';
import Divider from '@material-ui/core/Divider';
import CenteredGrid from '../grids/CenteredGrid';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  divider: {
    background: theme.palette.secondary.main,
  },
}));
const PageHeader = ({ title, backTo }) => {
  const classes = useStyles();
  return (
    <>
      <Divider className={classes.divider} />
      <CenteredGrid just='flex-start' dir='row'>
        <BackButton backTo={backTo} disabled={backTo === 'disabled'} />
        <Typography
          variant='h5'
          color='textSecondary'
          style={{ fontWeight: 'bold' }}
        >
          {title}
        </Typography>
      </CenteredGrid>
      <Divider className={classes.divider} style={{ marginBottom: '10px' }} />
    </>
  );
};

export default PageHeader;
