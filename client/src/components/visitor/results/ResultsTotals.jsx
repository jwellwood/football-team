import React, { Fragment } from 'react';
// MUITODO
import Grid from '@material-ui/core/Grid';
// Routes
import { visitor_routes } from 'router';
// Components
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import TopSectionContainer from 'shared/layout/TopSectionContainer';
import SectionBackground from 'shared/layout/SectionBackground';
import CustomDivider from 'components/ui/dividers/CustomDivider';
import FormIndicator from './FormIndicator';
import CustomLinkButton from 'components/ui/buttons/CustomLinkButton';
import CustomTypography from 'components/ui/text/CustomTypography';

const ResultsTotals = ({ data, showStatsButton }) => {
  return (
    <SectionBackground placeholder>
      <TopSectionContainer>
        <CenteredGrid dir='row' just='space-evenly'>
          {data.map((item, i) => (
            <Fragment key={item.title + i}>
              <Grid align='center'>
                <CustomTypography size='xs' div>
                  {item.title}
                </CustomTypography>
                <CustomTypography main bold>
                  {item.title === 'Form' ? (
                    <FormIndicator data={item.value} />
                  ) : (
                    item.value
                  )}
                </CustomTypography>
              </Grid>
              {item.divider ? <CustomDivider isVertical /> : null}
            </Fragment>
          ))}
        </CenteredGrid>
      </TopSectionContainer>
      {showStatsButton ? (
        <CustomLinkButton link={visitor_routes.RESULTS_STATS} type='contained'>
          Stats
        </CustomLinkButton>
      ) : null}
    </SectionBackground>
  );
};

export default ResultsTotals;
