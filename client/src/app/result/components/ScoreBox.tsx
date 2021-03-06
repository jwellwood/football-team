import React, { ReactElement } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { parseDate } from 'utils/helpers';
import { getThemeColorByNumber } from 'utils';
import badge from 'shared/assets/images/badge.jpg';
import { theme } from 'lib/theme';
import { IResult } from 'shared/types';
import CustomIcon from 'lib/icons/CustomIcon';
import { CenteredGrid } from 'shared/layout/grids';
import { CustomImageAvatar, CustomAvatar } from 'components/avatars';
import { CustomTypography } from 'components/typography';
import { ListWrapper, ListItemWrapper } from 'components/lists';

interface Props {
  result: IResult;
}

interface IScoreBoxData {
  name: string;
  goals: number;
  avatar: ReactElement;
}

const ScoreBox: React.FC<Props> = ({
  result: {
    opponentName,
    teamGoals,
    opponentGoals,
    isHome,
    date,
    type,
    points,
  },
}) => {
  const data: IScoreBoxData[] = [
    {
      name: 'Madrid Reds',
      goals: teamGoals,
      avatar: <CustomImageAvatar imageUrl={badge} shadow='secondary' isList />,
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

  const listData = (data: IScoreBoxData) => (
    <ListItemWrapper>
      {data.avatar}
      <ListItemText
        primary={
          <CustomTypography main bold size='md'>
            {data.name}
          </CustomTypography>
        }
      />
      <ListItemSecondaryAction>
        <div
          style={{
            color: getThemeColorByNumber(points),
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

  const topRow: ReactElement<IScoreBoxData> = isHome
    ? listData(data[0])
    : listData(data[1]);
  const bottomRow: ReactElement<IScoreBoxData> = isHome
    ? listData(data[1])
    : listData(data[0]);

  const details: ReactElement = (
    <CenteredGrid>
      <CustomTypography size='xs' color='warning' font='secondary'>
        {parseDate(date)}
      </CustomTypography>
      <CustomTypography size='sm'> {type}</CustomTypography>
    </CenteredGrid>
  );

  return (
    <>
      {details}
      <ListWrapper>
        {topRow}
        {bottomRow}
      </ListWrapper>
    </>
  );
};

export default ScoreBox;
