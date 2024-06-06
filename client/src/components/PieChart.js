// src/components/ParallelCategories.js
import React from 'react';
import Plot from 'react-plotly.js';

const PieChart = ({ data }) => {
    const topics = [...new Set(data.map(d => d.topic))];
    const topicCounts = topics.map(topic => data.filter(d => d.topic === topic).length);
  return (
    
      
      <Plot
        data={[
          {
            values: topicCounts,
            labels: topics,
            type: 'pie',
          },
        ]}
        layout={{
          title: 'Distribution of Topics',
          height: 600,  // Increase the height of the pie chart
        }}
      />

  );
};

export default PieChart;
