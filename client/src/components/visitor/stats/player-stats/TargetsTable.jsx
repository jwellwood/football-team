import React from 'react';
// Internal
import ValueText from 'components/ui/text/ValueText';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import CustomText from 'components/ui/text/CustomText';
import ProfileSection from 'components/user/ProfileSection';
import CustomExpansion from 'components/ui/expansion/CustomExpansion';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import GridItem from 'components/ui/grids/GridItem';
import GreyBackground from 'containers/GreyBackground';

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
        title={<ValueText>{name}</ValueText>}
        valueAsComponent={
          <CustomAvatar shadow={color(+total)}>
            <ValueText>
              {+total}
              <CustomText type='caption'>%</CustomText>
            </ValueText>
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
            <GridItem key={i} xs={4} sm={4}>
              <GreyBackground>
                <CustomText>{stat.type}</CustomText>
                <CustomText type='muted' div color={color(stat.p)}>
                  {stat.p}%
                </CustomText>
                <CustomText type='caption'>
                  {stat.t} / {stat.tar}
                </CustomText>
              </GreyBackground>
            </GridItem>
          ))}
        </CenteredGrid>
      </CustomExpansion>
    );
  });

  return <ProfileSection title='Players'>{rows}</ProfileSection>;
};

export default TargetsTable;
