// src/components/ChartJSChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartJSChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.year),
    datasets: [
      {
        label: 'Relevance',
        data: data.map(d => d.relevance),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default ChartJSChart;
