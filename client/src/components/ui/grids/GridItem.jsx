import React from 'react';
import Grid from '@material-ui/core/Grid';

const GridItem = ({ children, xs, sm, md, lg, align }) => {
  return (
    <Grid
      item
      xs={xs || 12}
      sm={sm || 6}
      md={md || 6}
      lg={lg || 6}
      align={align || 'center'}
    >
      {children}
    </Grid>
  );
};

export default GridItem;
