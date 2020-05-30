import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
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

const CustomTable = ({ headCells, rows, footer, noLines }) => {
  const classes = useStyles();
  // *********************************************************************
  // ************* FOR FUTURE IMPLEMENTATION OF SORTING FUNCTIONALITY ********

  // const [order, setOrder] = useState('asc');
  // const [orderBy, setOrderBy] = useState('');

  // const handleRequestSort = (event, property) => {
  //   const isAsc = orderBy === property && order === 'asc';
  //   setOrder(isAsc ? 'desc' : 'asc');
  //   setOrderBy(property);
  // };

  // const createSortHandler = (property) => (event) => {
  //   handleRequestSort(event, property);
  // };

  // function descendingComparator(a, b, orderBy) {
  //   if (b[orderBy] < a[orderBy]) {
  //     return -1;
  //   }
  //   if (b[orderBy] > a[orderBy]) {
  //     return 1;
  //   }
  //   return 0;
  // }

  // function getComparator(order, orderBy) {
  //   return order === 'desc'
  //     ? (a, b) => descendingComparator(a, b, orderBy)
  //     : (a, b) => -descendingComparator(a, b, orderBy);
  // }

  // function stableSort(array, comparator) {
  //   const stabilizedThis = array.map((el, index) => [el, index]);
  //   stabilizedThis.sort((a, b) => {
  //     const order = comparator(a[0], b[0]);
  //     if (order !== 0) return order;
  //     return a[1] - b[1];
  //   });
  //   return stabilizedThis.map((el) => el[0]);
  // }

  return (
    <TableContainer>
      <Table size='small' className={noLines ? classes.root : null}>
        <TableHead className={classes.header}>
          <TableRow>
            {headCells.map((headCell, i) => (
              <TableCell
                key={headCell.id}
                align='center'
                // sortDirection={orderBy === headCell.id ? order : false}
              >
                {/* <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              > */}
                {headCell.label}
                {/* </TableSortLabel> */}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* <TableBody>{stableSort(rows, getComparator(order, orderBy))}</TableBody> */}
        <TableBody>{rows}</TableBody>
        {footer ? <TableFooter>{footer}</TableFooter> : null}
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
