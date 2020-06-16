import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
// Components
import BackButton from '../buttons/BackButton';
import CenteredGrid from '../grids/CenteredGrid';
import CustomTypography from './CustomTypography';

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
        <CustomTypography bold main size='lg'>
          {title}
        </CustomTypography>
      </CenteredGrid>
      <Divider className={classes.divider} style={{ marginBottom: '10px' }} />
    </>
  );
};

export default PageHeader;
