// src/components/DonutChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const DonutChart = ({ data }) => {
  const topicCounts = data.reduce((acc, cur) => {
    acc[cur.topic] = (acc[cur.topic] || 0) + 1;
    return acc;
  }, {});

  return (
    <Plot
      data={[
        {
          labels: Object.keys(topicCounts),
          values: Object.values(topicCounts),
          type: 'pie',
          hole: 0.4,
        },
      ]}
      layout={{ title: 'Donut Chart: Distribution by Topics' }}
    />
  );
};

export default DonutChart;
