import React from 'react';
import 'lib/chartjs';
import { Bar } from 'react-chartjs-2';
import { bar_graph_options } from 'lib/chartjs';

interface Props {
  data: any; // todo
}

const BarGraph: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Bar
        legend={{ display: false }}
        data={data}
        height={200}
        options={bar_graph_options}
      />
    </div>
  );
};

export default BarGraph;
