"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Node extends d3.SimulationNodeDatum {
  id: string;
  image: string;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
  size?: number;
  fixed?: boolean;
  type?: 'profile' | 'central' | 'model';
}

interface Link {
  source: string | Node;
  target: string | Node;
  type?: 'profile-to-central' | 'model-to-central';
}

export const Inference = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Get unique profile pictures
    const getUniqueRandomPics = (count: number, max: number) => {
      const available = Array.from({ length: max }, (_, i) => i + 1);
      const result = [];
      
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        result.push(available[randomIndex]);
        available.splice(randomIndex, 1);
      }
      
      return result;
    };

    const uniquePics = getUniqueRandomPics(5, 14);
    
    // Create profile nodes (top row)
    const profileNodes: Node[] = Array.from({ length: 5 }, (_, i) => ({
      id: `User ${i + 1}`,
      image: `/images/user-pic-${uniquePics[i]}.png`,
      size: 45,
      type: 'profile'
    }));

    // Create model logo nodes (bottom row)
    const modelNodes: Node[] = [
      { id: "llama", image: "/images/logo-llana.png", size: 45, type: 'model' },
      { id: "mistral", image: "/images/logo_mistral.png", size: 45, type: 'model' },
      { id: "deepseek", image: "/images/logo_deepseek.png", size: 45, type: 'model' },
      { id: "blackforest", image: "/images/logo_black-forest.png", size: 45, type: 'model' }
    ];

    // Create central logo node
    const centralNode: Node = {
      id: "logo",
      image: "/images/RWAi_custom-logo-1.png",
      size: 80,
      type: 'central',
      fixed: true
    };

    // Combine all nodes
    const nodes = [...profileNodes, ...modelNodes, centralNode];

    // Create links with object references instead of string IDs
    const links: any[] = [
      // Links from profile nodes to central node
      ...profileNodes.map(node => ({
        source: node,
        target: centralNode,
        type: 'profile-to-central'
      })),
      // Links from model nodes to central node
      ...modelNodes.map(node => ({
        source: node,
        target: centralNode,
        type: 'model-to-central'
      }))
    ];

    // SVG dimensions
    const width = 1000;
    const height = 500; // Increased height to accommodate bottom row
    const spacing = 120; // Spacing between nodes in a row

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr("width", "100%")
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`);

    // Calculate positions for top row (profile nodes)
    const totalProfileRowWidth = (profileNodes.length - 1) * spacing;
    const profileStartX = (width - totalProfileRowWidth) / 2;

    // Calculate positions for bottom row (model nodes)
    const totalModelRowWidth = (modelNodes.length - 1) * spacing;
    const modelStartX = (width - totalModelRowWidth) / 2;

    // Position profile nodes in a straight horizontal line at the top
    profileNodes.forEach((node, i) => {
      node.x = profileStartX + i * spacing;
      node.y = height * 0.2; // Top 20%
      node.fx = node.x; // Fix X position
      node.fy = node.y; // Fix Y position
    });

    // Position model nodes in a straight horizontal line at the bottom
    modelNodes.forEach((node, i) => {
      node.x = modelStartX + i * spacing;
      node.y = height * 0.8; // Bottom 20%
      node.fx = node.x; // Fix X position
      node.fy = node.y; // Fix Y position
    });

    // Position central node
    centralNode.x = width / 2;
    centralNode.y = height * 0.5; // Center
    centralNode.fx = centralNode.x; // Fix X position
    centralNode.fy = centralNode.y; // Fix Y position

    // Create curved links with smoother bezier curves
    const linkPath = (d: any) => {
      // Direct access to source and target objects
      const sourceX = d.source.x || 0;
      const sourceY = d.source.y || 0;
      const targetX = d.target.x || 0;
      const targetY = d.target.y || 0;
      
      // Calculate control points for smoother curves
      const controlX = sourceX;
      const controlY = (sourceY + targetY) * 0.5;
      
      return `M${sourceX},${sourceY} Q${controlX},${controlY} ${targetX},${targetY}`;
    };

    // Create the links
    const link = svg.append("g")
      .selectAll("path")
      .data(links)
      .join("path")
      .attr("fill", "none")
      .attr("stroke", "#FF4500")
      .attr("stroke-opacity", 0.8)
      .attr("stroke-width", 2);

    // Set initial paths
    link.attr("d", linkPath);

    // Create defs for image patterns
    const defs = svg.append("defs");

    // Create patterns for each node
    nodes.forEach((node, i) => {
      defs.append("pattern")
        .attr("id", `node-${i}`)
        .attr("width", 1)
        .attr("height", 1)
        .append("image")
        .attr("href", node.image)
        .attr("width", (node.size || 45) * 2)
        .attr("height", (node.size || 45) * 2)
        .attr("preserveAspectRatio", "xMidYMid slice");
    });

    // Create all nodes as circles
    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", d => d.size || 45)
      .style("fill", (d, i) => `url(#node-${i})`)
      .style("stroke", "#FF4500") // Theme color
      .style("stroke-width", 1.25)
      .style("stroke-opacity", 0.8)
      .style("cursor", "default");

    // Modify the simulation to maintain fixed positions and properly handle links
    const simulation = d3.forceSimulation<Node>(nodes)
      .force("link", d3.forceLink(links).distance(200))
      .force("x", d3.forceX(d => d.fx || d.x!).strength(1))
      .force("y", d3.forceY(d => d.fy || d.y!).strength(1))
      .force("collision", d3.forceCollide().radius(d => (d as any).size + 5 || 50));

    // Update positions on each tick
    simulation.on("tick", () => {
      link.attr("d", linkPath);
      
      node
        .attr("cx", d => d.x!)
        .attr("cy", d => d.y!);
    });

    // Cleanup
    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <svg 
      ref={svgRef}
      className="w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default Inference; 