import React from 'react';
// MUI
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles'; // styles

const TableHeader = ({ title, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.tableHeader}>
      <ListItem>
        <ListItemText primary={<span className={classes.name}>{title}</span>} />
        <ListItemSecondaryAction>
          <Grid container>{children}</Grid>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
};

export default TableHeader;
