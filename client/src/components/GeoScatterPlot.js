// src/components/GeoScatterPlot.js
import React from 'react';
import Plot from 'react-plotly.js';

const GeoScatterPlot = ({ data }) => {
  return (
    <Plot
      data={[
        {
          type: 'scattergeo',
          mode: 'markers',
          lat: data.map(d => d.latitude),
          lon: data.map(d => d.longitude),
          text: data.map(d => `${d.city}, ${d.country}`),
          marker: {
            size: data.map(d => d.intensity),
            color: data.map(d => d.intensity),
            colorscale: 'Viridis',
            colorbar: {
              title: 'Intensity',
            },
          },
        },
      ]}
      layout={{
        title: 'Geo Scatter Plot: Intensity by Coordinates',
        geo: {
          scope: 'world',
          projection: {
            type: 'orthographic',
          },
        },
      }}
    />
  );
};

export default GeoScatterPlot;
