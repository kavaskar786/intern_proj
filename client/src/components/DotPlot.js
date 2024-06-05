// src/components/DotPlot.js
import React from 'react';
import Plot from 'react-plotly.js';

const DotPlot = ({ data }) => {
  const countries = [...new Set(data.map(d => d.country))];
  const intensitiesByCountry = countries.map(country =>
    data.filter(d => d.country === country).reduce((acc, cur) => acc + cur.intensity, 0)
  );

  return (
    <Plot
      data={[
        {
          type: 'scatter',
          mode: 'markers',
          x: countries,
          y: intensitiesByCountry,
          marker: {
            size: 12,
            color: intensitiesByCountry,
            colorscale: 'Viridis',
          },
        },
      ]}
      layout={{ title: 'Dot Plot: Intensity by Country' }}
    />
  );
};

export default DotPlot;
