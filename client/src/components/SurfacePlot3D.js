// src/components/SurfacePlot3D.js
import React from 'react';
import Plot from 'react-plotly.js';

const SurfacePlot3D = ({ data }) => {
  if (!data || data.length === 0) return <div>No data available</div>;

  const uniqueYears = Array.from(new Set(data.map(d => d.year)));
  const uniqueCountries = Array.from(new Set(data.map(d => d.country)));

  const zData = uniqueCountries.map(country => 
    uniqueYears.map(year => {
      const filtered = data.filter(d => d.country === country && d.year === year);
      return filtered.length > 0 ? filtered[0].intensity : 0;
    })
  );

  // Debugging log
  console.log('SurfacePlot3D Data:', { uniqueYears, uniqueCountries, zData });

  return (
    <Plot
      data={[
        {
          z: zData,
          x: uniqueYears,
          y: uniqueCountries,
          type: 'surface',
        },
      ]}
      layout={{ title: 'Intensity over Years and Countries' }}
    />
  );
};

export default SurfacePlot3D;
