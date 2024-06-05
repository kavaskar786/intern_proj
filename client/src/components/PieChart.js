// src/components/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  const topicsCount = data.reduce((acc, d) => {
    d.topics.forEach(topic => {
      acc[topic] = (acc[topic] || 0) + 1;
    });
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(topicsCount),
    datasets: [
      {
        data: Object.values(topicsCount),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
