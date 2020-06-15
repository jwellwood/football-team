import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';

// Internal
import ValueText from 'components/ui/text/ValueText';
import GreyBackground from 'containers/GreyBackground';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import StatIcon from '../icons/StatIcon';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: 'transparent',
    margin: 0,
    padding: 0,
  },
  summary: {
    margin: 0,
  },
  title: {
    marginLeft: theme.spacing(2),
  },
  date: {
    color: theme.palette.warning.light,
  },
}));
const CustomExpansion = ({ title, value, icon, children, secondary }) => {
  const classes = useStyles();
  return (
    <ExpansionPanel key={title} className={classes.root} elevation={0}>
      <GreyBackground>
        <ExpansionPanelSummary className={classes.summary}>
          <CenteredGrid dir='row' just='space-between'>
            <Grid item>
              {icon ? <StatIcon type={icon} size='lg' /> : null}
              <Typography component='span' className={classes.title}>
                {title}
              </Typography>
            </Grid>
            <ValueText>{value}</ValueText>
          </CenteredGrid>
        </ExpansionPanelSummary>
      </GreyBackground>
      <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default CustomExpansion;
