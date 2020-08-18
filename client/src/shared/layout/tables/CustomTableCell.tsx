import React from 'react';
import TableCell from '@material-ui/core/TableCell';

interface Props {
  children: React.ReactNode;
  noLines?: boolean;
  align?: any; // TODO
}

const CustomTableCell: React.FC<Props> = ({
  children,
  noLines,
  align = 'center',
}) => {
  return (
    <TableCell style={noLines ? { borderBottom: 'none' } : {}} align={align}>
      {children}
    </TableCell>
  );
};

export default CustomTableCell;
