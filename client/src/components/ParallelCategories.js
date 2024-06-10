import React from 'react';
import Plot from 'react-plotly.js';

const ParallelCategories = ({ data }) => {
  return (
      <Plot
        data={[
          {
            type: 'parcats',
            dimensions: [
              {
                label: 'Region',
                values: data.map(d => d.region),
              },
              {
                label: 'Country',
                values: data.map(d => d.country),
              },
              {
                label: 'Topic',
                values: data.map(d => d.topic),
              },
              {
                label: 'Sector',
                values: data.map(d => d.sector),
              },
            ],
            line: {
              color: data.map(d => d.intensity),
              colorscale: [
                [0, '#65D3FD'],
                [1, '#065D7F']
              ],
            },
          },
        ]}
        layout={{
          title: 'Parallel Categories Diagram: Analysis of Multiple Categorical Variables',
          autosize: true,
          plot_bgcolor: '#fff',
          paper_bgcolor: '#fff',
          margin: {
            l: 40,
            r: 40,
            b: 40,
            t: 40,
            pad: 4,
          },
        }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
  );
};

export default ParallelCategories;
