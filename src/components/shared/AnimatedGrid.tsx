"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedGrid() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-background" />;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 opacity-[0.25]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
          transformOrigin: 'top center'
        }}
      />
      
      {/* Moving scanner line effect */}
      <motion.div 
        initial={{ y: "-100%" }}
        animate={{ y: "200%" }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute inset-0 w-full h-[20vh] bg-gradient-to-b from-transparent via-primary/5 to-transparent"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
    </div>
  );
}
