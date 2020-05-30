import React from 'react';
// MUI
import TableRow from '@material-ui/core/TableRow';
// Components
import CustomIcon from 'components/ui/icons/CustomIcon';
import PresentationModal from 'components/ui/modals/PresentationModal';
import CustomTable from 'components/ui/tables/CustomTable';
import CustomTableCell from 'components/ui/tables/CustomTableCell';
import Trophy from './Trophy';
import GreyBackground from 'containers/GreyBackground';

const Trophies = ({ trophies }) => {
  const headCells = [
    { id: 'year', label: '' },
    { id: 'winner', label: 'Winner' },
    { id: 'runner-up', label: 'Runner-up' },
  ];
  const rows = trophies.map((trophy) => {
    const { _id, isWinner, year } = trophy;
    const iconModal = (
      <PresentationModal
        buttonElement={
          <CustomIcon
            icon={isWinner ? 'trophy' : 'medal'}
            color={isWinner ? 'warning' : 'secondary'}
            size='lg'
          />
        }
      >
        <Trophy trophy={trophy} />
      </PresentationModal>
    );

    const cellData = [
      year,
      trophy.isWinner ? iconModal : null,
      !trophy.isWinner ? iconModal : null,
    ];
    return (
      <TableRow key={_id}>
        {cellData.map((cell, i) => (
          <CustomTableCell key={i} noLines>
            {cell}
          </CustomTableCell>
        ))}
      </TableRow>
    );
  });

  return (
    <GreyBackground>
      <CustomTable headCells={headCells} rows={rows} />
    </GreyBackground>
  );
};

export default Trophies;
