// src/components/ChoroplethMap.js
import React from 'react';
import Plot from 'react-plotly.js';

const ChoroplethMap = ({ data }) => {
  const countryCounts = data.reduce((acc, cur) => {
    acc[cur.country] = (acc[cur.country] || 0) + 1;
    return acc;
  }, {});

  return (
    <Plot
      data={[
        {
          type: 'choropleth',
          locationmode: 'country names',
          locations: Object.keys(countryCounts),
          z: Object.values(countryCounts),
          colorscale: 'Blues',
        },
      ]}
      layout={{ title: 'Choropleth Map: Geographical Distribution by Country' }}
    />
  );
};

export default ChoroplethMap;
