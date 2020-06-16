import React from 'react';
// MUITODO
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Components
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomTypography from 'components/ui/text/CustomTypography';

const AveragesList = ({ listData }) => {
  return (
    <ListWrapper dense>
      {listData.map((data) => (
        <ListItemWrapper key={data.title}>
          <ListItemText primary={data.title} />
          <ListItemSecondaryAction>
            <CustomTypography main bold>
              {data.value}
            </CustomTypography>
          </ListItemSecondaryAction>
        </ListItemWrapper>
      ))}
    </ListWrapper>
  );
};

export default AveragesList;
