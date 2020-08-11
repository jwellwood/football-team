import React from 'react';
import { ListWrapper } from 'components/lists';
import AdminLink from './Admin.component';
import { adminLinks } from '../utils';
import { IAdminLinkData } from '../shared';

export default () => {
  return (
    <ListWrapper>
      {adminLinks.map((link: IAdminLinkData) => (
        <AdminLink key={link.text} item={link} />
      ))}
    </ListWrapper>
  );
};
