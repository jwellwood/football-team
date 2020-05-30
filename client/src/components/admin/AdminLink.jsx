import React, { useState } from 'react';
// MUI
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// Internal
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomIcon from 'components/ui/icons/CustomIcon';
import GreyBackground from 'containers/GreyBackground';

const AdminLink = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <GreyBackground>
      <ListItemWrapper button onClick={handleClick}>
        <ListItemIcon>
          <CustomIcon icon={item.icon} color='secondary' />
        </ListItemIcon>

        <ListItemText primary={item.text} />
        <CustomIcon icon={open ? 'chevron-up' : 'chevron-down'} size='sm' />
      </ListItemWrapper>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <ListWrapper>
          {item.links.map((link) => (
            <ListItemWrapper
              key={link.link}
              button
              noDivider
              linkTo={link.link}
            >
              <ListItemIcon>
                <CustomIcon color='warning' icon={link.icon} />
              </ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItemWrapper>
          ))}
        </ListWrapper>
      </Collapse>
    </GreyBackground>
  );
};

export default AdminLink;
