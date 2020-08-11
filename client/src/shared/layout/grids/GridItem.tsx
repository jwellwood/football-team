import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid, { GridSize } from '@material-ui/core/Grid';

interface Props {
  children: React.ReactNode;
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
}
const useStyles = makeStyles((theme) => ({
  item: {
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const GridItem: React.FC<Props> = ({
  children,
  xs = 12,
  sm = 6,
  md = 6,
  lg = 6,
  xl = 6,
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={classes.item}>
      {children}
    </Grid>
  );
};

export default GridItem;
