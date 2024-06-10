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
            marker: { 
              size: 12,
              color: '#65D3FD'
            },
            line: { 
              width: 2,
              color: '#065D7F' 
            },
            name: 'Intensity',
          },
        ]}
        layout={{
          title: 'Dumbbell Plot',
          autosize: true,
          xaxis: { title: 'Total Intensity' },
          yaxis: { title: 'Countries' },
          plot_bgcolor: '#fff',
          paper_bgcolor: '#fff',
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

export default DumbbellPlot;
