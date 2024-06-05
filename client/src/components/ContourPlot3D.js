// src/components/ContourPlot3D.js
import React from 'react';
import Plot from 'react-plotly.js';

const ContourPlot3D = ({ data }) => {
  const uniqueYears = Array.from(new Set(data.map(d => d.year)));
  const uniqueCountries = Array.from(new Set(data.map(d => d.country)));

  const zData = uniqueCountries.map(country =>
    uniqueYears.map(year => {
      const filtered = data.filter(d => d.country === country && d.year === year);
      return filtered.length > 0 ? filtered[0].intensity : 0;
    })
  );

  return (
    <Plot
      data={[
        {
          z: zData,
          x: uniqueYears,
          y: uniqueCountries,
          type: 'contour3d',
        },
      ]}
      layout={{ title: '3D Contour Plot: Intensity and Relevance by Year and Country' }}
    />
  );
};

export default ContourPlot3D;
