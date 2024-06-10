import React from 'react';
import Plot from 'react-plotly.js';

const ContourPlot = ({ data }) => {
  return (
      <Plot
        data={[
          {
            z: data.map(d => d.likelihood),
            x: data.map(d => d.intensity),
            y: data.map(d => d.relevance),
            type: 'contour',
            colorscale: [
              [0, '#65D3FD'],
              [1, '#065D7F']
            ],
          },
        ]}
        layout={{
          title: 'ContourPlot',
          autosize: true,
          xaxis: { title: 'Intensity' },
          yaxis: { title: 'Relevance' },
          plot_bgcolor: '#fff',
          paper_bgcolor: '#fff',
          margin: { t: 80, b: 40, l: 40, r: 40 },
        }}
        config={{ responsive: false }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
  );
};

export default ContourPlot;
