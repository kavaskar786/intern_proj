// src/components/TreemapChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const TreemapChart = ({ data }) => {
  const levels = data.reduce((acc, cur) => {
    if (!acc[cur.region]) acc[cur.region] = {};
    acc[cur.region][cur.country] = (acc[cur.region][cur.country] || 0) + 1;
    return acc;
  }, {});

  const labels = ['Global'];
  const parents = [''];
  const values = [0];

  Object.keys(levels).forEach(region => {
    labels.push(region);
    parents.push('Global');
    values.push(Object.values(levels[region]).reduce((a, b) => a + b, 0));

    Object.keys(levels[region]).forEach(country => {
      labels.push(country);
      parents.push(region);
      values.push(levels[region][country]);
    });
  });

  return (
    <Plot
      data={[
        {
          type: 'treemap',
          labels,
          parents,
          values,
        },
      ]}
      layout={{ title: 'Treemap: Hierarchical Data by Region and Country' }}
    />
  );
};

export default TreemapChart;
