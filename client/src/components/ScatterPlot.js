// src/components/ScatterPlot.js
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const ScatterPlot = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', 800)
      .attr('height', 400);

    // Clear previous render
    svg.selectAll('*').remove();

    // Define scales and axes
    const xScale = d3.scaleLinear()
      .domain([d3.min(data, d => d.relevance), d3.max(data, d => d.relevance)])
      .range([0, 800]);

    const yScale = d3.scalePoint()
      .domain(data.map(d => d.country))
      .range([0, 400]);

    svg.append('g')
      .attr('transform', 'translate(0, 400)')
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale));

    svg.selectAll('.dot')
      .data(data)
      .enter().append('circle')
      .attr('cx', d => xScale(d.relevance))
      .attr('cy', d => yScale(d.country))
      .attr('r', 5)
      .style('fill', 'orange');
  }, [data]);

  return <svg ref={ref}></svg>;
};

export default ScatterPlot;
