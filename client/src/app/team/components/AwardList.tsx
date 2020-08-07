import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { ISeasonAward } from 'shared/types';
import CustomTypography from 'lib/components/typography/CustomTypography';
import ListWrapper from 'lib/components/lists/ListWrapper';
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';

interface Props {
  awards: ISeasonAward[];
}

const AwardList: React.FC<Props> = ({ awards }) => (
  <ListWrapper dense>
    {awards.map(
      ({ _id, awardName, awardWinner, awardValue }: ISeasonAward, i) => (
        <ListItemWrapper noDivider key={_id}>
          <ListItemText primary={awardWinner} secondary={awardName} />
          <ListItemSecondaryAction>
            {
              <CustomTypography main bold>
                {awardValue}
              </CustomTypography>
            }
          </ListItemSecondaryAction>
        </ListItemWrapper>
      )
    )}
  </ListWrapper>
);

export default AwardList;
