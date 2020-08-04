import React from 'react';
// MUI
import Grid from '@material-ui/core/Grid';
// Internal
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import CustomExpansion from 'lib/components/expansion/CustomExpansion';
import CustomTypography from '../../../lib/components/typography/CustomTypography';

const VersusWrapper = ({ data }) => {
  return data.map((item, i) => (
    <CustomExpansion
      key={i}
      title={item.title}
      icon={item.icon}
      value={item.value}
    >
      <CenteredGrid>
        {item.secondaryList.map((match, i) => (
          <CenteredGrid key={i} dir='row' just='space-between'>
            <Grid item>
              <CustomTypography bold main>
                {match.name}
              </CustomTypography>
              <CustomTypography color='warning' size='sm' div>
                {match.date}
              </CustomTypography>
            </Grid>
            <CustomTypography bold>
              {match.scored} - {match.conceded}
            </CustomTypography>
          </CenteredGrid>
        ))}
      </CenteredGrid>
    </CustomExpansion>
  ));
};

export default VersusWrapper;
