import React, { Fragment } from 'react';
// MUITODO
import Grid from '@material-ui/core/Grid';
// Routes
import { RESULTS_STATS } from 'router/route_names';
// Components
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import TopSectionContainer from 'containers/TopSectionContainer';
import GreyBackground from 'containers/GreyBackground';
import CustomDivider from 'components/ui/dividers/CustomDivider';
import CustomText from 'components/ui/text/CustomText';
import ValueText from 'components/ui/text/ValueText';
import FormIndicator from './FormIndicator';
import CustomLinkButton from 'components/ui/buttons/CustomLinkButton';

const ResultsTotals = ({ data, showStatsButton }) => {
  return (
    <GreyBackground placeholder>
      <TopSectionContainer>
        <CenteredGrid dir='row' just='space-evenly'>
          {data.map((item, i) => (
            <Fragment key={item.title + i}>
              <Grid align='center'>
                <CustomText type='caption' div>
                  {item.title}
                </CustomText>
                <ValueText>
                  {item.title === 'Form' ? (
                    <FormIndicator data={item.value} />
                  ) : (
                    item.value
                  )}
                </ValueText>
              </Grid>
              {item.divider ? <CustomDivider isVertical /> : null}
            </Fragment>
          ))}
        </CenteredGrid>
      </TopSectionContainer>
      {showStatsButton ? (
        <CustomLinkButton link={RESULTS_STATS} type='contained'>
          Stats
        </CustomLinkButton>
      ) : null}
    </GreyBackground>
  );
};

export default ResultsTotals;
