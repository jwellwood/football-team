import React, { ReactElement } from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// Internal
import { SectionBackground } from 'shared/layout/containers';
import { CenteredGrid } from 'shared/layout/grids';
import StatIcon from 'lib/icons/StatIcon';
import CustomTypography from '../typography/CustomTypography';

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

interface Props {
  title?: string | ReactElement;
  value?: number | string;
  icon?: string;
  children: React.ReactNode;
  valueAsComponent?: ReactElement;
}

const CustomExpansion: React.FC<Props> = ({
  title,
  value,
  icon,
  children,
  valueAsComponent,
}) => {
  const classes = useStyles();
  return (
    <Accordion key={title.toString()} className={classes.root} elevation={0}>
      <SectionBackground>
        <AccordionSummary className={classes.summary}>
          <CenteredGrid dir='row' just='space-between'>
            <Grid item>
              {icon ? <StatIcon type={icon} size='lg' /> : null}
              <Typography component='span' className={classes.title}>
                {title}
              </Typography>
            </Grid>
            {value ? (
              <CustomTypography main bold>
                {value}
              </CustomTypography>
            ) : (
              valueAsComponent
            )}
          </CenteredGrid>
        </AccordionSummary>
      </SectionBackground>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default CustomExpansion;
