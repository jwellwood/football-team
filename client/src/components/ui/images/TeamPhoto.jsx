import React from 'react';
// MUI
import Container from '@material-ui/core/Container';
import defaultImage from 'assets/images/default_team.png';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  teamContainer: {
    maxWidth: '100%',
    margin: 'auto',
    background: theme.palette.primary.light,
    color: theme.palette.primary.light,
    borderRadius: theme.shape.borderRadius,
    boxShadow: `0px 0px 10px 0px ${theme.palette.primary.dark}`,
  },
  teamPhoto: {
    objectFit: 'cover',
    width: '100%',
    display: 'block',
    height: 'auto',
    borderRadius: theme.shape.borderRadius,
  },
}));

const TeamPhoto = ({ image }) => {
  const classes = useStyles();
  const imageSrc = image && image !== 'default' ? image : defaultImage;
  return (
    <Container maxWidth='sm'>
      <div className={classes.teamContainer}>
        <img src={imageSrc} alt='team' className={classes.teamPhoto} />
      </div>
    </Container>
  );
};

export default TeamPhoto;
