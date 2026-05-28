"use client";

import { motion } from "framer-motion";
import { Presentation } from "lucide-react";

export default function SpecialSessionPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent relative overflow-hidden">
      <section className="relative pt-48 pb-24 overflow-hidden bg-slate-950 text-white">
        {/* Parallax campus background image */}
        <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_auto,w_1600,h_900,q_auto,a_exif/v1779299287/DSC_6225_wnugff.jpg" 
            alt="NIT Silchar Campus" 
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white"
          >
            Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">Session</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Explore focused technical sessions on specialized topics.
          </motion.p>
        </div>
      </section>

      <section className="py-24 relative">
        {/* Institutional Seal Watermark */}
        <div className="absolute right-0 top-1/4 opacity-[0.02] pointer-events-none select-none z-0 hidden lg:block">
          <img src="/logo.svg" alt="NIT Silchar watermark" className="w-[500px] h-[500px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative p-[1px] bg-gradient-to-b from-stone-200/60 to-stone-300/40 rounded-3xl shadow-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-stone-50/90 rounded-3xl z-0" />
            <div className="relative z-10 glass-card rounded-[23px] p-12 text-center bg-white/80">
              <div className="p-4 bg-primary/10 rounded-2xl w-fit mx-auto mb-6">
                <Presentation className="h-10 w-10 text-primary animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Special Session Details</h3>
              <p className="text-lg text-primary font-mono tracking-widest uppercase font-extrabold mb-4">
                To be announced soon
              </p>
              <p className="text-sm text-slate-500 font-light max-w-md mx-auto leading-relaxed">
                The organizing committee is in the process of finalizing special session details. Full information will be posted here once available.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
