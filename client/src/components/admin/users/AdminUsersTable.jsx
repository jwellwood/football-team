import React from 'react';
// MUI
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
// Components
import CustomIcon from 'lib/components/icons/CustomIcon';
import Spinner from 'lib/components/loading/Spinner';
import CustomImageAvatar from 'lib/components/avatars/CustomImageAvatar';
import CustomTable from 'lib/components/tables/CustomTable';
import CustomLinkButton from 'lib/components/buttons/CustomLinkButton';

const AdminUsersTable = ({ users, loading }) => {
  const headCells = [
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

  const details = (user) => [
    user.name,
    user.squadNumber,
    user.position,
    <CustomImageAvatar image={user.image.url} />,
  ];

  const data = (user) => {
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

  const targets = (user) => [
    user.appsTarget,
    user.goalsTarget,
    user.assistsTarget,
  ];

  const rows = users.map((user) => {
    return (
      <TableRow key={user._id}>
        {details(user).map((item, i) => (
          <TableCell key={item + i} scope='row' align='center'>
            {item}
          </TableCell>
        ))}

        {data(user).map((item, i) => (
          <TableCell key={i} scope='row' align='center'>
            {item ? <CustomIcon icon='check' color='success' /> : '-'}
          </TableCell>
        ))}
        {targets(user).map((item, i) => (
          <TableCell key={i} scope='row' align='center'>
            {item}
          </TableCell>
        ))}

        <TableCell scope='row' align='center'>
          <CustomLinkButton link={`/admin/users/${user._id}`}>
            <CustomIcon icon='pen' size='xs' color='primary' />
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

export default AdminUsersTable;
