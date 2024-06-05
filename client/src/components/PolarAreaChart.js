// src/components/PolarAreaChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const PolarAreaChart = ({ data }) => {
  const topicRelevance = data.reduce((acc, cur) => {
    acc[cur.topic] = (acc[cur.topic] || 0) + cur.relevance;
    return acc;
  }, {});

  return (
    <Plot
      data={[
        {
          type: 'barpolar',
          r: Object.values(topicRelevance),
          theta: Object.keys(topicRelevance),
          marker: { color: 'blue' },
        },
      ]}
      layout={{ title: 'Polar Area Chart: Relevance by Topic' }}
    />
  );
};

export default PolarAreaChart;
