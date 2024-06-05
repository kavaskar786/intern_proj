// src/components/RoseChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const RoseChart = ({ data }) => {
  const months = Array.from({ length: 12 }, (v, i) => new Date(0, i).toLocaleString('default', { month: 'short' }));
  const intensityByMonth = months.map(month =>
    data.filter(d => new Date(d.date).toLocaleString('default', { month: 'short' }) === month).reduce((acc, cur) => acc + cur.intensity, 0)
  );

  return (
    <Plot
      data={[
        {
          type: 'barpolar',
          r: intensityByMonth,
          theta: months,
          marker: { color: intensityByMonth, colorscale: 'Viridis' },
        },
      ]}
      layout={{ title: 'Rose Chart: Intensity by Month' }}
    />
  );
};

export default RoseChart;
