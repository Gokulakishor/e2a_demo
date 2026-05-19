"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tracksData } from "@/data/tracks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ChevronRight, Sparkles, BrainCircuit, RotateCcw } from "lucide-react";

// Keywords mapping for local client-side semantic matching
const TRACK_KEYWORDS = [
  {
    index: 0,
    title: "Track 1: Microelectronics & VLSI",
    keywords: ["vlsi", "ic", "circuit", "transistor", "analog", "digital", "semiconductor", "chip", "cadence", "fpga", "device modeling", "mosfet", "finfet", "vhdl", "verilog", "low power", "cmos", "asic", "hardware", "integrated circuit"]
  },
  {
    index: 1,
    title: "Track 2: Signal & Image Processing",
    keywords: ["image", "video", "audio", "acoustic", "computer vision", "recognition", "deep learning", "machine learning", "neural", "processing", "filter", "speech", "detection", "classification", "segmentation", "cnn", "pattern", "dsp"]
  },
  {
    index: 2,
    title: "Track 3: Control & Automation",
    keywords: ["control", "robot", "manipulator", "intelligent", "automation", "process control", "nonlinear", "linear control", "feedback", "pid", "trajectory", "actuator", "kinematics", "mechatronics", "drones", "uav", "adaptive control"]
  },
  {
    index: 3,
    title: "Track 4: Power & Energy Systems",
    keywords: ["power", "energy", "grid", "smart grid", "renewable", "solar", "wind", "battery", "storage", "electronics and drives", "inverter", "converter", "voltage", "current", "microgrid", "photovoltaic", "thermal", "utility"]
  },
  {
    index: 4,
    title: "Track 5: Communication Systems",
    keywords: ["communication", "wireless", "mobile", "optical", "5g", "6g", "antenna", "microwave", "rf", "network", "telecom", "channel", "mimo", "telecommunication", "satellite", "rfid", "propagation"]
  },
  {
    index: 5,
    title: "Track 6: Sensors & Instrumentation",
    keywords: ["sensor", "instrumentation", "iot", "internet of things", "biosensor", "mems", "measurement", "transducer", "calibration", "biomedical instrumentation", "sensor network", "actuation", "smart sensors", "spectroscopy"]
  }
];

export default function CallForPapersPage() {
  const [paperTitle, setPaperTitle] = useState("");
  const [paperAbstract, setPaperAbstract] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendations, setRecommendations] = useState<any[] | null>(null);

  const handleRecommendation = () => {
    if (!paperTitle && !paperAbstract) return;
    
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const combinedText = `${paperTitle.toLowerCase()} ${paperAbstract.toLowerCase()}`;
      const scores = TRACK_KEYWORDS.map(track => {
        let matches = 0;
        let matchedKeywords: string[] = [];
        
        track.keywords.forEach(kw => {
          if (combinedText.includes(kw)) {
            matches += combinedText.split(kw).length - 1;
            if (!matchedKeywords.includes(kw)) {
              matchedKeywords.push(kw);
            }
          }
        });
        
        // Base match percentage algorithm
        const baseScore = matches * 15;
        const finalPercentage = Math.min(Math.max(baseScore, matches > 0 ? 35 : 10), 98) + Math.floor(Math.random() * 2);
        
        return {
          index: track.index,
          title: track.title,
          percentage: finalPercentage,
          matchedKeywords: matchedKeywords.slice(0, 4)
        };
      });

      // Sort by best match score
      scores.sort((a, b) => b.percentage - a.percentage);
      setRecommendations(scores);
      setIsAnalyzing(false);
    }, 1200);
  };

  const handleReset = () => {
    setPaperTitle("");
    setPaperAbstract("");
    setRecommendations(null);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent">
      {/* Dynamic Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#1E3A8A]/5 z-0" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-foreground"
          >
            Call for <span className="text-gradient">Papers</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            We invite original and high-quality research contributions to be presented at E2A&apos;27.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">
          {/* CMT Submissions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-accent/5 border border-accent/20 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-md"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Submit Your Research</h3>
              <p className="text-muted-foreground">All submissions must be made electronically via the Microsoft CMT portal.</p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/95 text-white shrink-0 font-mono tracking-wide py-6 px-8 rounded-xl shadow-md border-0">
              Submit via CMT <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* AI SMART TRACK MATCHING UTILITY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-primary/20 bg-white/40 backdrop-blur-2xl rounded-3xl p-8 shadow-xl space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <BrainCircuit className="h-40 w-40 text-primary" />
            </div>
            
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="p-2.5 bg-primary/10 rounded-xl">
                <Sparkles className="h-6 w-6 text-accent animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">AI Smart Track Matcher</h3>
                <p className="text-sm text-slate-500">Paste your research details to instantly discover the optimal conference track recommendations.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* INPUT PANEL */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="paper-title" className="text-xs font-semibold uppercase font-mono tracking-wider text-slate-500">Paper Title</label>
                  <input
                    id="paper-title"
                    type="text"
                    placeholder="Enter your paper's working title..."
                    value={paperTitle}
                    onChange={(e) => setPaperTitle(e.target.value)}
                    className="w-full bg-white/70 border border-slate-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-sm text-slate-800 transition-all outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="paper-abstract" className="text-xs font-semibold uppercase font-mono tracking-wider text-slate-500">Abstract Summary</label>
                  <textarea
                    id="paper-abstract"
                    rows={4}
                    placeholder="Paste your paper's abstract or a brief list of core research keywords..."
                    value={paperAbstract}
                    onChange={(e) => setPaperAbstract(e.target.value)}
                    className="w-full bg-white/70 border border-slate-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-sm text-slate-800 transition-all outline-none resize-none"
                  />
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={handleRecommendation}
                    disabled={isAnalyzing || (!paperTitle && !paperAbstract)}
                    className="flex-1 bg-primary hover:bg-primary/95 text-white font-semibold py-6 rounded-xl shadow-md transition-all disabled:opacity-50 border-0"
                  >
                    {isAnalyzing ? "Analyzing Semantics..." : "Analyze Submission Track"}
                  </Button>
                  {recommendations && (
                    <Button variant="outline" onClick={handleReset} className="px-5 border-slate-200 hover:bg-slate-50 rounded-xl">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* OUTPUT RESULTS */}
              <div className="h-full min-h-[220px] bg-slate-50/40 border border-slate-100 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {isAnalyzing ? (
                    <motion.div
                      key="analyzing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center space-y-4 text-center py-8"
                    >
                      <div className="relative flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
                        <Sparkles className="absolute h-5 w-5 text-accent animate-bounce" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Semantic Analyzer Running</p>
                        <p className="text-xs text-slate-400 mt-1">Mapping keywords against academic tracks...</p>
                      </div>
                    </motion.div>
                  ) : recommendations ? (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                    >
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 font-mono">Matched Track Results</h4>
                      
                      {/* BEST MATCH */}
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 relative overflow-hidden">
                        <div className="absolute top-2 right-2 bg-accent text-white text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full uppercase">
                          Best Fit
                        </div>
                        <p className="text-xs text-primary font-mono font-semibold uppercase tracking-wider">Top Recommendation</p>
                        <p className="font-bold text-foreground text-md mt-1 leading-snug">{recommendations[0].title}</p>
                        
                        <div className="mt-3 space-y-1">
                          <div className="flex justify-between text-xs font-semibold text-slate-600">
                            <span>Relevance Score</span>
                            <span className="text-primary font-mono">{recommendations[0].percentage}%</span>
                          </div>
                          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${recommendations[0].percentage}%` }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="bg-accent h-full rounded-full"
                            />
                          </div>
                        </div>

                        {recommendations[0].matchedKeywords.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-3 items-center">
                            <span className="text-[10px] text-slate-400 uppercase font-mono font-semibold">Matched Tags:</span>
                            {recommendations[0].matchedKeywords.map((tag: string, i: number) => (
                              <span key={i} className="text-[10px] bg-slate-200/60 text-slate-700 px-2 py-0.5 rounded font-mono font-medium">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* SECONDARY MATCH */}
                      <div className="border border-slate-100 rounded-xl p-3 bg-white/20">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Secondary Option</span>
                            <p className="font-semibold text-sm text-foreground truncate max-w-[240px]">{recommendations[1].title}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-bold text-slate-600 font-mono">{recommendations[1].percentage}%</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-center space-y-3 py-8"
                    >
                      <BrainCircuit className="h-10 w-10 text-slate-300" />
                      <div>
                        <p className="text-sm font-semibold text-slate-400">Waiting for Input</p>
                        <p className="text-xs text-slate-400 max-w-[260px] mx-auto mt-1">Enter your paper title or abstract details to trigger custom recommendations.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Tracks list */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8 border-b pb-4">Conference Tracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tracksData.map((track, idx) => (
                <Card key={idx} className="border-border hover:border-primary/50 transition-colors bg-white/40 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground font-bold">{track.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {track.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary border-b pb-4">Author Guidelines</h2>
            <p className="text-lg text-muted-foreground">
              Authors are invited to submit original, unpublished research papers not currently under review by another conference or journal. Papers must be written in English and formatted according to the standard IEEE double-column conference template.
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
              <li>Maximum paper length is 6 pages, including figures, tables, and references.</li>
              <li>Extra pages (up to 2) will incur additional page charges.</li>
              <li>All submissions will undergo a double-blind peer review process.</li>
              <li>Accepted and presented papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore&apos;s scope and quality requirements.</li>
            </ul>
            <div className="pt-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Download className="mr-2 h-4 w-4" /> Download IEEE Template
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
