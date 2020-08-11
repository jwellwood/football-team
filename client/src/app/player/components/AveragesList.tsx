import React from 'react';
// MUITODO
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Components
import { ListWrapper, ListItemWrapper } from 'components/lists';
import { CustomTypography } from 'components/typography';
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
