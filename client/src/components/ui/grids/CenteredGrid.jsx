import React from 'react';
import Grid from '@material-ui/core/Grid';

const CenteredGrid = ({ children, dir, just, cont, item, spacing }) => {
  return (
    <Grid
      container
      direction={dir || 'column'}
      justify={just || 'center'}
      alignContent={cont || 'center'}
      alignItems={item || 'center'}
      spacing={spacing || 1}
    >
      {children}
    </Grid>
  );
};

export default CenteredGrid;
