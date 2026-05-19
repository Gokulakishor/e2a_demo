"use client";

import { useEffect, useState } from "react";

export function InteractiveBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 bg-[#FCFBF7] z-[-5]" />;
  }

  // Pre-calculated coordinates for the academic constellation network
  const nodes = [
    { x: 10, y: 15, size: 2.5, pulseDelay: "0s" },
    { x: 25, y: 30, size: 3.5, pulseDelay: "1.5s" },
    { x: 45, y: 12, size: 2.0, pulseDelay: "0.5s" },
    { x: 60, y: 28, size: 3.0, pulseDelay: "2s" },
    { x: 80, y: 18, size: 4.0, pulseDelay: "1s" },
    { x: 90, y: 35, size: 2.0, pulseDelay: "3s" },
    
    { x: 15, y: 55, size: 3.0, pulseDelay: "2.5s" },
    { x: 35, y: 48, size: 2.0, pulseDelay: "0.8s" },
    { x: 50, y: 65, size: 4.5, pulseDelay: "1.2s" },
    { x: 70, y: 52, size: 2.5, pulseDelay: "2.2s" },
    { x: 85, y: 60, size: 3.5, pulseDelay: "0.3s" },
    
    { x: 12, y: 85, size: 2.0, pulseDelay: "1.8s" },
    { x: 28, y: 75, size: 3.0, pulseDelay: "2.7s" },
    { x: 58, y: 88, size: 2.5, pulseDelay: "0.6s" },
    { x: 75, y: 80, size: 3.0, pulseDelay: "1.6s" },
    { x: 92, y: 82, size: 2.0, pulseDelay: "3.2s" }
  ];

  // Interconnection links representing integrated circuit pathways and signal paths
  const links = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 1, to: 7 },
    { from: 7, to: 8 },
    { from: 3, to: 9 },
    { from: 9, to: 10 },
    { from: 6, to: 12 },
    { from: 12, to: 13 },
    { from: 8, to: 13 },
    { from: 9, to: 14 },
    { from: 14, to: 15 },
    { from: 0, to: 6 },
    { from: 5, to: 10 },
    { from: 10, to: 15 },
    { from: 4, to: 9 }
  ];

  // Custom high-value grid intersection glow coordinates
  const gridGlowNodes = [
    { cx: 20, cy: 20, delay: "0s" },
    { cx: 40, cy: 40, delay: "2s" },
    { cx: 60, cy: 20, delay: "4s" },
    { cx: 80, cy: 60, delay: "1s" },
    { cx: 30, cy: 70, delay: "3s" },
    { cx: 70, cy: 80, delay: "5s" }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[-5] overflow-hidden bg-[#FCFBF7]">
      {/* 1. PHYSICAL PARCHMENT TEXTURE WATERMARK */}
      <div className="absolute inset-0 bg-dot-matrix opacity-40" />

      {/* 2. DYNAMIC SLOW-DRIFTING GLASSMORPHIC SILK GRADIENTS */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.25]">
        {/* Navy Silk Blob (Top Left) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[120px] animate-blob-1" />
        
        {/* Gold Silk Blob (Bottom Right) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#B59410]/8 blur-[130px] animate-blob-2" />
        
        {/* Soft Sand Silk Blob (Center-Left) */}
        <div className="absolute top-[30%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-amber-500/4 blur-[110px] animate-blob-3" />
      </div>

      {/* 3. 100x BETTER: DYNAMIC ENHANCED GRID BLUEPRINT SYSTEM */}
      {/* Renders a refined gradient-masked technical blueprint grid with blinking node intersections */}
      <div className="absolute inset-0 opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,white_80%,transparent_100%)] z-[-4]">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <defs>
            {/* Fine gold and navy gradient for the grid lines */}
            <linearGradient id="grid-grad-v" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#B59410" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="grid-grad-h" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#B59410" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Draw Vertical Grid lines (10% increments) */}
          {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((pos) => (
            <line
              key={`v-${pos}`}
              x1={pos}
              y1={0}
              x2={pos}
              y2={100}
              stroke="url(#grid-grad-v)"
              strokeWidth="0.04"
            />
          ))}

          {/* Draw Horizontal Grid lines (10% increments) */}
          {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((pos) => (
            <line
              key={`h-${pos}`}
              x1={0}
              y1={pos}
              x2={100}
              y2={pos}
              stroke="url(#grid-grad-h)"
              strokeWidth="0.04"
            />
          ))}

          {/* Glowing Intersection Nodes */}
          {gridGlowNodes.map((node, idx) => (
            <circle
              key={`grid-glow-${idx}`}
              cx={node.cx}
              cy={node.cy}
              r="0.4"
              fill="#B59410"
              className="animate-pulse-grid-dot"
              style={{ animationDelay: node.delay }}
            />
          ))}
        </svg>
      </div>

      {/* 4. DYNAMIC SPUN CONSTELLATION NETWORK */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg 
          className="w-full h-full animate-rotate-slow origin-center scale-[1.1]" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          {/* Constellation Link lines (Connected Nodes) */}
          {links.map((link, idx) => {
            const startNode = nodes[link.from];
            const endNode = nodes[link.to];
            return (
              <line
                key={idx}
                x1={startNode.x}
                y1={startNode.y}
                x2={endNode.x}
                y2={endNode.y}
                stroke="#1E3A8A"
                strokeWidth="0.08"
                strokeDasharray="0.5 0.5"
              />
            );
          })}

          {/* Star Nodes */}
          {nodes.map((node, idx) => (
            <g key={idx} className="animate-pulse-star" style={{ animationDelay: node.pulseDelay }}>
              {/* Outer Star Halo */}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size * 0.4}
                fill="#B59410"
                opacity="0.2"
              />
              {/* Inner Core Star */}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size * 0.15}
                fill="#1E3A8A"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Subtle Bottom Horizon Mesh Fade */}
      <div className="absolute bottom-0 inset-x-0 h-[20vh] bg-gradient-to-t from-[#FCFBF7] to-transparent" />
    </div>
  );
}
