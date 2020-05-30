import React from 'react';
// MUITODO
import TableRow from '@material-ui/core/TableRow';
// Internal
import CustomTable from 'components/ui/tables/CustomTable';
import ValueText from 'components/ui/text/ValueText';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import CustomText from 'components/ui/text/CustomText';
import SectionSubtitle from 'components/ui/headers/SectionSubtitle';
import CustomTableCell from 'components/ui/tables/CustomTableCell';

const TargetsTable = ({ targets }) => {
  const headCells = [
    { id: 'name', label: '' },
    { id: 'apps', label: 'Apps' },
    { id: 'goals', label: 'Goals' },
    { id: 'assists', label: 'Assists' },
    { id: 'overall', label: 'Overall' },
  ];

  const rows = targets.map((player, i) => {
    const { name, apps, goals, assists, total } = player;

    const color = (num) => {
      if (num >= 100) {
        return 'success';
      } else if (num > 0) {
        return 'warning';
      } else {
        return 'error';
      }
    };

    return (
      <TableRow key={i}>
        <CustomTableCell align='left'>
          <ValueText>{name}</ValueText>
        </CustomTableCell>
        {[
          { p: +apps.percentage, t: apps.total, tar: apps.target },
          { p: +goals.percentage, t: goals.total, tar: goals.target },
          { p: +assists.percentage, t: assists.total, tar: assists.target },
        ].map((stat, i) => (
          // p: percentage, t: total(actual number)
          <CustomTableCell key={i} align='center'>
            <CustomText type='muted' div color={color(stat.p)}>
              {stat.p}
            </CustomText>
            <CustomText type='caption'>
              {stat.t} of {stat.tar}
            </CustomText>
          </CustomTableCell>
        ))}
        <CustomTableCell align='center'>
          <CustomAvatar shadow={color(+total)}>
            <ValueText>
              {+total}
              <CustomText type='caption'>%</CustomText>
            </ValueText>
          </CustomAvatar>
        </CustomTableCell>
      </TableRow>
    );
  });

  return (
    <>
      <SectionSubtitle title='Players' />
      <CustomTable rows={rows} headCells={headCells} />
    </>
  );
};

export default TargetsTable;
