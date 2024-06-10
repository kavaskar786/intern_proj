import React from 'react';
import Plot from 'react-plotly.js';

const ParallelCategories = ({ data }) => {
  const showLabels = data.length <= 150;

  return (
    <Plot
      data={[
        {
          type: 'parcats',
          dimensions: [
            {
              label: 'Region',
              values: data.map(d => d.region),
              ticktext: showLabels ? undefined : [],
            },
            {
              label: 'Country',
              values: data.map(d => d.country),
              ticktext: showLabels ? undefined : [],
            },
            {
              label: 'Topic',
              values: data.map(d => d.topic),
              ticktext: showLabels ? undefined : [],
            },
            {
              label: 'Sector',
              values: data.map(d => d.sector),
              ticktext: showLabels ? undefined : [],
            },
          ],
          line: {
            color: data.map(d => d.intensity),
            colorscale: [
              [0, '#65D3FD'],
              [1, '#065D7F'],
            ],
          },
        },
      ]}
      layout={{
        title: 'ParallelCategories',
        autosize: true,
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

export default ParallelCategories;
  