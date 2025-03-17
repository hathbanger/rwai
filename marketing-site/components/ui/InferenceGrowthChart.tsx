'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const InferenceGrowthChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 400 });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        // Maintain aspect ratio
        const height = Math.min(400, width * 0.7);
        setDimensions({ width, height });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create the chart
  useEffect(() => {
    if (!svgRef.current) return;

    const { width, height } = dimensions;
    
    // Clear previous SVG content
    d3.select(svgRef.current).selectAll('*').remove();

    // Set margins
    const margin = { top: 40, right: 30, bottom: 50, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Generate growth data with faster initial growth
    // Starting with 2B requests in 2025, growing to ~2000B by 2029
    const startValue = 2; // 2 billion requests per day in 2025
    const endValue = 2000; // ~2000 billion requests per day in 2029
    
    // Generate data points using a modified growth formula for faster initial growth
    const generateGrowthData = () => {
      const data = [];
      const numPoints = 100;
      
      for (let i = 0; i <= numPoints; i++) {
        const t = i / numPoints;
        const year = 2025 + t * 4; // 4 years from 2025 to 2029
        
        // Use a power function that grows faster initially but still reaches the same end value
        // This creates a less extreme hockey stick and more gradual growth
        const power = 2.5; // Adjust this value to control the curve shape (higher = more hockey stick)
        const value = startValue + (endValue - startValue) * Math.pow(t, power);
        
        data.push({ year, value });
      }
      return data;
    };
    
    const growthData = generateGrowthData();
    
    // Create key annotations - only keep start and end points
    const annotations = [
      {
        year: 2025,
        value: startValue,
        label: "Current State"
      },
      {
        year: 2029,
        value: endValue,
        label: "1,000x Growth"
      }
    ];

    // Create scales
    const xScale = d3.scaleLinear()
      .domain([2025, 2029])
      .range([0, innerWidth]);

    // Using linear scale to show growth curve
    const yScale = d3.scaleLinear()
      .domain([0, endValue * 1.1])  // Add some padding at the top
      .range([innerHeight, 0]);

    // Create the SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Create a group for the chart content
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Add grid lines
    g.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(
        d3.axisBottom(xScale)
          .tickSize(-innerHeight)
          .tickFormat(() => '')
      )
      .attr('stroke-opacity', 0.1);

    g.append('g')
      .attr('class', 'grid')
      .call(
        d3.axisLeft(yScale)
          .tickSize(-innerWidth)
          .tickFormat(() => '')
      )
      .attr('stroke-opacity', 0.1);

    // Create line generator
    const line = d3.line<{ year: number, value: number }>()
      .x(d => xScale(d.year))
      .y(d => yScale(d.value))
      .curve(d3.curveMonotoneX);  // Smooth curve

    // Add the line path
    g.append('path')
      .datum(growthData)
      .attr('fill', 'none')
      .attr('stroke', '#FF4500')  // Primary color
      .attr('stroke-width', 3)
      .attr('d', line);

    // Add area under the curve
    const area = d3.area<{ year: number, value: number }>()
      .x(d => xScale(d.year))
      .y0(innerHeight)
      .y1(d => yScale(d.value))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(growthData)
      .attr('fill', '#FF4500')
      .attr('fill-opacity', 0.1)
      .attr('d', area);

    // Add annotations
    annotations.forEach(annotation => {
      const x = xScale(annotation.year);
      const y = yScale(annotation.value);

      // Add dot
      g.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 5)
        .attr('fill', '#FF4500');

      // Add label
      g.append('text')
        .attr('x', x)
        .attr('y', y - 15)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('font-weight', 'bold')
        .text(annotation.label);
    });

    // Add x-axis with years
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale).tickFormat(d => d.toString()))
      .attr('font-size', '12px');

    // Add y-axis without specific values
    g.append('g')
      .call(d3.axisLeft(yScale)
        .tickValues([])  // No tick values
        .tickSize(0))    // No tick marks
      .attr('font-size', '12px');
      
    // Add minimal y-axis labels
    const yAxisLabels = [
      { value: 0, label: "Start" },
      { value: endValue, label: "1000x" }
    ];
    
    yAxisLabels.forEach(item => {
      g.append('text')
        .attr('x', -10)
        .attr('y', yScale(item.value))
        .attr('text-anchor', 'end')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '12px')
        .attr('fill', 'currentColor')
        .text(item.label);
        
      // Add small line indicator
      g.append('line')
        .attr('x1', -5)
        .attr('x2', 0)
        .attr('y1', yScale(item.value))
        .attr('y2', yScale(item.value))
        .attr('stroke', 'currentColor')
        .attr('stroke-width', 1);
    });

    // Add axis labels
    g.append('text')
      .attr('x', innerWidth / 2)
      .attr('y', innerHeight + 40)
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .text('Year');

    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -innerHeight / 2)
      .attr('y', -40)
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .text('Daily Inference Requests (Billions)');

    // Add title
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .attr('font-size', '16px')
      .attr('font-weight', 'bold')
      .text('Projected AI Inference Growth (2025-2029)');

  }, [dimensions]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full"
        style={{ maxHeight: '100%', overflow: 'visible' }}
      />
    </div>
  );
};

export default InferenceGrowthChart; 