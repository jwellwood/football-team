import React from 'react';
// MUITODO
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Internal
import GreyBackground from 'containers/GreyBackground';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import ValueText from 'components/ui/text/ValueText';
import StatIcon from 'components/ui/icons/StatIcon';
import LeaderboardList from './LeaderboardList';
import PresentationModal from 'components/ui/modals/PresentationModal';

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
              <GreyBackground key={item.title + i}>
                <ListItemWrapper noDivider button>
                  <ListItemIcon>
                    <StatIcon type={item.icon} size='lg' />
                  </ListItemIcon>
                  <ListItemText
                    primary={<ValueText>{topName}</ValueText>}
                    secondary={item.title}
                  />
                  <ListItemSecondaryAction>
                    <ValueText>{topValue}</ValueText>
                  </ListItemSecondaryAction>
                </ListItemWrapper>
              </GreyBackground>
            }
            title={item.title}
          >
            <GreyBackground>
              <LeaderboardList value={item.value} />
            </GreyBackground>
          </PresentationModal>
        );
      })}
    </ListWrapper>
  );
};

export default Leaderboard;
