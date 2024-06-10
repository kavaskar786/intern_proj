import React from 'react';
import Plot from 'react-plotly.js';

const PolarScatterPlot = ({ data }) => {
  return (
      <Plot
        data={[
          {
            type: 'scatterpolar',
            r: data.map(d => d.intensity),
            theta: data.map(d => d.topic),
            mode: 'markers',
            marker: {
              size: data.map(d => d.relevance * 10),
              color: data.map(d => d.relevance),
              colorscale: [
                [0, '#65D3FD'],
                [1, '#065D7F']
              ],
              showscale: true,
            },
          },
        ]}
        layout={{
          title: 'Polar Scatter Plot',
          autosize: true,
          polar: {
            radialaxis: {
              visible: true,
              range: [0, Math.max(...data.map(d => d.intensity))]
            },
            angularaxis: {
              visible: true
            },
            bgcolor: '#fff',
          },
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

export default PolarScatterPlot;
