import React from 'react';
import { Line } from 'react-chartjs-2';

interface Props {
  data: ILineGraphData;
}

export interface ILineGraphData {
  labels: string[] | number[];
  datasets: ILineGraphDataset[];
}

interface ILineGraphDataset {
  label: string;
  data: number[];
  fill?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
}

const LineGraph: React.FC<Props> = ({ data }) => {
  return (
    <Line
      data={data}
      height={250}
      options={{
        plugins: {
          datalabels: {
            display: false,
          },
        },
      }}
    />
  );
};

export default LineGraph;
