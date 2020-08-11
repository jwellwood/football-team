import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import { TableContainer } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: 'none',
  },
  header: {
    background: 'rgba(0,0,0, 0.2)',
  },
}));

interface Props {
  headCells: ITableHeadCell[];
  rows: ReactElement[];
  footer?: React.ReactNode;
  noLines?: boolean;
}

export interface ITableHeadCell {
  id: string;
  label: string | ReactElement;
}

const CustomTable: React.FC<Props> = ({ headCells, rows, footer, noLines }) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table size='small' className={noLines ? classes.root : null}>
        <TableHead className={classes.header}>
          <TableRow>
            {headCells.map((headCell: ITableHeadCell, i: number) => (
              <TableCell key={headCell.id} align='center'>
                {headCell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>{rows}</TableBody>
        {footer ? <TableFooter>{footer}</TableFooter> : null}
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
