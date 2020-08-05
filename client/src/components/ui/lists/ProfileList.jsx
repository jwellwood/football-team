import React from 'react';
// MUI
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// Internal
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import CustomIcon from '../../../lib/components/icons/CustomIcon';
import CustomTypography from '../../../lib/components/typography/CustomTypography';

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
        <CustomTypography main bold>
          {item.value}
        </CustomTypography>
      </ListItemSecondaryAction>
    </ListItemWrapper>
  ));

export default ProfileList;
