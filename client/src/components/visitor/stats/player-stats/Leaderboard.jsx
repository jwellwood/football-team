import React from 'react';
// MUITODO
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Internal
import SectionBackground from 'containers/SectionBackground';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import StatIcon from 'components/ui/icons/StatIcon';
import LeaderboardList from './LeaderboardList';
import PresentationModal from 'components/ui/modals/PresentationModal';
import CustomTypography from 'components/ui/text/CustomTypography';

const Leaderboard = ({ data }) => {
  return (
    <ListWrapper dense>
      {data.map((item, i) => {
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
              <LeaderboardList value={item.value} />
            </SectionBackground>
          </PresentationModal>
        );
      })}
    </ListWrapper>
  );
};

export default Leaderboard;
