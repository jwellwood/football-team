import React from 'react';
import TableCell from '@material-ui/core/TableCell';

const CustomTableCell = ({ children, noLines, align }) => {
  return (
    <TableCell
      style={noLines ? { borderBottom: 'none' } : null}
      align={align || 'center'}
    >
      {children}
    </TableCell>
  );
};

export default CustomTableCell;
