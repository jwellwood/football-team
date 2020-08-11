import React, { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CustomIcon from 'lib/icons/CustomIcon';
import { CustomTypography } from 'components/typography';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon?: IconName;
  avatar?: ReactElement;
  secondary?: string;
  text: string;
  to: string;
  onClick: () => void;
  color?: string;
}

const ListItemLink: React.FC<Props> = ({
  icon,
  avatar,
  secondary,
  text,
  to,
  onClick,
  color,
}) => {
  const renderLink: React.ForwardRefExoticComponent<
    Pick<any, string | number | symbol> & React.RefAttributes<HTMLAnchorElement>
  > = React.useMemo(
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
