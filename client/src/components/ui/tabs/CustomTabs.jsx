import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import GreyBackground from 'containers/GreyBackground';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const CustomTabs = ({ tabs, centered }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      <AppBar
        position='static'
        color='transparent'
        elevation={0}
        style={{ marginBottom: '10px' }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          variant='fullWidth'
          centered={centered}
        >
          {tabs.map((tab, i) => (
            <Tab key={i} label={tab.label} />
          ))}
        </Tabs>
      </AppBar>

      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        {tabs.map((tab, i) => (
          <TabPanel key={i} value={value} index={i}>
            <GreyBackground>{tab.component}</GreyBackground>
          </TabPanel>
        ))}
      </SwipeableViews>
    </>
  );
};

export default CustomTabs;
