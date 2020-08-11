import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ILeaderboardData, ILeaderboardStat } from '../shared/types';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { SectionBackground } from 'shared/layout/containers';
import { ListWrapper, ListItemWrapper } from 'components/lists';
import StatIcon from 'lib/icons/StatIcon';
import { PresentationModal } from 'components/modals';
import { CustomTypography } from 'components/typography';
import LeaderboardList from './LeaderboardList';

interface Props {
  leaderboardData: ILeaderboardData[];
}

interface ILeaderboardDataAllStats {
  title: string;
  icon: string;
  value: ILeaderboardStat[];
}

const Leaderboard: React.FC<Props> = ({ leaderboardData }) => {
  return (
    <ListWrapper dense>
      {leaderboardData.map((item: ILeaderboardDataAllStats, i: number) => {
        const topName = item.value.length > 0 ? item.value[0].name : null;
        const topValue = item.value.length > 0 ? item.value[0].stat : null;
        return (
          <PresentationModal
            key={i}
            buttonElement={
              <SectionBackground key={item.title + i}>
                <ListItemWrapper noDivider button>
                  <ListItemIcon>
                    <StatIcon type={item.icon} size='lg' />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <CustomTypography main bold>
                        {topName}
                      </CustomTypography>
                    }
                    secondary={item.title}
                  />
                  <ListItemSecondaryAction>
                    <CustomTypography main bold>
                      {topValue}
                    </CustomTypography>
                  </ListItemSecondaryAction>
                </ListItemWrapper>
              </SectionBackground>
            }
            title={item.title}
          >
            <SectionBackground>
              <LeaderboardList leaderboardValue={item.value} />
            </SectionBackground>
          </PresentationModal>
        );
      })}
    </ListWrapper>
  );
};

export default Leaderboard;
