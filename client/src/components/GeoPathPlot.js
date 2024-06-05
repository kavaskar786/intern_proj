// src/components/GeoPathPlot.js
import React from 'react';
import Plot from 'react-plotly.js';

const GeoPathPlot = ({ data }) => {
  const paths = [
    {
      type: 'scattergeo',
      mode: 'lines',
      lon: data.map(d => d.longitude),
      lat: data.map(d => d.latitude),
      line: {
        width: 2,
        color: 'blue',
      },
    },
  ];

  return (
    <Plot
      data={paths}
      layout={{
        title: 'Geo Path Plot: Intensity by Region Paths',
        geo: {
          projection: {
            type: 'mercator',
          },
          showland: true,
          landcolor: 'rgb(217, 217, 217)',
          subunitwidth: 1,
          countrywidth: 1,
          subunitcolor: 'rgb(255,255,255)',
          countrycolor: 'rgb(255,255,255)',
        },
      }}
    />
  );
};

export default GeoPathPlot;
