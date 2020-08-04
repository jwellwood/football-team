import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export interface IDonutData {
  labels: string[];
  datasets: IDonutDataset[];
}

export interface IDonutDataset {
  data: Array<string>;
  backgroundColor: string[];
  borderColor: string;
}

interface Props {
  data: any;
}

const DonutGraph: React.FC<Props> = ({ data }) => {
  return (
    <Doughnut
      data={data}
      options={{
        plugins: {
          datalabels: {
            color: '#fff',
            backgroundColor: 'rgba(0,0,0,0.4)',
            align: 'center',
            anchor: 'center',
            borderRadius: 5,
          },
        },
        legend: {
          display: true,
          position: 'right',
        },
      }}
    />
  );
};

export default DonutGraph;
