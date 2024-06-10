import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const ScatterPlotColorScale3D = ({ data }) => {
  const [currentData, setCurrentData] = useState({ x: [], y: [], z: [], color: [] });

  useEffect(() => {
    let timeout;

    const updateChart = (newData) => {
      const x = newData.map(d => d.intensity);
      const y = newData.map(d => d.likelihood);
      const z = newData.map(d => d.relevance);
      const color = newData.map(d => d.relevance);

      const updateData = (index) => {
        if (index < x.length) {
          setCurrentData((prevData) => ({
            x: [...prevData.x, x[index]],
            y: [...prevData.y, y[index]],
            z: [...prevData.z, z[index]],
            color: [...prevData.color, color[index]],
          }));
          timeout = setTimeout(() => updateData(index + 1), 100); // Adjust the delay for smoother effect
        }
      };

      setCurrentData({ x: [], y: [], z: [], color: [] });
      updateData(0); // Start updating data from index 0
    };

    updateChart(data);

    return () => clearTimeout(timeout);
  }, [data]);

  return (
      <Plot
        data={[
          {
            x: currentData.x,
            y: currentData.y,
            z: currentData.z,
            mode: 'markers',
            marker: {
              size: 5,
              color: currentData.color,
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
          title: 'ScatterPlotColorScale3D',
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

export default ScatterPlotColorScale3D;
