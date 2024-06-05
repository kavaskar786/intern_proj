// src/components/Treemap.js
import React from 'react';
import Plot from 'react-plotly.js';

const Treemap = ({ data }) => {
  const regions = {};
  data.forEach(d => {
    if (!regions[d.region]) regions[d.region] = {};
    regions[d.region][d.country] = (regions[d.region][d.country] || 0) + 1;
  });

  const labels = ['World'];
  const parents = [''];
  const values = [data.length];

  Object.keys(regions).forEach(region => {
    labels.push(region);
    parents.push('World');
    values.push(Object.values(regions[region]).reduce((a, b) => a + b, 0));

    Object.keys(regions[region]).forEach(country => {
      labels.push(country);
      parents.push(region);
      values.push(regions[region][country]);
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
      layout={{ title: 'Treemap: Hierarchical Distribution by Region and Country' }}
    />
  );
};

export default Treemap;
