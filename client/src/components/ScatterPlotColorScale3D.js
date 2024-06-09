import React from 'react';
import Plot from 'react-plotly.js';

const ScatterPlotColorScale3D = ({ data }) => {
  return (
    <div className="chart-wrapper">
      <Plot
        data={[
          {
            x: data.map(d => d.intensity),
            y: data.map(d => d.likelihood),
            z: data.map(d => d.relevance),
            mode: 'markers',
            marker: {
              size: 5,
              color: data.map(d => d.relevance),
              colorscale: [
                [0, '#65D3FD'],
                [1, '#065D7F'],
              ],
              showscale: true,
            },
            type: 'scatter3d',
          },
        ]}
        layout={{
          title: '3D Scatter Plot with Color Scale: Intensity, Likelihood, and Relevance',
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

export default ScatterPlotColorScale3D;
