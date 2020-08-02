import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import defaultProfile from 'shared/assets/images/default_profile.png';

const CircularImage = ({ image, size, alt, isPlayer }) => {
  if (isPlayer && image === 'default') {
    image = defaultProfile;
  }
  const useStyles = makeStyles((theme) => ({
    imageContainer: {
      margin: theme.spacing(4),
    },
    image: {
      objectFit: 'cover',
      color: theme.palette.secondary.light,
      background: theme.palette.primary.light,
      width: size || '160px',
      height: size || '160px',
      borderRadius: '50%',
      border: `2px solid ${theme.palette.primary.main}`,
      boxShadow: `0px 0px 30px 5px ${theme.palette.primary.light}`,
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.imageContainer}>
      <img src={image} className={classes.image} alt={alt || ''} />
    </div>
  );
};

export default CircularImage;
