import React from 'react';
// MUITODO
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Functions
import { parseDate } from 'components/utils';
// Routes
import { visitor_routes } from 'router';
// Components
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomIcon from 'components/ui/icons/CustomIcon';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import SectionBackground from 'containers/SectionBackground';
import CustomTypography from 'components/ui/text/CustomTypography';

const ResultCard = ({ result }) => {
  let background = null;
  switch (result.points) {
    case 3:
      background = 'success';
      break;
    case 1:
      background = 'warning';
      break;
    case 0:
      background = 'error';
      break;

    default:
      break;
  }
  const { date, type, opponentName, teamGoals, opponentGoals } = result;

  const resultDateAndType = (
    <>
      <CustomTypography size='xs' color='warning' font='secondary'>
        {parseDate(date)}
      </CustomTypography>
      <CustomTypography size='sm'> {type}</CustomTypography>
    </>
  );

  const opponent = (
    <CustomTypography main bold>
      {opponentName}
    </CustomTypography>
  );
  return (
    <SectionBackground>
      <ListItemWrapper
        noDivider
        button
        linkTo={`${visitor_routes.RESULTS}/${result._id}`}
      >
        <CustomAvatar bordered background={background} isList>
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
