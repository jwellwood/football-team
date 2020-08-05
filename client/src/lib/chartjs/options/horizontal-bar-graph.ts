export const horizontal_bar_graph_options = {
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
