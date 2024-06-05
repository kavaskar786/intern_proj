// src/components/SunburstChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const SunburstChart = ({ data }) => {
  const sectors = Array.from(new Set(data.map(d => d.sector)));
  const topics = Array.from(new Set(data.flatMap(d => d.topics)));

  const chartData = {
    type: "sunburst",
    labels: [...sectors, ...topics],
    parents: [
      ...sectors.map(() => ""), 
      ...data.flatMap(d => d.topics.map(() => d.sector))
    ],
    values: [
      ...sectors.map(sector => data.filter(d => d.sector === sector).length),
      ...topics.map(topic => data.filter(d => d.topics.includes(topic)).length)
    ],
  };

  return (
    <Plot
      data={[chartData]}
      layout={{ title: 'Topics by Sector' }}
    />
  );
};

export default SunburstChart;
