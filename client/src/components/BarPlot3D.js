// src/components/BarPlot3D.js
import React from 'react';
import Plot from 'react-plotly.js';

const BarPlot3D = ({ data }) => {
  const topicCounts = data.reduce((acc, cur) => {
    const year = cur.year;
    const topic = cur.topic;
    if (!acc[year]) acc[year] = {};
    if (!acc[year][topic]) acc[year][topic] = 0;
    acc[year][topic]++;
    return acc;
  }, {});

  const years = Object.keys(topicCounts);
  const topics = Array.from(new Set(data.map(d => d.topic)));

  const traces = topics.map(topic => ({
    x: years,
    y: years.map(year => topicCounts[year][topic] || 0),
    z: years.map(() => topic),
    type: 'bar3d',
    name: topic,
  }));

  return (
    <Plot
      data={traces}
      layout={{ title: '3D Bar Plot: Count of Topics by Year' }}
    />
  );
};

export default BarPlot3D;
