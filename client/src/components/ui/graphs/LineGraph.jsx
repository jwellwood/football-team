import React from 'react';
import { Line } from 'react-chartjs-2';
import GreyBackground from 'containers/GreyBackground';

const LineGraph = ({ data }) => {
  return (
    <GreyBackground>
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
    </GreyBackground>
  );
};

export default LineGraph;
