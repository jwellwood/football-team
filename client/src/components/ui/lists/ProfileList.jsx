import React from 'react';
// MUI
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
// Internal
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomIcon from '../icons/CustomIcon';
import { ListItemIcon } from '@material-ui/core';
import ValueText from '../text/ValueText';

const ProfileList = ({ details }) =>
  details.map((item) => (
    <ListItemWrapper key={item.text} noDivider={item.noDivider}>
      {item.icon ? (
        <ListItemIcon>
          <CustomIcon icon={item.icon} color='secondary' />
        </ListItemIcon>
      ) : null}
      <ListItemText primary={item.text} secondary={item.secondary} />
      <ListItemSecondaryAction>
        <ValueText>{item.value}</ValueText>
      </ListItemSecondaryAction>
    </ListItemWrapper>
  ));

export default ProfileList;
