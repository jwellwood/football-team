import React from 'react';
// MUI
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Functions
import { parseDate } from 'components/utils/date';
import { getResultsColors } from 'components/utils';
// assets
import badge from 'assets/images/badge.jpg';
// Components
import CustomIcon from 'components/ui/icons/CustomIcon';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import CustomImageAvatar from 'components/ui/avatars/CustomImageAvatar';
import ValueText from 'components/ui/text/ValueText';
import CustomText from 'components/ui/text/CustomText';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import GreyBackground from 'containers/GreyBackground';
import { theme } from 'assets/theme';

const ScoreBox = ({ result }) => {
  const {
    opponentName,
    teamGoals,
    opponentGoals,
    isHome,
    date,
    type,
    points,
  } = result;

  const data = [
    {
      name: 'Madrid Reds',
      goals: teamGoals,
      avatar: <CustomImageAvatar image={badge} shadow='secondary' isList />,
    },
    {
      name: opponentName,
      goals: opponentGoals,
      avatar: (
        <CustomAvatar shadow='secondary' isList>
          <CustomIcon icon='shield-alt' size='sm' />
        </CustomAvatar>
      ),
    },
  ];

  const listData = (data) => (
    <ListItemWrapper>
      {data.avatar}
      <ListItemText primary={<ValueText>{data.name}</ValueText>} />
      <ListItemSecondaryAction>
        <div
          style={{
            color: getResultsColors(points),
            fontFamily: theme.typography.secondaryFont,
            fontWeight: 'bold',
            fontSize: '40px',
          }}
        >
          {data.goals}
        </div>
      </ListItemSecondaryAction>
    </ListItemWrapper>
  );

  const topRow = isHome ? listData(data[0]) : listData(data[1]);
  const bottomRow = isHome ? listData(data[1]) : listData(data[0]);

  const details = (
    <CenteredGrid>
      <CustomText type='highlight'>{type}</CustomText>
      <CustomText type='caption'>{parseDate(date)}</CustomText>
    </CenteredGrid>
  );

  return (
    <GreyBackground>
      {details}
      <ListWrapper>
        {topRow}
        {bottomRow}
      </ListWrapper>
    </GreyBackground>
  );
};

export default ScoreBox;
