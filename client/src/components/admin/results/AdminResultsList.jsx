import React from 'react';
import { ADMIN_RESULTS } from 'router/route_names';
// MUI
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
// Functions
import { parseDate } from 'components/utils/date';
// Components
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomIcon from 'components/ui/icons/CustomIcon';
import GreyBackground from 'containers/GreyBackground';

import ValueText from 'components/ui/text/ValueText';

const AdminResultsList = ({ results }) => {
  return (
    <GreyBackground>
      <ListWrapper>
        {results.map((result) => {
          const {
            _id,
            date,
            type,
            opponentName,
            players,
            isForfeit,
            teamGoals,
            opponentGoals,
          } = result;
          return (
            <ListItemWrapper
              key={_id}
              button
              linkTo={`${ADMIN_RESULTS}/edit/${_id}`}
            >
              <ListItemText
                primary={opponentName}
                secondary={`${parseDate(date)}, ${type}`}
              />

              <ListItemSecondaryAction>
                {players.length || isForfeit ? null : (
                  <CustomIcon
                    icon='exclamation-circle'
                    size='lg'
                    color='primary'
                  />
                )}
                <ValueText color='secondary'>
                  {teamGoals} - {opponentGoals}
                </ValueText>
              </ListItemSecondaryAction>
            </ListItemWrapper>
          );
        })}
      </ListWrapper>
    </GreyBackground>
  );
};

export default AdminResultsList;
