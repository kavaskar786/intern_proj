import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const ScatterMatrix = ({ data }) => {
  const [currentData, setCurrentData] = useState({
    intensity: [],
    likelihood: [],
    relevance: [],
    year: [],
  });

  useEffect(() => {
    let timeout;

    const updateChart = (newData) => {
      const intensity = newData.map(d => d.intensity);
      const likelihood = newData.map(d => d.likelihood);
      const relevance = newData.map(d => d.relevance);
      const year = newData.map(d => d.year);

      const updateData = (index) => {
        if (index < intensity.length) {
          setCurrentData((prevData) => ({
            intensity: [...prevData.intensity, intensity[index]],
            likelihood: [...prevData.likelihood, likelihood[index]],
            relevance: [...prevData.relevance, relevance[index]],
            year: [...prevData.year, year[index]],
          }));
          timeout = setTimeout(() => updateData(index + 1), 50); // Adjust the delay for smoother effect
        }
      };

      setCurrentData({ intensity: [], likelihood: [], relevance: [], year: [] });
      updateData(0); // Start updating data from index 0
    };

    updateChart(data);

    return () => clearTimeout(timeout);
  }, [data]);

  return (
    
      <Plot
        data={[
          {
            type: 'splom',
            dimensions: [
              { label: 'Intensity', values: currentData.intensity },
              { label: 'Likelihood', values: currentData.likelihood },
              { label: 'Relevance', values: currentData.relevance },
              { label: 'Year', values: currentData.year },
            ],
            marker: {
              color: currentData.intensity,
              colorscale: [
                [0, '#65D3FD'],
                [1, '#065D7F'],
              ],
              showscale: true,
            },
          },
        ]}
        layout={{
          title: 'Scatter Matrix',
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
            t: 80,
            pad: 4,
          },
        }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />

  );
};

export default ScatterMatrix;
