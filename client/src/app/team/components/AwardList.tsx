import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { IAward } from 'shared/types';
import { CustomTypography } from 'components/typography';
import { ListWrapper, ListItemWrapper } from 'components/lists';

interface Props {
  awards: IAward[];
}

const AwardList: React.FC<Props> = ({ awards }) => (
  <ListWrapper dense>
    {awards.map(
      ({ _id, awardName, awardWinner, awardValue }: IAward, i: number) => (
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
