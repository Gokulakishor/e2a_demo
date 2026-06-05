"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  patronData, 
  honoraryChairData, 
  generalChairsData, 
  convenorData, 
  organizingChairsData, 
  publicationChairsData, 
  publicityChairsData, 
  hospitalityChairsData, 
  tpcData 
} from "@/data/committee";
import { Card, CardContent } from "@/components/ui/card";
import { Search, School, Users, Globe2, Award, BookOpen, Layers } from "lucide-react";

export default function CommitteePage() {
  const [tpcSearch, setTpcSearch] = useState("");

  const filteredTpc = tpcData.filter(member => 
    member.name.toLowerCase().includes(tpcSearch.toLowerCase()) ||
    member.affiliation.toLowerCase().includes(tpcSearch.toLowerCase())
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent relative overflow-hidden">
      {/* Header Area */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-slate-950 text-white">
        {/* Parallax campus background image */}
        <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_auto,w_1600,h_900,q_auto,a_exif/v1779948837/DSC_5375_1_ajert3.jpg" 
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
            Organizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">Committee</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            A prestigious assembly of leading academicians and global domain experts working collectively to govern E2A&apos;27.
          </motion.p>
        </div>
      </section>

      {/* Committee Hierarchy */}
      <section className="py-20 relative">
        {/* Institutional Seal Watermark */}
        <div className="absolute right-0 top-1/4 opacity-[0.02] pointer-events-none select-none z-0 hidden lg:block">
          <img src="/logo.svg" alt="NIT Silchar watermark" className="w-[500px] h-[500px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-24">
          
          {/* PATRON */}
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-4 text-center">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Patron</h2>
            </div>
            <div className="flex justify-center">
              {patronData.map((member, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="max-w-md w-full"
                >
                  <Card className="border border-slate-200 bg-white/70 hover:bg-white hover:border-accent hover:shadow-[0_12px_30px_rgba(181,148,16,0.06)] rounded-2xl transition-all duration-300 overflow-hidden group relative">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent" />
                    <CardContent className="p-8 text-center flex flex-col items-center">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-primary/10 shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                      <h3 className="font-extrabold text-xl text-foreground mb-1 leading-snug group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 font-mono">{member.role}</p>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xs">{member.designation}</p>
                      <div className="border-t border-slate-100 w-full pt-4 mt-4 flex items-center justify-center gap-2 text-xs text-slate-600 font-medium font-mono">
                        <School className="h-4 w-4 text-primary" />
                        <span>{member.affiliation}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* HONORARY CHAIR */}
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-4 text-center">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Honorary Chair</h2>
            </div>
            <div className="flex justify-center">
              {honoraryChairData.map((member, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="max-w-md w-full"
                >
                  <Card className="border border-slate-200 bg-white/70 hover:bg-white hover:border-accent hover:shadow-[0_12px_30px_rgba(181,148,16,0.06)] rounded-2xl transition-all duration-300 overflow-hidden group relative">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent" />
                    <CardContent className="p-8 text-center flex flex-col items-center">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-primary/10 shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                      <h3 className="font-extrabold text-xl text-foreground mb-1 leading-snug group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 font-mono">{member.role}</p>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xs">{member.designation}</p>
                      <div className="border-t border-slate-100 w-full pt-4 mt-4 flex items-center justify-center gap-2 text-xs text-slate-600 font-medium font-mono">
                        <School className="h-4 w-4 text-primary" />
                        <span>{member.affiliation}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* GENERAL CHAIRS */}
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight text-center">General Chairs</h2>
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {generalChairsData.map((member, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="h-full border border-slate-200 bg-white/70 hover:bg-white hover:border-accent hover:shadow-[0_12px_30px_rgba(181,148,16,0.06)] rounded-2xl transition-all duration-300 overflow-hidden group relative flex flex-col">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent" />
                    <CardContent className="p-6 text-center flex flex-col items-center flex-1">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/10 shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-slate-550/10 border border-slate-200 flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
                          <Users className="h-8 w-8 text-primary" />
                        </div>
                      )}
                      <h3 className="font-extrabold text-base text-foreground mb-1 leading-snug group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2 font-mono">{member.role}</p>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xs mb-4">{member.designation}</p>
                      <div className="border-t border-slate-100 w-full pt-4 mt-auto flex items-center justify-center gap-2 text-[11px] text-slate-600 font-semibold font-mono">
                        <School className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span className="line-clamp-2">{member.affiliation}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CONVENOR */}
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-4 text-center">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Convenor</h2>
            </div>
            <div className="flex justify-center">
              {convenorData.map((member, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="max-w-md w-full"
                >
                  <Card className="border border-slate-200 bg-white/70 hover:bg-white hover:border-accent hover:shadow-[0_12px_30px_rgba(181,148,16,0.06)] rounded-2xl transition-all duration-300 overflow-hidden group relative">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent" />
                    <CardContent className="p-8 text-center flex flex-col items-center">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-primary/10 shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                      <h3 className="font-extrabold text-xl text-foreground mb-1 leading-snug group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 font-mono">{member.role}</p>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xs">{member.designation}</p>
                      <div className="border-t border-slate-100 w-full pt-4 mt-4 flex items-center justify-center gap-2 text-xs text-slate-600 font-medium font-mono">
                        <School className="h-4 w-4 text-primary" />
                        <span>{member.affiliation}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ORGANIZING CHAIRS */}
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight text-center">Organizing Chairs</h2>
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {organizingChairsData.map((member, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="h-full border border-slate-200 bg-white/70 hover:bg-white hover:border-accent hover:shadow-[0_12px_30px_rgba(181,148,16,0.06)] rounded-2xl transition-all duration-300 overflow-hidden group relative flex flex-col">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent" />
                    <CardContent className="p-6 text-center flex flex-col items-center flex-1">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/10 shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                      <h3 className="font-extrabold text-base text-foreground mb-1 leading-snug group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2 font-mono whitespace-pre-line">{member.role}</p>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xs mb-4">{member.designation}</p>
                      <div className="border-t border-slate-100 w-full pt-4 mt-auto flex items-center justify-center gap-2 text-[11px] text-slate-600 font-semibold font-mono">
                        <School className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span className="line-clamp-2">{member.affiliation}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* TECHNICAL PROGRAM CHAIRS */}
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-4 text-center">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Technical Program Chairs</h2>
            </div>
            <div className="flex justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-xl w-full text-center p-8 bg-slate-50 border border-slate-200 rounded-3xl"
              >
                <Award className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
                <h4 className="font-extrabold text-lg text-slate-800">Track-wise Selection</h4>
                <p className="text-sm text-slate-500 mt-2 font-medium">To be decided soon</p>
              </motion.div>
            </div>
          </div>

          {/* PUBLICATION CHAIRS */}
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-4 text-center">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Publication Chairs</h2>
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {publicationChairsData.map((chair, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="border border-slate-200 bg-white/70 hover:bg-white hover:border-primary rounded-2xl transition-all duration-300 py-6 text-center group">
                    <CardContent className="p-0">
                      <h4 className="font-extrabold text-base text-foreground leading-snug group-hover:text-primary transition-colors">
                        {chair.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider font-mono mt-1">{chair.affiliation}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* PUBLICITY & HOSPITALITY CHAIRS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* PUBLICITY CHAIRS */}
            <div className="space-y-8">
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-2xl font-extrabold text-foreground tracking-tight text-center">Publicity Chairs</h2>
              </div>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {publicityChairsData.map((member, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <Card className="h-full border border-slate-200 bg-white/70 hover:bg-white hover:border-primary rounded-xl transition-all duration-300 py-4 text-center">
                      <CardContent className="p-3">
                        <h4 className="font-extrabold text-sm text-foreground truncate">{member.name}</h4>
                        <p className="text-[9px] text-slate-500 mt-1 font-medium leading-relaxed">{member.affiliation}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* HOSPITALITY CHAIRS */}
            <div className="space-y-8">
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-2xl font-extrabold text-foreground tracking-tight text-center">Hospitality Chairs</h2>
              </div>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {hospitalityChairsData.map((member, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <Card className="h-full border border-slate-200 bg-white/70 hover:bg-white hover:border-primary rounded-xl transition-all duration-300 py-4 text-center">
                      <CardContent className="p-3">
                        <h4 className="font-extrabold text-sm text-foreground truncate">{member.name}</h4>
                        <p className="text-[9px] text-slate-500 mt-1 font-medium leading-relaxed">{member.affiliation}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>

          {/* TECHNICAL PROGRAM COMMITTEE */}
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-4 text-center">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Technical Program Committee</h2>
            </div>
            
            <div className="bg-white/40 border border-primary/20 backdrop-blur-2xl rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
              <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                {/* Roster Title Removed as per user request */}
                
                {/* Search TPC */}
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by TPC name, institute..."
                    value={tpcSearch}
                    onChange={(e) => setTpcSearch(e.target.value)}
                    className="pl-10 py-2.5 rounded-xl border border-slate-200 bg-white/70 focus:bg-white focus:border-primary/50 text-xs outline-none w-full"
                  />
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                {filteredTpc.length === 0 ? (
                  <div className="text-center py-12 space-y-3">
                    <Search className="h-8 w-8 text-slate-300 mx-auto" />
                    <p className="text-xs text-slate-400">No matching TPC members found.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <AnimatePresence mode="popLayout">
                      {filteredTpc.map((member, i) => (
                        <motion.div
                          key={`${member.name}-${i}`}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-4 rounded-xl border border-slate-100 bg-white/50 hover:bg-white hover:border-primary transition-all duration-300 h-full flex flex-col justify-between group">
                            <h4 className="font-bold text-xs text-slate-800 group-hover:text-primary transition-colors">{member.name}</h4>
                            <p className="text-[10px] text-slate-500 mt-1 font-semibold flex items-center gap-1">
                              <School className="h-3 w-3 text-slate-400 shrink-0" />
                              <span className="truncate">{member.affiliation}</span>
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
