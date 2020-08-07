import React from 'react';
// MUI
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { theme } from 'shared/theme';
// Components
import CustomTable from 'lib/components/tables/CustomTable';
import DeleteMatchPlayerLogic from './DeleteMatchPlayerLogic';

const AdminMatchPlayersList = ({ players, result }) => {
  const { success, warning, error } = theme.palette;
  const { teamGoals, opponentGoals } = result;
  const headCells = [
    { id: 'name', label: 'Name' },
    { id: 'goals', label: 'G' },
    { id: 'assists', label: 'A' },
    { id: 'conceded', label: 'Con' },
    { id: 'mvp', label: 'MVP' },
    { id: 'ownGoal', label: 'OG' },
    { id: 'pensScored', label: 'Pg' },
    { id: 'pensMissed', label: 'Pm' },
    { id: 'yellowCards', label: 'Y' },
    { id: 'redCards', label: 'R' },
  ];

  const totals = [
    { value: 'Totals' },
    {
      type: 'goals',
      value: players.map((pl) => +pl.goals).reduce((a, b) => a + b, 0),
      validator: teamGoals,
    },
    {
      type: 'assist',
      value: players.map((pl) => +pl.assists).reduce((a, b) => a + b, 0),
      validator: teamGoals,
    },
    {
      type: 'conc',
      value: players.map((pl) => +pl.conceded).reduce((a, b) => a + b, 0),
      validator: opponentGoals,
    },
  ];

  const rows = players.map((pl) => {
    const data = [
      pl.player_id.name,
      pl.goals,
      pl.assists,
      pl.conceded,
      pl.mvp ? 1 : 0,
      pl.ownGoals,
      pl.pensScored,
      pl.pensMissed,
      pl.yellowCards,
      pl.redCard ? 1 : 0,
      <DeleteMatchPlayerLogic matchPlayerId={pl.player_id._id} />,
    ];
    return (
      <TableRow key={pl._id}>
        {data.map((item, i) => (
          <TableCell key={i} align='center'>
            {item}
          </TableCell>
        ))}
      </TableRow>
    );
  });

  const footer = (
    <TableRow>
      {totals.map((item, i) => {
        let color = warning.main;
        if (item.validator < item.value) {
          color = error.main;
        }
        if (item.validator === item.value) {
          color = success.main;
        }
        return (
          <TableCell key={i} align='center'>
            <span style={{ color: color }}>{item.value}</span>
          </TableCell>
        );
      })}
    </TableRow>
  );

  return <CustomTable headCells={headCells} rows={rows} footer={footer} />;
};

export default AdminMatchPlayersList;
