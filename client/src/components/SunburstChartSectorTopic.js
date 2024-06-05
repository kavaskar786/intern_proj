// src/components/SunburstChartSectorTopic.js
import React from 'react';
import Plot from 'react-plotly.js';

const SunburstChartSectorTopic = ({ data }) => {
  const levels = data.reduce((acc, cur) => {
    if (!acc[cur.sector]) acc[cur.sector] = {};
    acc[cur.sector][cur.topic] = (acc[cur.sector][cur.topic] || 0) + 1;
    return acc;
  }, {});

  const labels = ['All'];
  const parents = [''];
  const values = [0];

  Object.keys(levels).forEach(sector => {
    labels.push(sector);
    parents.push('All');
    values.push(Object.values(levels[sector]).reduce((a, b) => a + b, 0));

    Object.keys(levels[sector]).forEach(topic => {
      labels.push(topic);
      parents.push(sector);
      values.push(levels[sector][topic]);
    });
  });

  return (
    <Plot
      data={[
        {
          type: 'sunburst',
          labels,
          parents,
          values,
        },
      ]}
      layout={{ title: 'Sunburst Chart: Hierarchical Data by Sector and Topic' }}
    />
  );
};

export default SunburstChartSectorTopic;
