import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { horizontal_bar_graph_options } from 'lib/chartjs';

interface Props {
  data: any; // TODO
}

const HorizontalBarGraph: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <HorizontalBar
        plugins={[ChartDataLabels]}
        legend={{ display: false }}
        data={data}
        options={horizontal_bar_graph_options}
        height={200}
      />
    </div>
  );
};

export default HorizontalBarGraph;
