import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CustomIcon from '../../../lib/components/icons/CustomIcon';
import CustomTypography from '../../../lib/components/typography/CustomTypography';

const ListItemLink = (props) => {
  const { icon, avatar, secondary, text, to, onClick, color } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  const listAvatar = avatar ? <ListItemAvatar>{avatar}</ListItemAvatar> : null;

  const listIcon = icon ? (
    <ListItemIcon>
      <CustomIcon color={color || 'secondary'} icon={icon} />
    </ListItemIcon>
  ) : null;

  return (
    <ListItem button component={renderLink} onClick={onClick}>
      {listAvatar}
      {listIcon}
      <ListItemText
        primary={
          <CustomTypography main bold>
            {text}
          </CustomTypography>
        }
        secondary={secondary}
      />
    </ListItem>
  );
};

export default ListItemLink;
