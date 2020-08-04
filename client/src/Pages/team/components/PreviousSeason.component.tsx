import React from 'react';
import Grid from '@material-ui/core/Grid';
import { getPercentage } from 'functions';
import { generateOrdinals } from 'shared/utils/generateOrdinals';
import { theme } from 'shared/theme';
import CustomIcon from 'lib/components/icons/CustomIcon';
import CustomAvatar from 'lib/components/avatars/CustomAvatar';
import ResultsTotals from 'Pages/results/ResultsTotals.component';
import DonutGraph from 'components/ui/graphs/DonutGraph';
import SectionTitle from 'lib/components/typography/SectionTitle';
import CustomTypography from 'lib/components/typography/CustomTypography';
import AwardList from './AwardList';
import { IPreviousSeasonData } from 'shared/types';

interface Props {
  season: IPreviousSeasonData;
}

interface IPreviousSeasonList {
  title: string | React.ReactElement;
  value: number;
  divider?: boolean;
}

interface IDonutData {
  labels: string[];
  datasets: IDonutDataset[];
}

interface IDonutDataset {
  data: Array<[number]>;
  backgroundColor: string[];
  borderColor: string;
}

const PreviousSeasonContent: React.FC<Props> = ({
  season: {
    year,
    win,
    draw,
    lose,
    goalsFor,
    goalsAgainst,
    awards,
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

  const donutData: IDonutData = {
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
