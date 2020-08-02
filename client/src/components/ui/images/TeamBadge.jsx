import React from 'react';
import defaultBadge from 'shared/assets/images/badge.jpg';
import { useStyles } from './styles'; // styles

const TeamBadge = () => {
  const classes = useStyles();
  return (
    <div className={classes.badgeContainer}>
      <img src={defaultBadge} alt='team badge' className={classes.teamBadge} />
    </div>
  );
};

export default TeamBadge;
