import React, { ReactElement } from 'react';
import { IResult } from 'shared/types';
import { parseDate } from 'utils/helpers';
import { getBackground } from 'utils';
import { visitor_routes } from 'router';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import CustomIcon from 'lib/components/icons/CustomIcon';
import CustomAvatar from 'lib/components/avatars/CustomAvatar';
import SectionBackground from 'shared/layout/SectionBackground';
import CustomTypography from 'lib/components/typography/CustomTypography';

interface Props {
  result: IResult;
}

const ResultCard: React.FC<Props> = ({
  result: { _id, date, type, opponentName, teamGoals, opponentGoals, points },
}) => {
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
        <CustomAvatar bordered background={getBackground(points)} isList>
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
