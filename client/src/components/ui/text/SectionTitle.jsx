import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// MUI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CustomTypography from './CustomTypography';

const SectionTitle = ({ title, link, text }) => {
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
      <div style={{ marginBottom: '10px' }}>
        <CustomTypography main bold>
          {title}
        </CustomTypography>
      </div>
      {editLink}
    </Grid>
  );
};

export default SectionTitle;
