import React from 'react';
import Grid, {
  GridDirection,
  GridJustification,
  GridContentAlignment,
  GridItemsAlignment,
  GridSpacing,
} from '@material-ui/core/Grid';

interface Props {
  children: React.ReactNode;
  dir?: GridDirection;
  just?: GridJustification;
  cont?: GridContentAlignment;
  item?: GridItemsAlignment;
  spacing?: GridSpacing;
}

const CenteredGrid: React.FC<Props> = ({
  children,
  dir = 'column',
  just = 'center',
  cont = 'center',
  item = 'center',
  spacing = 1,
}) => {
  return (
    <Grid
      container
      direction={dir}
      justify={just}
      alignContent={cont}
      alignItems={item}
      spacing={spacing}
    >
      {children}
    </Grid>
  );
};

export default CenteredGrid;
