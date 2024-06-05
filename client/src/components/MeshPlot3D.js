// src/components/MeshPlot3D.js
import React from 'react';
import Plot from 'react-plotly.js';

const MeshPlot3D = ({ data }) => {
  return (
    <Plot
      data={[
        {
          x: data.map(d => d.intensity),
          y: data.map(d => d.relevance),
          z: data.map(d => d.likelihood),
          type: 'mesh3d',
        },
      ]}
      layout={{ title: '3D Mesh Plot: Likelihood Distribution' }}
    />
  );
};

export default MeshPlot3D;
