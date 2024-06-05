// src/components/MarimekkoChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const MarimekkoChart = ({ data }) => {
  const topics = [...new Set(data.map(d => d.topic))];
  const regions = [...new Set(data.map(d => d.region))];

  const z = topics.map(topic =>
    regions.map(region =>
      data.filter(d => d.topic === topic && d.region === region).length
    )
  );

  return (
    <Plot
      data={[
        {
          type: 'meccano',
          x: regions,
          y: topics,
          z,
          showscale: true,
        },
      ]}
      layout={{ title: 'Marimekko Chart: Topic Distribution by Region' }}
    />
  );
};

export default MarimekkoChart;
