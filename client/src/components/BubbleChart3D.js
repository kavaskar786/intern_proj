import React from 'react';
import Plot from 'react-plotly.js';

const BubbleChart3D = ({ data }) => {
  return (
    <Plot
      data={[
        {
          x: data.map(d => d.intensity),
          y: data.map(d => d.likelihood),
          z: data.map(d => d.relevance),
          mode: 'markers',
          marker: {
            size: data.map(d => d.relevance * 2),
            color: data.map(d => d.intensity),  // Adjusted to fit the theme
            colorscale: [
              [0, '#65D3FD'],
              [1, '#65D3FD']
            ],
            opacity: 0.8,
          },
          type: 'scatter3d',
        },
      ]}
      layout={{
        title: 'BubbleChart3D',
        autosize: true,
        scene: {
          xaxis: { title: 'Intensity' },
          yaxis: { title: 'Likelihood' },
          zaxis: { title: 'Relevance' },
        },
        margin: {
          l: 40,
          r: 40,
          b: 40,
          t: 80,
          pad: 4,
        },
      }}
      style={{ width: '100%', height: '100%' }}
      useResizeHandler={true}
    />
  );
};

export default BubbleChart3D;
