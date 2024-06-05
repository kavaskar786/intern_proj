// src/components/FunnelChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const FunnelChart = ({ data }) => {
  const topicCounts = data.reduce((acc, cur) => {
    acc[cur.topic] = (acc[cur.topic] || 0) + 1;
    return acc;
  }, {});

  return (
    <Plot
      data={[
        {
          type: 'funnel',
          y: Object.keys(topicCounts),
          x: Object.values(topicCounts),
          textposition: 'inside',
          textinfo: 'value+percent total',
        },
      ]}
      layout={{ title: 'Funnel Chart: Breakdown by Topic' }}
    />
  );
};

export default FunnelChart;
