import React, { ReactElement } from 'react';
import { IResult } from 'shared/types';
import { parseDate } from 'utils/helpers';
import { getStringColorByNumber } from 'utils';
import { visitor_routes } from 'router';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { ListItemWrapper } from 'components/lists';
import CustomIcon from 'lib/icons/CustomIcon';
import { CustomAvatar } from 'components/avatars';
import { SectionBackground } from 'shared/layout/containers';
import { CustomTypography } from 'components/typography';

interface Props {
  result: IResult;
}

const ResultCard: React.FC<Props> = ({
  result: { _id, date, type, opponentName, teamGoals, opponentGoals, points },
}) => {
  const backgroundColor: string = getStringColorByNumber(points);

  const resultDateAndType: ReactElement = (
    <>
      <CustomTypography size='xs' color='warning' font='secondary'>
        {parseDate(date)}
      </CustomTypography>
      <CustomTypography size='sm'> {type}</CustomTypography>
    </>
  );

  const opponent: ReactElement = (
    <CustomTypography main bold>
      {opponentName}
    </CustomTypography>
  );
  return (
    <SectionBackground>
      <ListItemWrapper
        noDivider
        button
        linkTo={`${visitor_routes.RESULTS}/${_id}`}
      >
        <CustomAvatar bordered background={backgroundColor} isList>
          <CustomIcon icon='chevron-right' size='xs' />
        </CustomAvatar>
        <ListItemText primary={opponent} secondary={resultDateAndType} />
        <ListItemSecondaryAction>
          <CustomTypography main bold>
            {teamGoals} - {opponentGoals}
          </CustomTypography>
        </ListItemSecondaryAction>
      </ListItemWrapper>
    </SectionBackground>
  );
};

export default ResultCard;
