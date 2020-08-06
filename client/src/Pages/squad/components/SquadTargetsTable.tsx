import React from 'react';
// Internal
import CustomAvatar from 'lib/components/avatars/CustomAvatar';
import CustomExpansion from 'lib/components/expansion/CustomExpansion';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import GridItem from 'lib/components/grids/GridItem';
import SectionContainer from 'shared/layout/SectionContainer';
import CustomTypography from 'lib/components/typography/CustomTypography';
import SectionBackground from 'shared/layout/SectionBackground';

interface Props {
  targets: any;
}

interface ITargetTableRow {
  type: string;
  p: number;
  t: number;
  tar: number;
}

const SquadTargetsTable: React.FC<Props> = ({ targets }) => {
  console.log(targets);
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
          ].map((stat: ITargetTableRow) => (
            // p: percentage, t: total(actual number)
            <GridItem key={stat.type} xs={4} sm={4} md={4} lg={4}>
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

export default SquadTargetsTable;
