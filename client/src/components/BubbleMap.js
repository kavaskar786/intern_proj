// src/components/BubbleMap.js
import React from 'react';
import Plot from 'react-plotly.js';

const BubbleMap = ({ data }) => {
  const countries = [...new Set(data.map(d => d.country))];
  const latitudes = countries.map(country => data.find(d => d.country === country).latitude);
  const longitudes = countries.map(country => data.find(d => d.country === country).longitude);
  const intensities = countries.map(country =>
    data.filter(d => d.country === country).reduce((acc, cur) => acc + cur.intensity, 0)
  );

  return (
    <Plot
      data={[
        {
          type: 'scattergeo',
          mode: 'markers',
          lat: latitudes,
          lon: longitudes,
          text: countries,
          marker: {
            size: intensities.map(intensity => intensity / 10),
            color: intensities,
            colorscale: 'Viridis',
            cmin: 0,
            cmax: Math.max(...intensities),
            colorbar: {
              title: 'Intensity',
            },
          },
        },
      ]}
      layout={{
        title: 'Bubble Map: Intensity by Country',
        geo: {
          scope: 'world',
          projection: {
            type: 'robinson',
          },
        },
      }}
    />
  );
};

export default BubbleMap;
