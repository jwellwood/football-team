import React, { ReactElement } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { theme } from 'shared/theme';
import { IResult, IMatchPlayer } from 'shared/types';
import CustomTable, { ITableHeadCell } from 'lib/components/tables/CustomTable';
import DeleteMatchPlayer from '../containers/DeleteMatchPlayer.container';

interface Props {
  result: IResult;
  matchPlayers: IMatchPlayer[];
}

interface IMatchPlayerTotal {
  value: number | string;
  type?: string;
  validator?: number;
}

const AdminMatchPlayersList: React.FC<Props> = ({ matchPlayers, result }) => {
  const { success, warning, error } = theme.palette;
  const { teamGoals, opponentGoals } = result;
  const headCells: ITableHeadCell[] = [
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

  const totals: IMatchPlayerTotal[] = [
    { value: 'Totals' },
    {
      type: 'goals',
      value: matchPlayers.map((pl) => +pl.goals).reduce((a, b) => a + b, 0),
      validator: teamGoals,
    },
    {
      type: 'assist',
      value: matchPlayers.map((pl) => +pl.assists).reduce((a, b) => a + b, 0),
      validator: teamGoals,
    },
    {
      type: 'conc',
      value: matchPlayers.map((pl) => +pl.conceded).reduce((a, b) => a + b, 0),
      validator: opponentGoals,
    },
  ];

  const rows: ReactElement[] = matchPlayers.map((pl: IMatchPlayer) => {
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
      <DeleteMatchPlayer matchPlayerId={pl.player_id._id} />,
    ];
    return (
      <TableRow key={pl.player_id._id}>
        {data.map((item, i) => (
          <TableCell key={i} align='center'>
            {item}
          </TableCell>
        ))}
      </TableRow>
    );
  });

  const footer: ReactElement = (
    <TableRow>
      {totals.map((item: IMatchPlayerTotal, i) => {
        let color: string = warning.main;
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
