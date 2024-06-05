    // src/components/DumbbellPlot.js
import React from 'react';
import Plot from 'react-plotly.js';

const DumbbellPlot = ({ data }) => {
  const countries = [...new Set(data.map(d => d.country))];
  const intensityByCountry = countries.map(country =>
    data.filter(d => d.country === country).reduce((acc, cur) => acc + cur.intensity, 0)
  );

  const countryPairs = countries.map((country, index) => ({
    country,
    intensity: intensityByCountry[index],
  }));

  return (
    <Plot
      data={[
        {
          type: 'scatter',
          mode: 'lines+markers',
          x: countryPairs.map(pair => pair.intensity),
          y: countries,
          marker: { size: 12 },
          line: { width: 2 },
          name: 'Intensity',
        },
      ]}
      layout={{ title: 'Dumbbell Plot: Intensity Comparison by Country' }}
    />
  );
};

export default DumbbellPlot;
