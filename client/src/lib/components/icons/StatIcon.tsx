import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from 'shared/theme';
import {
  IconName,
  SizeProp,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

interface Props {
  type: string;
  size?: SizeProp;
}

const StatIcon: React.FC<Props> = ({ type, size = 'sm' }) => {
  const {
    success,
    secondary,
    goal,
    assist,
    conceded,
    miss,
    error,
    warning,
  } = theme.palette;
  let icon: IconName | [IconPrefix, IconName] = 'question';
  let color = secondary.main;
  switch (type) {
    case 'app':
      icon = ['far', 'check-circle'];
      color = success.main;
      break;
    case 'goal':
      icon = 'futbol';
      color = goal.main;
      break;
    case 'assist':
      icon = 'arrow-alt-circle-up';
      color = assist.main;
      break;
    case 'conceded':
      icon = 'arrow-alt-circle-down';
      color = conceded.main;
      break;
    case 'ownGoal':
      icon = 'arrow-down';
      color = miss.main;
      break;
    case 'yellowCard':
      icon = 'sticky-note';
      color = warning.light;
      break;
    case 'redCard':
      icon = 'sticky-note';
      color = error.main;
      break;
    case 'penScored':
      icon = 'adjust';
      color = goal.main;
      break;
    case 'penMissed':
      icon = 'times';
      color = secondary.main;
      break;
    case 'mvp':
      icon = ['fas', 'star'];
      color = warning.main;
      break;
    case 'percentage':
      icon = 'percent';
      color = success.main;
      break;

    default:
      break;
  }
  return <FontAwesomeIcon icon={icon} color={color} size={size} />;
};

export default StatIcon;
