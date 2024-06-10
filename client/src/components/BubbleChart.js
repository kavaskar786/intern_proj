import React from 'react';
import Plot from 'react-plotly.js';

const BubbleChart = ({ data }) => {
  return (
      <Plot
        data={[
          {
            x: data.map(d => d.intensity),
            y: data.map(d => d.likelihood),
            text: data.map(d => d.relevance),
            mode: 'markers',
            marker: {
              size: data.map(d => d.relevance * 10),
              color: data.map(d => d.relevance),
              colorscale: [
                [0, '#65D3FD'],
                [1, '#065D7F'],
              ],
              showscale: true,
            },
          },
        ]}
        layout={{
          title: 'Intensity vs Likelihood vs Relevance',
          xaxis: { title: 'Intensity' },
          yaxis: { title: 'Likelihood' },
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
  );
};

export default BubbleChart;
