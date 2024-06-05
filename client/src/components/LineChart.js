// src/components/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.year),
    datasets: [
      {
        label: 'Intensity Over Time',
        data: data.map(d => d.intensity),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      x: { type: 'linear', position: 'bottom' },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
