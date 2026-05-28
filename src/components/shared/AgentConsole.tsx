"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Users, 
  Terminal, 
  Play, 
  RefreshCw, 
  Activity, 
  Search, 
  CheckCircle2, 
  Share2 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function AgentConsole() {
  const [activeAgent, setActiveAgent] = useState<"alpha" | "beta" | "gamma">("alpha");
  const [simState, setSimState] = useState<"idle" | "running" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [typingIndex, setTypingIndex] = useState(0);

  const alphaLogs = [
    "[INFO] Initializing E2A Track Matcher Agent Alpha...",
    "[INFO] Parsing abstract dataset strings...",
    "[INPUT] Abstract: 'Design of a 45nm low-power SRAM cell using FinFET architecture for biomedical automation'",
    "[COMPUTE] Extracting token arrays: FinFET (95w), SRAM (88w), Low-Power (91w), Biomedical (65w)",
    "[COMPUTE] Executing cosine similarity matches on 6 technical tracks...",
    "[RESULT] Match Found: Track 1 (MEMS & VLSI) - 98.6% overlap [RECOMMENDED]",
    "[RESULT] Match Found: Track 4 (Emerging Electronics) - 74.2% overlap",
    "[SUCCESS] Semantic paper alignment complete. Recommended Track: Track 1."
  ];

  const betaLogs = [
    "[INFO] Initializing E2A TPC Reviewer Broker Agent Beta...",
    "[INFO] Fetching 105 official TPC reviewer profiles...",
    "[INPUT] Target Domain: MEMS & VLSI (Track 1)",
    "[COMPUTE] Matching track expertise weights with active publications lists...",
    "[MATCH] Reviewer index matches: Dr. Rajdeep Dasgupta (NIT Silchar) - Weight: 0.95",
    "[MATCH] Reviewer index matches: Dr. Shivendra K. Pandey (NIT Silchar) - Weight: 0.92",
    "[ACTION] Allocating peer-review tickets in CMT system...",
    "[SUCCESS] 2 peer reviewers successfully assigned. CMT tickets committed [✓]"
  ];

  const gammaLogs = [
    "[INFO] Initializing E2A PDF Compliance Auditor Agent Gamma...",
    "[INFO] Parsing uploaded abstract PDF manuscript...",
    "[CHECK] Verifying Standard Double-Column Page Margins (0.75 in)... COMPLIANT [✓]",
    "[CHECK] Verifying Reference bracket numbering format [1], [2]... COMPLIANT [✓]",
    "[CHECK] Verifying Font families (Times New Roman / serif)... COMPLIANT [✓]",
    "[CHECK] Checking paper format compliance (Springer Rule)... COMPLIANT [✓]",
    "[SUCCESS] Document format compliance audit: 100% Passed. Ready for reviewer pool."
  ];

  const getLogs = () => {
    if (activeAgent === "alpha") return alphaLogs;
    if (activeAgent === "beta") return betaLogs;
    return gammaLogs;
  };

  useEffect(() => {
    // Reset simulation when switching tabs
    setSimState("idle");
    setProgress(0);
    setLogLines([]);
    setTypingIndex(0);
  }, [activeAgent]);

  useEffect(() => {
    let timer: any;
    if (simState === "running") {
      const logs = getLogs();
      if (typingIndex < logs.length) {
        timer = setTimeout(() => {
          setLogLines((prev) => [...prev, logs[typingIndex]]);
          setTypingIndex((prev) => prev + 1);
          setProgress(((typingIndex + 1) / logs.length) * 100);
        }, 800);
      } else {
        setSimState("done");
      }
    }
    return () => clearTimeout(timer);
  }, [simState, typingIndex, activeAgent]);

  const triggerSimulation = () => {
    setSimState("running");
    setProgress(0);
    setLogLines([]);
    setTypingIndex(0);
  };

  return (
    <div className="bg-white/40 border border-primary/20 backdrop-blur-3xl rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      
      {/* Decorative Traditional Mesh watermarks */}
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Cpu className="h-40 w-40 text-primary" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: INTERACTIVE AGENT CONTROLS & HUD TERMINAL */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/25 text-accent text-[10px] font-bold font-mono tracking-widest uppercase animate-pulse">
              <Activity className="h-3.5 w-3.5" />
              <span>Antigravity Autonomous Agent Orbit</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-serif">
              E2A'27 Agent Orchestration Hub
            </h3>
            <p className="text-sm text-slate-500 font-light leading-relaxed max-w-lg">
              Interact with the state-of-the-art autonomous agents governing submissions compliance, semantic matching, and peer reviewer allocations.
            </p>
          </div>

          {/* AGENT BUTTONS TAB SWITCHER */}
          <div className="grid grid-cols-3 gap-2 bg-slate-900/5 p-1 rounded-2xl border border-slate-200/60 shadow-inner">
            {[
              { id: "alpha", label: "Agent Alpha", sub: "Semantic Matcher", icon: Sparkles },
              { id: "beta", label: "Agent Beta", sub: "TPC Allocator", icon: Users },
              { id: "gamma", label: "Agent Gamma", sub: "PDF Auditor", icon: ShieldCheck }
            ].map((agent) => {
              const Icon = agent.icon;
              return (
                <button
                  key={agent.id}
                  onClick={() => setActiveAgent(agent.id as any)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                    activeAgent === agent.id 
                      ? "bg-primary text-white border-primary shadow-lg"
                      : "bg-white/70 text-slate-600 border-slate-200/80 hover:bg-white hover:text-primary"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5 mb-1 shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-mono">{agent.label}</span>
                  <span className="text-[8px] opacity-75 font-medium mt-0.5">{agent.sub}</span>
                </button>
              );
            })}
          </div>

          {/* DYNAMIC PROGRESS INDICATOR */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
              <span>Agent Process execution State</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200/80 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 rounded-full" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* DYNAMIC LIVE HUD SLATE TERMINAL */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-2xl relative overflow-hidden font-mono min-h-[180px] flex flex-col justify-between">
            <div className="absolute top-2 right-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            </div>

            <div className="flex items-center gap-2 pb-2.5 border-b border-slate-900 mb-3 text-[10px] text-slate-500 font-bold tracking-wider">
              <Terminal className="h-4 w-4" />
              <span>ORCHESTRATOR_CONSOLE_STREAM // ACTIVE_AGENT: {activeAgent.toUpperCase()}</span>
            </div>

            <div className="flex-1 space-y-2 text-left text-xs leading-relaxed min-h-[100px]">
              {logLines.map((line, idx) => (
                <div key={idx} className={`${
                  line.includes("[SUCCESS]") ? "text-accent font-bold" :
                  line.includes("[CHECK]") ? "text-slate-300" :
                  line.includes("[RESULT]") ? "text-cyan-400 font-semibold" :
                  "text-slate-400"
                }`}>
                  {line}
                </div>
              ))}

              {simState === "idle" && (
                <div className="text-slate-500 italic text-[11px] h-full flex items-center justify-center">
                  Console standby. Click 'Trigger Agent Mission' below to scan.
                </div>
              )}

              {simState === "running" && typingIndex < getLogs().length && (
                <span className="inline-block w-2 h-4 bg-accent animate-pulse ml-0.5" />
              )}
            </div>

            <div className="pt-3 border-t border-slate-900 flex justify-between items-center text-[9px] text-slate-600 mt-2">
              <span>Status: {simState.toUpperCase()}</span>
              <span>AUTOMATION_PROTOCOL_SECURE</span>
            </div>
          </div>

          {/* CTA TRIGGER ACTION */}
          <div className="flex gap-3">
            <Button
              onClick={triggerSimulation}
              disabled={simState === "running"}
              className="bg-primary hover:bg-primary/95 text-white font-mono uppercase tracking-wider text-xs px-6 py-5 rounded-xl shadow-lg border-0 flex items-center gap-2 flex-1"
            >
              <Play className="h-4 w-4 shrink-0" />
              <span>Trigger Agent Mission</span>
            </Button>
            <Button
              onClick={() => {
                setSimState("idle");
                setLogLines([]);
                setTypingIndex(0);
                setProgress(0);
              }}
              variant="outline"
              className="border-slate-200 rounded-xl px-5"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>

        </div>

        {/* RIGHT COLUMN: 100x BETTER: FUTURISTIC ORBITAL SIMULATOR GRAPH */}
        <div className="lg:col-span-5 flex justify-center relative min-h-[280px]">
          
          {/* Constellation Orbit Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,148,16,0.03),transparent_60%)] pointer-events-none" />

          <svg 
            className="w-72 h-72 scale-[1.05]" 
            viewBox="0 0 100 100"
          >
            {/* Spinning Orbit Path Circles */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="#1E3A8A"
              strokeWidth="0.1"
              strokeDasharray="1.5 2.5"
              className="animate-spin"
              style={{ animationDuration: "35s" }}
            />
            <circle
              cx="50"
              cy="50"
              r="24"
              fill="none"
              stroke="#B59410"
              strokeWidth="0.1"
              strokeDasharray="2 4"
              className="animate-spin"
              style={{ animationDuration: "20s" }}
            />

            {/* Orbiting Satellite Node 1 */}
            <g className="animate-spin origin-center" style={{ animationDuration: "12s" }}>
              <circle cx="50" cy="12" r="3" fill="#B59410" />
              <circle cx="50" cy="12" r="6" fill="#B59410" opacity="0.15" />
            </g>

            {/* Orbiting Satellite Node 2 */}
            <g className="animate-spin origin-center" style={{ animationDuration: "18s" }}>
              <circle cx="26" cy="50" r="2.5" fill="#1E3A8A" />
              <line x1="50" y1="50" x2="26" y2="50" stroke="#1E3A8A" strokeWidth="0.1" strokeDasharray="1 1" />
            </g>

            {/* Connective Floating Constellation signal Net */}
            <g opacity="0.4">
              <line x1="50" y1="50" x2="80" y2="30" stroke="#B59410" strokeWidth="0.15" strokeDasharray="0.5 0.5" />
              <line x1="50" y1="50" x2="20" y2="70" stroke="#1E3A8A" strokeWidth="0.15" strokeDasharray="0.5 0.5" />
              <line x1="80" y1="30" x2="82" y2="65" stroke="#1E3A8A" strokeWidth="0.1" strokeDasharray="0.5 0.5" />
              
              <circle cx="80" cy="30" r="2" fill="#B59410" />
              <circle cx="20" cy="70" r="2" fill="#1E3A8A" />
              <circle cx="82" cy="65" r="1.5" fill="#B59410" />
            </g>

            {/* Center Core HUD Badge */}
            <g>
              {/* Outer Golden Aura Ring */}
              <circle
                cx="50"
                cy="50"
                r="14"
                fill="none"
                stroke="#B59410"
                strokeWidth="0.4"
                opacity="0.3"
                className="animate-pulse"
              />
              {/* Core Navy Sphere */}
              <circle
                cx="50"
                cy="50"
                r="11"
                fill="#1E3A8A"
                className="shadow-2xl"
              />
              
              {/* Core Icon Symbol */}
              {activeAgent === "alpha" && (
                <text x="50" y="52.5" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  α
                </text>
              )}
              {activeAgent === "beta" && (
                <text x="50" y="52.5" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  β
                </text>
              )}
              {activeAgent === "gamma" && (
                <text x="50" y="52.5" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  γ
                </text>
              )}
            </g>
          </svg>

          {/* floating status labels */}
          <div className="absolute top-2 right-6 bg-white/70 backdrop-blur border border-slate-200 px-3 py-1 rounded-xl flex items-center gap-1.5 shadow-sm text-[9px] font-mono font-bold text-slate-600">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            <span>AGENT_ORBITAL_STABLE</span>
          </div>

          <div className="absolute bottom-2 left-6 bg-white/70 backdrop-blur border border-slate-200 px-3 py-1 rounded-xl flex items-center gap-1.5 shadow-sm text-[9px] font-mono font-bold text-slate-600">
            <Share2 className="h-3.5 w-3.5 text-primary" />
            <span>DATASET_MUTATION: OK</span>
          </div>
          
        </div>

      </div>

    </div>
  );
}
