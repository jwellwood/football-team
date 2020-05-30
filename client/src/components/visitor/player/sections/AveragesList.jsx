import React from 'react';
// MUITODO
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import { ListItemText, ListItemSecondaryAction } from '@material-ui/core';
// Components
import ValueText from 'components/ui/text/ValueText';
import GreyBackground from 'containers/GreyBackground';

const AveragesList = ({ listData }) => {
  return (
    <GreyBackground>
      <ListWrapper dense>
        {listData.map((data) => (
          <ListItemWrapper key={data.title}>
            <ListItemText primary={data.title} />
            <ListItemSecondaryAction>
              <ValueText>{data.value}</ValueText>
            </ListItemSecondaryAction>
          </ListItemWrapper>
        ))}
      </ListWrapper>
    </GreyBackground>
  );
};

export default AveragesList;
