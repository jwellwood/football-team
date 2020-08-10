import React from 'react';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { admin_routes } from 'router';
import { parseDate } from 'utils/helpers';
import { IResult } from 'shared/types';
import SectionBackground from 'shared/layout/SectionBackground';
import ListWrapper from 'lib/components/lists/ListWrapper';
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import CustomTypography from 'lib/components/typography/CustomTypography';

interface Props {
  results: IResult[];
}

const AdminResultsList: React.FC<Props> = ({ results }) => {
  return (
    <SectionBackground>
      <ListWrapper>
        {results.map(
          ({
            _id,
            date,
            type,
            opponentName,
            players,
            isForfeit,
            teamGoals,
            opponentGoals,
          }) => {
            const noPlayerColor = players.length || isForfeit ? '' : 'error';

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
                  <CustomTypography bold color={noPlayerColor}>
                    {teamGoals} - {opponentGoals}
                  </CustomTypography>
                </ListItemSecondaryAction>
              </ListItemWrapper>
            );
          }
        )}
      </ListWrapper>
    </SectionBackground>
  );
};

export default AdminResultsList;
