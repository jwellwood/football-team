import React, { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';

interface TabPanelProps {
  children: ReactElement;
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      // {...other}
    >
      {value === index && <>{children}</>}
    </Typography>
  );
};

export default TabPanel;
