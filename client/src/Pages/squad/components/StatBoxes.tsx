import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
// Components
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import CustomTypography from 'lib/components/typography/CustomTypography';
import { IStatBoxDetails } from '../shared/types';

export const useStyles = makeStyles((theme) => ({
  number_avatar: {
    width: 30,
    height: 30,
    fontSize: '0.8rem',
    fontWeight: 'bold',
    background: theme.palette.secondary.dark,
  },
}));

interface Props {
  statBoxDetails: IStatBoxDetails[];
}

const StatBoxes: React.FC<Props> = ({ statBoxDetails }) => {
  const classes = useStyles();
  return (
    <Grid>
      <CenteredGrid dir='row'>
        {statBoxDetails.map((item, i) => (
          <Grid item key={i}>
            <Avatar className={classes.number_avatar}>
              <CustomTypography main bold>
                {item.value}
              </CustomTypography>
            </Avatar>
            <CustomTypography size='xs'>{item.text}</CustomTypography>
          </Grid>
        ))}
      </CenteredGrid>
    </Grid>
  );
};

export default StatBoxes;
