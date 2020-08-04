import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { ISeasonAwardData } from 'shared/types';
import CustomTypography from 'lib/components/typography/CustomTypography';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';

interface Props {
  awards: ISeasonAwardData[];
}

const AwardList: React.FC<Props> = ({ awards }) => (
  <ListWrapper dense>
    {awards.map(
      ({ _id, awardName, awardWinner, awardValue }: ISeasonAwardData, i) => (
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
