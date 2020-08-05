export const bar_graph_options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      color: '#fff',
      backgroundColor: 'rgba(0,0,0,0.8)',
      align: 'center',
      anchor: 'center',
      borderRadius: 5,
    },
  },
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          display: false,
        },
        gridLines: {},
      },
    ],
  },
};
