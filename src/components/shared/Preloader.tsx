"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATUS_MESSAGES = [
  "Initializing E2A'27 Neural Nodes...",
  "Calibrating Automated Systems...",
  "Synthesizing Microelectronics Grid...",
  "Establishing Secure NIT Silchar Portals...",
  "Orchestrating Academic Frameworks...",
  "Configuring Intelligent Agent Hub...",
  "System fully synchronized. Welcome."
];

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Lock scroll
    document.body.style.overflow = "hidden";

    // Progress simulation
    let start = 0;
    const duration = 2400; // 2.4 seconds total animation
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      start += increment + Math.random() * 2;
      if (start >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsComplete(true);
          // Restore scroll
          document.body.style.overflow = "";
        }, 300);
      } else {
        setProgress(Math.floor(start));
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  // Cycle status messages based on progress
  useEffect(() => {
    const stage = Math.floor((progress / 100) * (STATUS_MESSAGES.length - 1));
    if (stage !== statusIndex && stage < STATUS_MESSAGES.length) {
      setStatusIndex(stage);
    }
  }, [progress, statusIndex]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100%",
            transition: { 
              duration: 0.8, 
              ease: [0.76, 0, 0.24, 1], // Custom premium cubic bezier
              opacity: { duration: 0.4 } 
            }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FCFBF7] text-[#111827] overflow-hidden select-none"
        >
          {/* Subtle dot matrix grid matching layout */}
          <div className="absolute inset-0 bg-dot-matrix opacity-30" />
          
          {/* Background aura glows */}
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#B59410]/5 blur-[110px]" />

          {/* Core Preloader Wrapper */}
          <div className="relative z-10 flex flex-col items-center max-w-lg w-full px-6 text-center">
            
            {/* Elite Geometric Tech/Circuit Design */}
            <div className="relative w-32 h-32 mb-10 flex items-center justify-center">
              {/* Outer orbit dotted ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#B59410]/30"
              />

              {/* Middle scientific measurement scale */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute w-24 h-24 rounded-full border border-spacing-2 border-[#1E3A8A]/20 flex items-center justify-center"
              >
                <div className="absolute w-[2px] h-3 bg-[#1E3A8A]/40 top-0 left-1/2 -translate-x-1/2" />
                <div className="absolute w-[2px] h-3 bg-[#1E3A8A]/40 bottom-0 left-1/2 -translate-x-1/2" />
                <div className="absolute w-3 h-[2px] bg-[#1E3A8A]/40 left-0 top-1/2 -translate-y-1/2" />
                <div className="absolute w-3 h-[2px] bg-[#1E3A8A]/40 right-0 top-1/2 -translate-y-1/2" />
              </motion.div>

              {/* Circuit Tech Grid traces */}
              <svg className="absolute w-28 h-28 opacity-60" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" fill="none" stroke="#1E3A8A" strokeWidth="0.5" strokeDasharray="3 3" />
                <path d="M 50 12 L 50 20 M 50 80 L 50 88 M 12 50 L 20 50 M 80 50 L 88 50" stroke="#B59410" strokeWidth="1" strokeLinecap="round" />
                <path d="M 23 23 L 30 30 M 77 23 L 70 30 M 23 77 L 30 70 M 77 77 L 70 70" stroke="#1E3A8A" strokeWidth="0.75" />
              </svg>

              {/* Inner Pulsing Core Star */}
              <motion.div
                animate={{ 
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#B59410] flex items-center justify-center shadow-lg shadow-[#1E3A8A]/20"
              >
                {/* Academic star design */}
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </motion.div>
            </div>

            {/* Conference Branding */}
            <h1 className="text-3xl font-bold tracking-[0.25em] font-mono text-gradient mb-2 uppercase animate-pulse">
              E2A &apos;27
            </h1>
            <p className="text-xs uppercase tracking-[0.18em] text-[#1E3A8A] font-semibold mb-1 max-w-[90%]">
              Emerging Electronics & Automation
            </p>
            <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-8">
              National Institute of Technology Silchar
            </p>

            {/* Digital Percentage Display */}
            <div className="font-mono text-3xl font-light tracking-wider text-foreground mb-3 flex items-baseline">
              <span className="text-[#B59410] font-medium mr-1">
                {progress.toString().padStart(3, "0")}
              </span>
              <span className="text-xs text-muted-foreground opacity-60">%</span>
            </div>

            {/* Premium Progress Bar */}
            <div className="w-full h-[3px] bg-stone-200/80 rounded-full overflow-hidden mb-4 relative">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#1E3A8A] via-[#B59410] to-[#1E3A8A] rounded-full"
                style={{ width: `${progress}%` }}
                layoutId="loaderProgressBar"
              />
              <div 
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress-bar-stripes_1s_linear_infinite]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Futuristic Terminal Shell Status */}
            <div className="font-mono text-[10px] text-muted-foreground bg-stone-100/60 border border-stone-200/40 rounded px-3 py-2 w-full max-w-sm flex items-center justify-center gap-2 overflow-hidden shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <span className="truncate tracking-wide">{STATUS_MESSAGES[statusIndex]}</span>
            </div>

          </div>
          
          {/* Bottom Security / Authenticity Watermark */}
          <div className="absolute bottom-6 font-mono text-[9px] text-muted-foreground/60 tracking-widest flex items-center gap-1.5">
            <span>SECURE SYSTEM CONNECTION ESTABLISHED</span>
            <span>•</span>
            <span>TLS 1.3</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
