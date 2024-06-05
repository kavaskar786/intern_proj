// src/components/AnnotatedHeatmap.js
import React from 'react';
import Plot from 'react-plotly.js';

const AnnotatedHeatmap = ({ data }) => {
  const uniqueYears = [...new Set(data.map(d => d.year))];
  const uniqueTopics = [...new Set(data.map(d => d.topic))];

  const z = uniqueTopics.map(topic =>
    uniqueYears.map(year =>
      data.filter(d => d.year === year && d.topic === topic).reduce((acc, cur) => acc + cur.intensity, 0)
    )
  );

  return (
    <Plot
      data={[
        {
          z,
          x: uniqueYears,
          y: uniqueTopics,
          type: 'heatmap',
          showscale: true,
          hoverongaps: false,
        },
      ]}
      layout={{
        title: 'Heatmap with Annotations: Intensity by Year and Topic',
        annotations: z.flatMap((row, rowIndex) =>
          row.map((value, colIndex) => ({
            x: uniqueYears[colIndex],
            y: uniqueTopics[rowIndex],
            text: value.toString(),
            showarrow: false,
            font: { color: 'black' },
          }))
        ),
      }}
    />
  );
};

export default AnnotatedHeatmap;
