import React, { useMemo } from 'react';
import { getResultAverages } from 'functions/results';
// MUITODO
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Components
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomIcon from 'components/ui/icons/CustomIcon';
import ValueText from 'components/ui/text/ValueText';
import GreyBackground from 'containers/GreyBackground';

const ResultAverages = ({ results }) => {
  const stats = useMemo(() => getResultAverages(results), [results]);
  const { avgGoals, avgConceded, avgDiff, pointsPerGame } = stats;

  const data = [
    { text: 'Points / game', icon: '', value: pointsPerGame, noDivider: true },
    { text: 'Goals / game', icon: '', value: avgGoals },
    { text: 'Conceded / game', icon: '', value: avgConceded },
    { text: 'Av goal difference', icon: '', value: avgDiff },
  ];
  return (
    <GreyBackground>
      <ListWrapper dense>
        {data.map((item) => (
          <ListItemWrapper key={item.text} noDivider={item.noDivider}>
            {item.icon ? (
              <ListItemIcon>
                <CustomIcon icon={item.icon} size='sm' />
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
  );
};

export default ResultAverages;
