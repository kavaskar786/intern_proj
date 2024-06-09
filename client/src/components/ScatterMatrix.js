import React from 'react';
import Plot from 'react-plotly.js';

const ScatterMatrix = ({ data }) => {
  return (
    <div className="chart-wrapper">
      <Plot
        data={[
          {
            type: 'splom',
            dimensions: [
              { label: 'Intensity', values: data.map(d => d.intensity) },
              { label: 'Likelihood', values: data.map(d => d.likelihood) },
              { label: 'Relevance', values: data.map(d => d.relevance) },
              { label: 'Year', values: data.map(d => d.year) },
            ],
            marker: {
              color: data.map(d => d.intensity),
              colorscale: [
                [0, '#65D3FD'],
                [1, '#065D7F'],
              ],
              showscale: true,
            },
          },
        ]}
        layout={{
          title: 'Scatter Matrix: Relationships Between Multiple Variables',
          autosize: true,
          font: {
            color: '#065D7F',
          },
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
    </div>
  );
};

export default ScatterMatrix;
