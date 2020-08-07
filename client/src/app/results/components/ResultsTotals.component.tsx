import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { visitor_routes } from 'router';
import TopSectionContainer from 'shared/layout/TopSectionContainer';
import SectionBackground from 'shared/layout/SectionBackground';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import CustomDivider from 'lib/components/dividers/CustomDivider';
import CustomLinkButton from 'lib/components/buttons/CustomLinkButton';
import CustomTypography from 'lib/components/typography/CustomTypography';
import FormIndicator from './FormIndicator';
import { IResultTotalsData } from '../shared/types';

interface Props {
  resultsTotals: IResultTotalsData[];
  showStatsButton?: boolean;
}

const ResultsTotals: React.FC<Props> = ({ resultsTotals, showStatsButton }) => {
  return (
    <SectionBackground placeholder>
      <TopSectionContainer>
        <CenteredGrid dir='row' just='space-evenly'>
          {resultsTotals.map((item: IResultTotalsData, i) => (
            <Fragment key={i}>
              <Grid style={{ textAlign: 'center' }}>
                <CustomTypography size='xs' div>
                  {item.title}
                </CustomTypography>
                <CustomTypography main bold>
                  {item.title === 'Form' ? (
                    <FormIndicator pointsArray={item.value} />
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
