import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { SectionContainer } from 'shared/layout/containers';
import { IPlayerStatsListData } from '../shared/types';
import { CustomTypography } from 'components/typography';
import StatIcon from 'lib/icons/StatIcon';
import { ListWrapper, ListItemWrapper } from 'components/lists';

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
