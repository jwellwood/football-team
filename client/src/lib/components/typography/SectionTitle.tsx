import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CustomTypography from './CustomTypography';

interface Props {
  title: string;
  link?: string;
  text?: string;
}

const SectionTitle: React.FC<Props> = ({ title, link, text = 'edit' }) => {
  const editLink = link ? (
    <Button
      variant='contained'
      component={RouterLink}
      to={link}
      disabled={link === 'locked'}
      color='primary'
    >
      {text}
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
