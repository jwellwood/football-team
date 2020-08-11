import React, { useState, ReactElement } from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { SectionBackground } from 'shared/layout/containers';
import TabPanel from './TabPanel';

export interface ITab {
  label: string | ReactElement;
  component: ReactElement;
}

interface TabProps {
  tabs: ITab[];
  centered?: boolean;
}

const CustomTabs: React.FC<TabProps> = ({ tabs, centered }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
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
          textColor='primary'
          variant='fullWidth'
          centered={centered}
        >
          {tabs.map((tab: ITab, i: number) => (
            <Tab key={i} label={tab.label} />
          ))}
        </Tabs>
      </AppBar>

      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        {tabs.map((tab: ITab, i: number) => (
          <TabPanel key={i} value={value} index={i}>
            <SectionBackground>{tab.component}</SectionBackground>
          </TabPanel>
        ))}
      </SwipeableViews>
    </>
  );
};

export default CustomTabs;
