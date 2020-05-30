import React from 'react';
// MUI
import Grid from '@material-ui/core/Grid';
// Internal
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import CustomExpansion from 'components/ui/expansion/CustomExpansion';
import CustomText from '../text/CustomText';

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
            <Grid item align='left'>
              <CustomText type='highlight'>{match.name}</CustomText>
              <CustomText type='caption' div>
                {match.date}
              </CustomText>
            </Grid>
            <CustomText type='muted'>
              {match.scored} - {match.conceded}
            </CustomText>
          </CenteredGrid>
        ))}
      </CenteredGrid>
    </CustomExpansion>
  ));
};

export default VersusWrapper;
