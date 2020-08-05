import React from 'react';
import { Line } from 'react-chartjs-2';
import { line_graph_options } from 'lib/chartjs';

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
  return <Line data={data} height={250} options={line_graph_options} />;
};

export default LineGraph;
