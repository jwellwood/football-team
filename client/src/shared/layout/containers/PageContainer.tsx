import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Styles
const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  background: {
    background: theme.palette.dark.main,
    minHeight: '100vh',
    padding: theme.spacing(1),
  },
  admin: {
    padding: theme.spacing(1),
    border: `3px solid ${theme.palette.secondary.light}`,
  },
  top: {
    marginTop: theme.spacing(2),
  },
}));

interface Props {
  children: React.ReactNode;
  admin?: boolean;
}

const PageContainer: React.FC<Props> = ({ children, admin }) => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container maxWidth='lg' className={admin ? classes.admin : ''}>
        <div className={classes.top}></div>
        <div>{children}</div>
        <div className={classes.offset}></div>
      </Container>
    </div>
  );
};

export default PageContainer;
