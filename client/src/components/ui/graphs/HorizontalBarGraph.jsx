import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      color: '#fff',
      align: 'right',
      anchor: 'start',
    },
  },
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          max: 100,
          display: true,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
  },
};

const HorizontalBarGraph = ({ data }) => {
  return (
    <HorizontalBar
      plugins={[ChartDataLabels]}
      legend={{ display: false }}
      data={data}
      options={options}
      height={200}
    />
  );
};

export default HorizontalBarGraph;
