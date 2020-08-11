import React, { ReactElement } from 'react';
// MUI
import TableRow from '@material-ui/core/TableRow';
// Components
import CustomIcon from 'lib/icons/CustomIcon';
import { PresentationModal } from 'components/modals';
import {
  CustomTable,
  CustomTableCell,
  ITableHeadCell,
} from 'shared/layout/tables';
import Trophy from './Trophy.component';
import { SectionContainer } from 'shared/layout/containers';
import { CustomTypography } from 'components/typography';
import { ITrophy } from 'shared/types';

interface Props {
  trophies: ITrophy[];
}

const Trophies: React.FC<Props> = ({ trophies }) => {
  const headCells: ITableHeadCell[] = [
    { id: 'year', label: '' },
    { id: 'winner', label: 'Winner' },
    { id: 'runner-up', label: 'Runner-up' },
  ];
  const rows = trophies.map((trophy: ITrophy) => {
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
        {cellData.map((cell, i: number) => (
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
