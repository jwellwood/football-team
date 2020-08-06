import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ILeaderboardData, ILeaderboardStat } from '../shared/types';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import SectionBackground from 'shared/layout/SectionBackground';
import ListWrapper from 'lib/components/lists/ListWrapper';
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import StatIcon from 'lib/components/icons/StatIcon';
import PresentationModal from 'lib/components/modals/PresentationModal';
import CustomTypography from 'lib/components/typography/CustomTypography';
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
  console.log(leaderboardData);
  return (
    <ListWrapper dense>
      {leaderboardData.map((item: ILeaderboardDataAllStats, i) => {
        const topName = item.value.length ? item.value[0].name : null;
        const topValue = item.value.length ? item.value[0].stat : null;
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
