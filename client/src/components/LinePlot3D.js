// src/components/LinePlot3D.js
import React from 'react';
import Plot from 'react-plotly.js';

const LinePlot3D = ({ data }) => {
  const traces = [];
  const groupedData = data.reduce((acc, cur) => {
    if (!acc[cur.country]) acc[cur.country] = [];
    acc[cur.country].push(cur);
    return acc;
  }, {});

  Object.keys(groupedData).forEach(country => {
    traces.push({
      x: groupedData[country].map(d => d.year),
      y: groupedData[country].map(d => d.intensity),
      z: groupedData[country].map(d => d.likelihood),
      type: 'scatter3d',
      mode: 'lines+markers',
      name: country,
    });
  });

  return (
    <Plot
      data={traces}
      layout={{ title: '3D Line Plot: Intensity Over Time for Each Country' }}
    />
  );
};

export default LinePlot3D;
