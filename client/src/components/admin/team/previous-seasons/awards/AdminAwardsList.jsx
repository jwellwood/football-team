import React from 'react';
// MUI
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
// Components
import CustomTable from 'components/ui/tables/CustomTable';
import DeleteAwardLogic from './DeleteAwardLogic';

const AdminAwardsList = ({ season }) => {
  const { awards } = season;

  const headCells = [
    { id: 'awardName', label: 'Award' },
    { id: 'awardWinner', label: 'Winner' },
    { id: 'awardValue', label: 'Number' },
  ];

  const rows = awards.map((award) => {
    const { _id, awardName, awardWinner, awardValue } = award;
    const data = [
      awardName,
      awardWinner,
      awardValue,
      <DeleteAwardLogic awardId={award._id} />,
    ];
    return (
      <TableRow key={_id}>
        {data.map((item, i) => (
          <TableCell key={i} align='center'>
            {item}
          </TableCell>
        ))}
      </TableRow>
    );
  });

  return <CustomTable headCells={headCells} rows={rows} />;
};

export default AdminAwardsList;
