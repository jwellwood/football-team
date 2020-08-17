import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { IPreviousSeason, IAward } from 'shared/types';
import { CustomTable, ITableHeadCell } from 'shared/layout/tables';
import DeleteAward from '../containers/DeleteAward.container';
import { CustomTypography } from 'components/typography';

interface Props {
  season: IPreviousSeason;
}

const AdminAwardsList: React.FC<Props> = ({ season }) => {
  const { awards } = season;

  const headCells: ITableHeadCell[] = [
    { id: 'awardName', label: 'Award' },
    { id: 'awardWinner', label: 'Winner' },
    { id: 'awardValue', label: 'Number' },
  ];
  const rows = awards!.map((award: IAward) => {
    const { _id, awardName, awardWinner, awardValue } = award;
    const data = [
      awardName,
      awardWinner,
      awardValue,
      <DeleteAward awardId={award._id!} />,
    ];
    return (
      <TableRow key={_id}>
        {data.map((item, i: number) => (
          <TableCell key={i} align='center'>
            {item}
          </TableCell>
        ))}
      </TableRow>
    );
  });

  return awards ? (
    <CustomTable headCells={headCells} rows={rows} />
  ) : (
    <CustomTypography>No awards yet</CustomTypography>
  );
};

export default AdminAwardsList;
