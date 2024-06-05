// src/components/GeoLinePlot.js
import React from 'react';
import Plot from 'react-plotly.js';

const GeoLinePlot = ({ data }) => {
  const countries = [...new Set(data.map(d => d.country))];
  const latitudes = countries.map(country => data.find(d => d.country === country).latitude);
  const longitudes = countries.map(country => data.find(d => d.country === country).longitude);
  const intensities = countries.map(country =>
    data.filter(d => d.country === country).reduce((acc, cur) => acc + cur.intensity, 0)
  );

  const lines = [];
  for (let i = 0; i < 1000 - 1; i++) {
    lines.push({
      type: 'scattergeo',
      mode: 'lines',
      lat: [latitudes[i], latitudes[i + 1]],
      lon: [longitudes[i], longitudes[i + 1]],
      line: {
        width: intensities[i] / 10,
        color: 'blue',
      },
    });
  }

  return (
    <Plot
      data={lines}
      layout={{
        title: 'Geo Line Plot: Routes with Intensity',
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

export default GeoLinePlot;
