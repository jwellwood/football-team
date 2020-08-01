import React from 'react';
// Internal
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import CustomExpansion from 'components/ui/expansion/CustomExpansion';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import GridItem from 'components/ui/grids/GridItem';
import SectionContainer from 'containers/SectionContainer';
import CustomTypography from 'components/ui/text/CustomTypography';
import SectionBackground from 'containers/SectionBackground';

const TargetsTable = ({ targets }) => {
  const rows = targets.map((player, i) => {
    const { name, apps, goals, assists, total } = player;

    const color = (num) => {
      if (num >= 100) {
        return 'success';
      } else if (num > 0) {
        return 'warning';
      } else {
        return 'error';
      }
    };

    return (
      <CustomExpansion
        key={name + i}
        title={
          <CustomTypography main bold>
            {name}
          </CustomTypography>
        }
        valueAsComponent={
          <CustomAvatar shadow={color(+total)}>
            <CustomTypography main bold>
              {+total}
              <CustomTypography size='xs'>%</CustomTypography>
            </CustomTypography>
          </CustomAvatar>
        }
      >
        <CenteredGrid dir='row'>
          {[
            {
              type: 'Apps',
              p: +apps.percentage,
              t: apps.total,
              tar: apps.target,
            },
            {
              type: 'Goals',
              p: +goals.percentage,
              t: goals.total,
              tar: goals.target,
            },
            {
              type: 'Assists',
              p: +assists.percentage,
              t: assists.total,
              tar: assists.target,
            },
          ].map((stat, i) => (
            // p: percentage, t: total(actual number)
            <GridItem key={i} xs={4} sm={4} md={4} lg={4}>
              <SectionBackground>
                <CustomTypography size='sm'>{stat.type}</CustomTypography>
                <CustomTypography div bold color={color(stat.p)}>
                  {stat.p}%
                </CustomTypography>
                <CustomTypography size='sm'>
                  {stat.t} / {stat.tar}
                </CustomTypography>
              </SectionBackground>
            </GridItem>
          ))}
        </CenteredGrid>
      </CustomExpansion>
    );
  });

  return <SectionContainer title='Targets'>{rows}</SectionContainer>;
};

export default TargetsTable;
