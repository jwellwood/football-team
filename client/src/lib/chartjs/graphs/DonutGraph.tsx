import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { donut_graph_options } from 'lib/chartjs';

interface Props {
  data: any;
}

const DonutGraph: React.FC<Props> = ({ data }) => {
  return <Doughnut data={data} options={donut_graph_options} />;
};

export default DonutGraph;
