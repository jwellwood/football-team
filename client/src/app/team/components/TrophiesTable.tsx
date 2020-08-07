import React, { ReactElement } from 'react';
// MUI
import TableRow from '@material-ui/core/TableRow';
// Components
import CustomIcon from 'lib/components/icons/CustomIcon';
import PresentationModal from 'lib/components/modals/PresentationModal';
import CustomTable, { ITableHeadCell } from 'lib/components/tables/CustomTable';
import CustomTableCell from 'lib/components/tables/CustomTableCell';
import Trophy from './Trophy.component';
import SectionContainer from 'shared/layout/SectionContainer';
import CustomTypography from 'lib/components/typography/CustomTypography';
import { ITrophyData } from 'shared/types';

interface Props {
  trophies: ITrophyData[];
}

const Trophies: React.FC<Props> = ({ trophies }) => {
  const headCells: ITableHeadCell[] = [
    { id: 'year', label: '' },
    { id: 'winner', label: 'Winner' },
    { id: 'runner-up', label: 'Runner-up' },
  ];
  const rows = trophies.map((trophy: ITrophyData) => {
    const { _id, isWinner, year } = trophy;
    const iconModal = (
      <PresentationModal
        buttonElement={
          <CustomIcon
            icon={isWinner ? 'trophy' : 'medal'}
            color={isWinner ? 'warning' : 'secondary'}
            size='2x'
          />
        }
      >
        <Trophy trophy={trophy} />
      </PresentationModal>
    );

    const cellData: ReactElement[] = [
      <CustomTypography main bold>
        {year}
      </CustomTypography>,
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
    <SectionContainer title='Trophies'>
      <CustomTable headCells={headCells} rows={rows} />
    </SectionContainer>
  );
};

export default Trophies;
