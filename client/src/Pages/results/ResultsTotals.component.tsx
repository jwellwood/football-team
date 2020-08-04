import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { visitor_routes } from 'router';
import TopSectionContainer from 'shared/layout/TopSectionContainer';
import SectionBackground from 'shared/layout/SectionBackground';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import CustomDivider from 'lib/components/dividers/CustomDivider';
import CustomLinkButton from 'lib/components/buttons/CustomLinkButton';
import CustomTypography from 'lib/components/typography/CustomTypography';
import FormIndicator from '../../components/visitor/results/FormIndicator';

interface Props {
  data: any; // TODO
  showStatsButton?: boolean;
}

const ResultsTotals: React.FC<Props> = ({ data, showStatsButton }) => {
  return (
    <SectionBackground placeholder>
      <TopSectionContainer>
        <CenteredGrid dir='row' just='space-evenly'>
          {data.map((item, i) => (
            <Fragment key={item.title + i}>
              <Grid style={{ textAlign: 'center' }}>
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
