import React from 'react';
// MUI
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Copyright = () => {
  return (
    <Box mt={5}>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href='https://material-ui.com/'>
          jwellwood
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Copyright;
