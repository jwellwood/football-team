import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CustomTypography } from 'components/typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto',
  },
  circle: {
    display: 'flex',
    margin: 'auto',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: theme.palette.primary.light,
  },
}));

interface Props {
  isSecondary?: boolean;
}

const Spinner: React.FC<Props> = ({ isSecondary = false }) => {
  const classes = useStyles();
  const spinner = isSecondary ? (
    <div className={classes.circle}>
      <CircularProgress color='secondary' />
    </div>
  ) : (
    <div className={classes.root}>
      <FontAwesomeIcon icon='futbol' spin size='3x' className={classes.icon} />
      <CustomTypography size='xs'>loading...</CustomTypography>
    </div>
  );
  return spinner;
};

export default Spinner;
