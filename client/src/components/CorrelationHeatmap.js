import React from 'react';
import Plot from 'react-plotly.js';

const CorrelationHeatmap = ({ data }) => {
  const variables = ['intensity', 'likelihood', 'relevance', 'year'];
  const matrix = variables.map(x =>
    variables.map(y => {
      const xValues = data.map(d => d[x]);
      const yValues = data.map(d => d[y]);
      const correlation = xValues.reduce((sum, xVal, i) => sum + xVal * yValues[i], 0) / xValues.length;
      return correlation;
    })
  );

  return (
    
      <Plot
        data={[
          {
            z: matrix,
            x: variables,
            y: variables,
            type: 'heatmap',
            colorscale: [
              [0, '#65D3FD'],
              [1, '#065D7F']
            ],
          },
        ]}
        layout={{
          title: 'Heatmap: Correlation Between Variables',
          autosize: true,
          xaxis: { title: 'Variables' },
          yaxis: { title: 'Variables' },
          plot_bgcolor: '#fff',
          paper_bgcolor: '#fff',
          margin: { t: 40, b: 40, l: 40, r: 40 },
        }}
        config={{ responsive: false }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
  );
};

export default CorrelationHeatmap;
