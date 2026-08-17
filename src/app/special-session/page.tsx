"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, School } from "lucide-react";
import { speakersData } from "@/data/speakers";

export default function SpeakersPage() {
  const speakers = speakersData;

  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent relative overflow-hidden">
      <section className="relative pt-48 pb-24 overflow-hidden bg-slate-950 text-white">
        {/* Parallax campus background image */}
        <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_auto,w_1600,h_900,q_auto,a_exif/v1779948840/DSC_6297_1_ilo7ja.jpg" 
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
            Keynote &amp; Plenary <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">Speakers</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Learn from world-renowned experts pushing the boundaries of electronics, automation, and engineering.
          </motion.p>
        </div>
      </section>

      <section className="py-24 relative">
        {/* Institutional Seal Watermark */}
        <div className="absolute right-0 top-1/4 opacity-[0.02] pointer-events-none select-none z-0 hidden lg:block">
          <img src="/logo.svg" alt="NIT Silchar watermark" className="w-[500px] h-[500px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-full"
              >
                <Card className="h-full border border-slate-200 bg-white/70 hover:bg-white hover:border-accent hover:shadow-[0_12px_30px_rgba(181,148,16,0.06)] rounded-2xl transition-all duration-300 overflow-hidden group relative flex flex-col">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent" />
                  <CardContent className="p-8 text-center flex flex-col items-center flex-1">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-primary/10 shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="font-extrabold text-xl text-foreground mb-1 leading-snug group-hover:text-primary transition-colors">
                      {speaker.name}
                    </h3>
                    <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 font-mono">Keynote Speaker</p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">{speaker.designation}</p>
                    <div className="border-t border-slate-100 w-full pt-4 mt-auto flex items-center justify-center gap-2 text-xs text-slate-600 font-semibold font-mono">
                      <School className="h-4 w-4 text-primary shrink-0" />
                      <span className="line-clamp-2">{speaker.affiliation}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}