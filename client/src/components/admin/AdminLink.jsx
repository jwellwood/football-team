import React, { useState } from 'react';
// MUI
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// Internal
import ListWrapper from 'lib/components/lists/ListWrapper';
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import CustomIcon from 'lib/components/icons/CustomIcon';
import SectionBackground from 'shared/layout/SectionBackground';

const AdminLink = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <SectionBackground>
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
    </SectionBackground>
  );
};

export default AdminLink;
