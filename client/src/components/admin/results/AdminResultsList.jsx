import React from 'react';
import { admin_routes } from 'router';
// MUI
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
// Functions
import { parseDate } from 'shared/utils/date';
// Components
import ListWrapper from 'lib/components/lists/ListWrapper';
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import CustomIcon from 'lib/components/icons/CustomIcon';
import SectionBackground from 'shared/layout/SectionBackground';
import CustomTypography from 'lib/components/typography/CustomTypography';

const AdminResultsList = ({ results }) => {
  return (
    <SectionBackground>
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
              linkTo={`${admin_routes.ADMIN_RESULTS}/edit/${_id}`}
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
                <CustomTypography bold>
                  {teamGoals} - {opponentGoals}
                </CustomTypography>
              </ListItemSecondaryAction>
            </ListItemWrapper>
          );
        })}
      </ListWrapper>
    </SectionBackground>
  );
};

export default AdminResultsList;
