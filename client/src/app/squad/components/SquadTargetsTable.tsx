import React from 'react';
// Internal
import { CustomAvatar } from 'components/avatars';
import { CustomExpansion } from 'components/lists';
import { CenteredGrid, GridItem } from 'shared/layout/grids';
import { SectionContainer } from 'shared/layout/containers';
import { CustomTypography } from 'components/typography';
import { SectionBackground } from 'shared/layout/containers';

interface Props {
  targets: ITargetData[];
}

interface ITargetData {
  name: string;
  apps: ITargetDataObject;
  goals: ITargetDataObject;
  assists: ITargetDataObject;
  total: number;
}

interface ITargetDataObject {
  percentage: string;
  total: number;
  target: number;
}

interface ITargetTableRow {
  type: string;
  p: number;
  t: number;
  tar: number;
}

const SquadTargetsTable: React.FC<Props> = ({ targets }) => {
  const rows = targets.map((player: ITargetData, i: number) => {
    const { name, apps, goals, assists, total } = player;

    const color = (num: number) => {
      if (num >= 100 || +num >= 100) {
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
                  <CustomTypography bold main>
                    {stat.t}
                  </CustomTypography>{' '}
                  / {stat.tar}
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
