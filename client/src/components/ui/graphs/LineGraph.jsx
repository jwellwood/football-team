import React from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph = ({ data }) => {
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
