import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { visitor_routes } from 'router';
import {
  SectionBackground,
  TopSectionContainer,
} from 'shared/layout/containers';
import { CenteredGrid } from 'shared/layout/grids';
import { CustomDivider } from 'components/dividers';
import { CustomLinkButton } from 'components/buttons';
import { CustomTypography } from 'components/typography';
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
          {resultsTotals.map((item: IResultTotalsData, i: number) => (
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
