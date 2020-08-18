import React from 'react';
import Grid from '@material-ui/core/Grid';
import { getPercentage } from 'utils/helpers';
import { generateOrdinals } from 'utils/helpers/generateOrdinals';
import { theme } from 'lib/theme';
import CustomIcon from 'lib/icons/CustomIcon';
import { CustomAvatar } from 'components/avatars';
import ResultsTotals from 'app/results/components/ResultsTotals.component';
import { DonutGraph } from 'lib/chartjs/graphs';
import { IDonutGraphData } from 'lib/chartjs';
import { SectionTitle, CustomTypography } from 'components/typography';
import AwardList from './AwardList';
import { IPreviousSeason } from 'shared/types';

interface Props {
  season: IPreviousSeason;
}

interface IPreviousSeasonList {
  title: string | React.ReactElement;
  value: number;
  divider?: boolean;
}

const PreviousSeasonContent: React.FC<Props> = ({
  season: {
    year,
    win,
    draw,
    lose,
    goalsFor,
    goalsAgainst,
    awards = [],
    finalPosition,
  },
}) => {
  const { success, warning, primary, secondary } = theme.palette;
  const played: number = win + draw + lose;
  const data: IPreviousSeasonList[] = [
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

  const donutData: IDonutGraphData = {
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
      <ResultsTotals resultsTotals={data} />
      <DonutGraph data={donutData} />
      <SectionTitle title='Awards' />
      <AwardList awards={awards} />
    </>
  );
};

export default PreviousSeasonContent;
