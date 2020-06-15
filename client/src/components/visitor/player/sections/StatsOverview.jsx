import React from 'react';
// MUITODO
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Internal
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import StatIcon from 'components/ui/icons/StatIcon';
import GreyBackground from 'containers/GreyBackground';
import ValueText from 'components/ui/text/ValueText';
import ProfileSection from 'components/user/ProfileSection';

const StatsOverview = ({ data }) => {
  return (
    <ProfileSection title='Stats'>
      <GreyBackground>
        <ListWrapper dense>
          {data.map((item) => (
            <ListItemWrapper key={item.text} noDivider={item.noDivider}>
              {item.icon ? (
                <ListItemIcon>
                  <StatIcon type={item.icon} size='lg' />
                </ListItemIcon>
              ) : null}
              <ListItemText primary={item.text} secondary={item.secondary} />
              <ListItemSecondaryAction>
                <ValueText>{item.value}</ValueText>
              </ListItemSecondaryAction>
            </ListItemWrapper>
          ))}
        </ListWrapper>
      </GreyBackground>
    </ProfileSection>
  );
};

export default StatsOverview;
