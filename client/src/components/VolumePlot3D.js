// src/components/VolumePlot3D.js
import React from 'react';
import Plot from 'react-plotly.js';

const VolumePlot3D = ({ data }) => {
  return (
    
    <Plot
      data={[
        {

          x: data.map(d => d.intensity),
          y: data.map(d => d.likelihood),
          z: data.map(d => d.relevance),
          type: 'volume',
          value: data.map(d => d.relevance),
          isomin: 0,
          isomax: 1,
          opacity: 0.1, // Adjust for better visibility
          surface: { count: 17 },
        },
      ]}
      layout={{ title: '3D Volume Plot: Intensity, Likelihood, and Relevance' }}
    />
  );
};

export default VolumePlot3D;
