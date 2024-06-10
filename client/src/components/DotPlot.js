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
              colorscale: [
                [0, '#65D3FD'],
                [1, '#065D7F']
              ],
              opacity: 0.8,
            },
          },
        ]}
        layout={{
          title: 'Dot Plot',
          autosize: true,
          xaxis: { title: 'Countries' },
          yaxis: { title: 'Total Intensity' },
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

export default DotPlot;
