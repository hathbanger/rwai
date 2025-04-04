"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Node extends d3.SimulationNodeDatum {
  id: string;
  image: string;
  label?: string;
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

    // User types for tooltips
    const userTypes = [
      "AI Research Lead",
      "Startup Founder",
      "ML Engineer",
      "Data Scientist",
      "Product Manager",
      "Tech Entrepreneur",
      "Innovation Director"
    ];

    const uniquePics = getUniqueRandomPics(7, 14);
    
    // Create profile nodes (top row)
    const profileNodes: Node[] = Array.from({ length: 7 }, (_, i) => ({
      id: `User ${i + 1}`,
      image: `/images/user-pic-${uniquePics[i]}.png`,
      size: 65,
      type: 'profile',
      label: userTypes[i]
    }));

    // Create model logo nodes (bottom row)
    const modelNodes: Node[] = [
      { id: "llama", image: "/images/logo-llana.png", size: 100, type: 'model', label: "Llama 2" },
      { id: "mistral", image: "/images/logo_mistral.png", size: 100, type: 'model', label: "Mistral AI" },
      { id: "deepseek", image: "/images/logo_deepseek.png", size: 100, type: 'model', label: "DeepSeek" },
      { id: "blackforest", image: "/images/logo_black-forest.png", size: 100, type: 'model', label: "Black Forest" }
    ];

    // Create central logo node
    const centralNode: Node = {
      id: "logo",
      image: "/images/RWAi_custom-logo-1.png",
      size: 180,
      type: 'central',
      fixed: true,
      label: "RWAi"
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
    const width = 1600;
    const height = 1200;
    const spacing = 160;
    const modelSpacing = 240;

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr("width", "100%")
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`);

    // Calculate positions for top row (profile nodes)
    const totalProfileRowWidth = (profileNodes.length - 1) * spacing;
    const profileStartX = (width - totalProfileRowWidth) / 2;

    // Calculate positions for bottom row (model nodes)
    const totalModelRowWidth = (modelNodes.length - 1) * modelSpacing;
    const modelStartX = (width - totalModelRowWidth) / 2;

    // Position profile nodes in a straight horizontal line at the top
    profileNodes.forEach((node, i) => {
      node.x = profileStartX + i * spacing;
      node.y = height * 0.12; // Moved higher up
      node.fx = node.x; // Fix X position
      node.fy = node.y; // Fix Y position
    });

    // Position model nodes in a straight horizontal line at the bottom
    modelNodes.forEach((node, i) => {
      node.x = modelStartX + i * modelSpacing;
      node.y = height * 0.9; // Moved even lower
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
        .attr("width", (node.size || 65) * 2)
        .attr("height", (node.size || 65) * 2)
        .attr("preserveAspectRatio", "xMidYMid slice");
    });

    // Create tooltip div
    const tooltip = d3.select("body").append("div")
      .attr("class", "absolute hidden")
      .style("position", "absolute")
      .style("padding", "8px 12px")
      .style("background", "rgba(0, 0, 0, 0.85)")
      .style("color", "white")
      .style("border", "1px solid #FF4500")
      .style("border-radius", "6px")
      .style("font-size", "14px")
      .style("pointer-events", "none")
      .style("transform", "translate(-50%, -100%)")
      .style("transition", "opacity 0.2s")
      .style("z-index", "1000")
      .style("white-space", "nowrap");

    // Create all nodes as circles with hover effects
    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", d => d.size || 45)
      .style("fill", (d, i) => `url(#node-${i})`)
      .style("stroke", "#FF4500")
      .style("stroke-width", 1.25)
      .style("stroke-opacity", 0.8)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .style("stroke-width", "2.5")
          .style("stroke-opacity", "1");

        tooltip
          .style("display", "block")
          .style("opacity", 1)
          .html(d.label || d.id)
          .style("left", (event.pageX) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mousemove", function(event) {
        tooltip
          .style("left", (event.pageX) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", function() {
        d3.select(this)
          .transition()
          .duration(200)
          .style("stroke-width", "1.25")
          .style("stroke-opacity", "0.8");

        tooltip
          .style("display", "none")
          .style("opacity", 0);
      });

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
      tooltip.remove(); // Clean up tooltip
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