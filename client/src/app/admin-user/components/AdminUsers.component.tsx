import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { IUserData } from 'shared/types';
import CustomIcon from 'lib/icons/CustomIcon';
import { Spinner } from 'components/loaders';
import { CustomImageAvatar } from 'components/avatars';
import { CustomTable, ITableHeadCell } from 'shared/layout/tables';
import { CustomLinkButton } from 'components/buttons';

interface Props {
  users: IUserData[];
  loading: boolean;
}

const AdminUsers: React.FC<Props> = ({ users, loading }) => {
  const headCells: ITableHeadCell[] = [
    { id: 'name', label: '' },
    { id: 'number', label: 'No.' },
    { id: 'position', label: 'Pos.' },
    { id: 'photo', label: 'Photo' },
    { id: 'squad', label: 'Squad' },
    { id: 'captain', label: 'Capt' },
    { id: 'admin', label: 'Admin' },
    { id: 'isVerified', label: 'Verified' },
    { id: 'editDetails', label: 'Edit details' },
    { id: 'editTargets', label: 'Edit Targets' },
    { id: 'editPhoto', label: 'Edit Photo' },
    { id: 'targetApps', label: 'Target Apps' },
    { id: 'targetGoals', label: 'Target Goals' },
    { id: 'targetAssists', label: 'Target Assists' },
    { id: 'editButton', label: '' },
  ];

  const details = (user: IUserData) => [
    user.name,
    user.squadNumber,
    user.position,
    <CustomImageAvatar imageUrl={user.image.url} />,
  ];

  const data = (user: IUserData) => {
    return [
      user.isPlayer,
      user.isCaptain,
      user.role === 'admin',
      user.isVerified,
      user.canEdit.details,
      user.canEdit.targets,
      user.canEdit.photo,
    ];
  };

  const targets = (user: IUserData) => [
    user.appsTarget,
    user.goalsTarget,
    user.assistsTarget,
  ];

  const rows = users.map((user) => {
    return (
      <TableRow key={user._id}>
        {details(user).map((item, i: number) => (
          <TableCell key={item.toString() + i} scope='row' align='center'>
            {item}
          </TableCell>
        ))}

        {data(user).map((item, i: number) => (
          <TableCell key={i} scope='row' align='center'>
            {item ? <CustomIcon icon='check' color='success' /> : '-'}
          </TableCell>
        ))}
        {targets(user).map((item, i: number) => (
          <TableCell key={i} scope='row' align='center'>
            {item}
          </TableCell>
        ))}

        <TableCell scope='row' align='center'>
          <CustomLinkButton
            link={`/admin/users/${user._id}`}
            color='primary'
            type='contained'
          >
            edit
          </CustomLinkButton>
        </TableCell>
      </TableRow>
    );
  });

  return !loading ? (
    <CustomTable headCells={headCells} rows={rows} />
  ) : (
    <Spinner />
  );
};

export default AdminUsers;
