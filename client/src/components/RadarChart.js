// src/components/RadarChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const RadarChart = ({ data }) => {
  const uniqueTopics = [...new Set(data.map(d => d.topic))];
  const intensityByTopic = uniqueTopics.map(topic =>
    data.filter(d => d.topic === topic).reduce((acc, cur) => acc + cur.intensity, 0)
  );

  return (
    <Plot
      data={[
        {
          type: 'scatterpolar',
          r: intensityByTopic,
          theta: uniqueTopics,
          fill: 'toself',
          name: 'Intensity by Topic',
        },
      ]}
      layout={{
        polar: {
          radialaxis: { visible: true, range: [0, Math.max(...intensityByTopic)] },
        },
        title: 'Radar Chart: Intensity by Topic',
      }}
    />
  );
};

export default RadarChart;
