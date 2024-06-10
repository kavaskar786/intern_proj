import React from 'react';
import Plot from 'react-plotly.js';

const DensityHeatmap = ({ data }) => {
  return (
      <Plot
        data={[
          {
            x: data.map(d => d.intensity),
            y: data.map(d => d.likelihood),
            type: 'histogram2d',
            colorscale: [
              [0, '#65D3FD'],
              [1, '#065D7F']
            ], // Adjust colorscale to #65D3FD color theme
          },
        ]}
        layout={{ 
          title: 'DensityHeatmap',
          autosize: true, // Allow the plot to fit into the grid layout
          margin: {
            l: 40,
            r: 40,
            b: 40,
            t: 80,
            pad: 4
          },
          plot_bgcolor: '#fff',
          paper_bgcolor: '#fff',
        }}
        style={{ width: '100%', height: '100%' }} // Adjust size to fit the grid layout
        useResizeHandler={true}
      />
  );
};

export default DensityHeatmap;
