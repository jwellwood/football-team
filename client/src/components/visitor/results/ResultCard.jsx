import React from 'react';
// MUITODO
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Functions
import { parseDate } from 'components/utils';
// Routes
import { RESULTS } from 'router/route_names';
// Components
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomIcon from 'components/ui/icons/CustomIcon';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import CustomText from 'components/ui/text/CustomText';
import ValueText from 'components/ui/text/ValueText';
import GreyBackground from 'containers/GreyBackground';

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
      <CustomText type='muted'>{parseDate(date)}</CustomText>
      <CustomText type='highlight'> {type}</CustomText>
    </>
  );

  const opponent = <ValueText>{opponentName}</ValueText>;
  return (
    <GreyBackground>
      <ListItemWrapper noDivider button linkTo={`${RESULTS}/${result._id}`}>
        <CustomAvatar bordered background={background} isList>
          <CustomIcon icon='chevron-right' size='xs' />
        </CustomAvatar>
        <ListItemText primary={opponent} secondary={resultDateAndType} />
        <ListItemSecondaryAction>
          <ValueText>
            {teamGoals} - {opponentGoals}
          </ValueText>
        </ListItemSecondaryAction>
      </ListItemWrapper>
    </GreyBackground>
  );
};

export default ResultCard;
