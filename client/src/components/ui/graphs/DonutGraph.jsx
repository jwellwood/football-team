import React from 'react';
import { Doughnut } from 'react-chartjs-2';
const DonutGraph = ({ data }) => {
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
