import React from 'react';
// MUI
import Grid from '@material-ui/core/Grid';
// Functions
import { getPercentage } from 'functions';
import { generateOrdinals } from 'components/utils/generateOrdinals';
// Assets
import { theme } from 'assets/theme';
// Components
import CustomIcon from 'components/ui/icons/CustomIcon';
import ResultsTotals from 'components/visitor/results/ResultsTotals';
import DonutGraph from 'components/ui/graphs/DonutGraph';
import SectionTitle from 'components/ui/text/SectionTitle';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import AwardList from './AwardList';
import CustomTypography from 'components/ui/text/CustomTypography';

const PreviousSeasonContent = ({ season }) => {
  const {
    year,
    win,
    draw,
    lose,
    goalsFor,
    goalsAgainst,
    awards,
    finalPosition,
  } = season;
  const { success, warning, primary, secondary } = theme.palette;
  const played = win + draw + lose;
  const data = [
    { title: 'Pl', value: played, divider: true },
    { title: 'W', value: win },
    { title: 'D', value: draw },
    { title: 'L', value: lose, divider: true },
    {
      title: <CustomIcon icon='plus' size='xs' />,
      value: goalsFor,
    },
    {
      title: <CustomIcon icon='minus' size='sm' />,
      value: goalsAgainst,
    },
    {
      title: 'GD',
      value: goalsFor - goalsAgainst,
    },
  ];

  const donutData = {
    labels: ['Win', 'Draw', 'Lose'],

    datasets: [
      {
        data: [
          getPercentage(win, played, 0),
          getPercentage(draw, played, 0),
          getPercentage(lose, played, 0),
        ],
        backgroundColor: [success.light, warning.light, primary.light],
        borderColor: secondary.dark,
      },
    ],
  };

  return (
    <>
      <Grid container justify='space-between'>
        <CustomTypography size='lg'>{year}</CustomTypography>
        <CustomAvatar shadow='secondary'>
          {finalPosition}
          <CustomTypography size='xs'>
            {generateOrdinals(finalPosition)}
          </CustomTypography>
        </CustomAvatar>
      </Grid>
      <SectionTitle title='Results' />
      <ResultsTotals data={data} />
      <DonutGraph data={donutData} />
      <SectionTitle title='Awards' />
      <AwardList awards={awards} />
    </>
  );
};

export default PreviousSeasonContent;
