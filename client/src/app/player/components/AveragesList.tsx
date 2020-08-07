import React from 'react';
// MUITODO
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Components
import ListWrapper from 'lib/components/lists/ListWrapper';
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import CustomTypography from 'lib/components/typography/CustomTypography';
import { IPlayerAveragesListData } from '../shared/types';

interface Props {
  listData: IPlayerAveragesListData[];
}

const AveragesList: React.FC<Props> = ({ listData }) => {
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
