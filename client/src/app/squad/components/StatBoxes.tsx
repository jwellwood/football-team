import React from 'react';
// MUI
import Grid from '@material-ui/core/Grid';
// Components
import { CenteredGrid } from 'shared/layout/grids';
import { CustomTypography } from 'components/typography';
import { IStatBoxDetails } from '../shared/types';
import { CustomAvatar } from 'components/avatars';

interface Props {
  statBoxDetails: IStatBoxDetails[];
}

const StatBoxes: React.FC<Props> = ({ statBoxDetails }) => {
  return (
    <Grid>
      <CenteredGrid dir='row'>
        {statBoxDetails.map((item, i: number) => (
          <Grid item style={{ textAlign: 'center' }} key={i}>
            <CustomAvatar background={item.color || 'secondary'} small>
              <CustomTypography main bold>
                {item.value}
              </CustomTypography>
            </CustomAvatar>
            <CustomTypography size='xs'>{item.text}</CustomTypography>
          </Grid>
        ))}
      </CenteredGrid>
    </Grid>
  );
};

export default StatBoxes;
