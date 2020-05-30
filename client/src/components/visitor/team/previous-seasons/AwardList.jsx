import React from 'react';
// MUI
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Components
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';

const AwardList = ({ awards }) => {
  return awards.map((award, i) => {
    // [awardName, awardWinner, awardValue, awardIcon]
    const { _id, awardName, awardWinner, awardValue } = award;
    return (
      <ListWrapper key={_id} dense>
        <ListItemWrapper noDivider>
          <ListItemText primary={awardWinner} secondary={awardName} />
          <ListItemSecondaryAction>{awardValue}</ListItemSecondaryAction>
        </ListItemWrapper>
      </ListWrapper>
    );
  });
};

export default AwardList;
