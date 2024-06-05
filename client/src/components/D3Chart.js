// src/components/D3Chart.js
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const D3Chart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', 800)
      .attr('height', 400);

    // Clear previous render
    svg.selectAll('*').remove();

    // Define scales and axes
    const xScale = d3.scaleLinear()
      .domain([d3.min(data, d => d.intensity), d3.max(data, d => d.intensity)])
      .range([0, 800]);

    const yScale = d3.scaleLinear()
      .domain([d3.min(data, d => d.likelihood), d3.max(data, d => d.likelihood)])
      .range([400, 0]);

    svg.append('g')
      .attr('transform', 'translate(0, 400)')
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale));

    svg.selectAll('.dot')
      .data(data)
      .enter().append('circle')
      .attr('cx', d => xScale(d.intensity))
      .attr('cy', d => yScale(d.likelihood))
      .attr('r', 5)
      .style('fill', 'blue');
  }, [data]);

  return <svg ref={ref}></svg>;
};

export default D3Chart;
