import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'lib/chartjs';
import { bar_graph_options } from 'lib/chartjs';

// const options = {
//   responsive: true,
//   maintainAspectRatio: false,
//   plugins: {
//     datalabels: {
//       color: '#fff',
//       backgroundColor: 'rgba(0,0,0,0.8)',
//       align: 'center',
//       anchor: 'center',
//       borderRadius: 5,
//     },
//   },
//   scales: {
//     xAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false,
//         },
//       },
//     ],
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//           display: false,
//         },
//         gridLines: {},
//       },
//     ],
//   },
// };

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
