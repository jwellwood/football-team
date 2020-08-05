import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import SectionContainer from 'shared/layout/SectionContainer';
import { IPlayerStatsListData } from '../shared/types';
import CustomTypography from 'lib/components/typography/CustomTypography';
import StatIcon from 'lib/components/icons/StatIcon';
import ListWrapper from 'lib/components/lists/ListWrapper';
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';

interface Props {
  statsData: IPlayerStatsListData[];
}

const StatsOverview: React.FC<Props> = ({ statsData }) => {
  return (
    <SectionContainer title='Stats'>
      <ListWrapper dense>
        {statsData.map((item) => (
          <ListItemWrapper key={item.text} noDivider={item.noDivider}>
            {item.icon ? (
              <ListItemIcon>
                <StatIcon type={item.icon} size='lg' />
              </ListItemIcon>
            ) : null}
            <ListItemText primary={item.text} secondary={item.secondary} />
            <ListItemSecondaryAction>
              <CustomTypography main bold>
                {item.value}
              </CustomTypography>
            </ListItemSecondaryAction>
          </ListItemWrapper>
        ))}
      </ListWrapper>
    </SectionContainer>
  );
};

export default StatsOverview;
