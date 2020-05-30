import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from 'assets/theme';

const StatIcon = ({ type, size }) => {
  const { palette } = theme;
  const p = palette;
  let icon = '';
  let color = p.secondary.main;
  switch (type) {
    case 'app':
      icon = ['far', 'check-circle'];
      color = p.success.main;
      break;
    case 'goal':
      icon = 'futbol';
      color = p.goal.main;
      break;
    case 'assist':
      icon = 'arrow-alt-circle-up';
      color = p.assist.main;
      break;
    case 'conceded':
      icon = 'arrow-alt-circle-down';
      color = p.conceded.main;
      break;
    case 'ownGoal':
      icon = 'arrow-down';
      color = p.miss.main;
      break;
    case 'yellowCard':
      icon = 'sticky-note';
      color = p.warning.light;
      break;
    case 'redCard':
      icon = 'sticky-note';
      color = p.error.main;
      break;
    case 'penScored':
      icon = 'adjust';
      color = p.goal.main;
      break;
    case 'penMissed':
      icon = 'times';
      color = p.secondary.main;
      break;
    case 'mvp':
      icon = ['fas', 'star'];
      color = p.warning.main;
      break;
    case 'percentage':
      icon = 'percent';
      color = p.success.main;
      break;

    default:
      break;
  }
  return <FontAwesomeIcon icon={icon} color={color} size={size || 'sm'} />;
};

export default StatIcon;
