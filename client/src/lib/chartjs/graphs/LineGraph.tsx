import React from 'react';
import { Line } from 'react-chartjs-2';
import { line_graph_options } from 'lib/chartjs';
import { ILineGraphData } from '../types/line-graph-data';

interface Props {
  data: ILineGraphData;
}

const LineGraph: React.FC<Props> = ({ data }) => {
  return <Line data={data} height={250} options={line_graph_options} />;
};

export default LineGraph;
