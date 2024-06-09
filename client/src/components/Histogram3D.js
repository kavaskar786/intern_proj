import React from 'react';
import Plot from 'react-plotly.js';

const Histogram3D = ({ data }) => {
  return (
    <div className="chart-wrapper">
      <Plot
        data={[
          {
            x: data.map(d => d.intensity),
            y: data.map(d => d.likelihood),
            z: data.map(d => d.relevance),
            type: 'histogram3d',
            colorscale: [
              [0, '#65D3FD'],
              [1, '#065D7F']
            ],
          },
        ]}
        layout={{
          title: '3D Histogram: Distribution of Intensity and Likelihood',
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
          scene: {
            xaxis: {
              title: 'Intensity',
              tickfont: {
                color: '#065D7F',
              },
            },
            yaxis: {
              title: 'Likelihood',
              tickfont: {
                color: '#065D7F',
              },
            },
            zaxis: {
              title: 'Relevance',
              tickfont: {
                color: '#065D7F',
              },
            },
          },
        }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
    </div>
  );
};

export default Histogram3D;
