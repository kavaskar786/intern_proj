// src/components/RadarChart.js
import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChart = ({ data }) => {
  const pestCategories = ['Political', 'Economic', 'Social', 'Technological'];
  const pestData = pestCategories.map(category => (
    data.filter(d => d.pest === category).length
  ));

  const chartData = {
    labels: pestCategories,
    datasets: [
      {
        label: 'PEST Analysis',
        data: pestData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return <Radar data={chartData} />;
};

export default RadarChart;
