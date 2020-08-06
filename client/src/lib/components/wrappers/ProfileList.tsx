import React from 'react';
// MUI
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// Internal
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import CustomIcon from '../icons/CustomIcon';
import CustomTypography from '../typography/CustomTypography';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface Props {
  details: IProfileListData[];
}

interface IProfileListData {
  icon?: IconName;
  text: string;
  value: string | number;
  noDivider?: boolean;
  secondary?: string;
}

const ProfileList: React.FC<Props> = ({ details }) => (
  <>
    {details.map((item) => (
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
    ))}
    ;
  </>
);

export default ProfileList;
