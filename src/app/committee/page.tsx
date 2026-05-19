"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { committeeData } from "@/data/committee";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Users, School, Globe2, Sparkles, BookOpen, Layers, Star } from "lucide-react";

export default function CommitteePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "leadership" | "chairs" | "tpc">("all");

  // Calculate high-fidelity stats dynamically
  const totalCount = committeeData.length;
  
  // Extract unique universities
  const uniqueInstitutes = Array.from(
    new Set(
      committeeData.map(m => {
        const aff = m.affiliation.toLowerCase();
        if (aff.includes("nit silchar")) return "NIT Silchar";
        if (aff.includes("thapar")) return "Thapar University";
        if (aff.includes("vellore") || aff.includes("vit")) return "VIT";
        if (aff.includes("kiit")) return "KIIT";
        if (aff.includes("mnnit")) return "MNNIT Allahabad";
        if (aff.includes("vnit")) return "VNIT Nagpur";
        if (aff.includes("mnit")) return "MNIT Jaipur";
        if (aff.includes("iit")) return "IIT";
        return m.affiliation;
      })
    )
  ).length;

  const internationalCount = committeeData.filter(m => 
    m.affiliation.toLowerCase().includes("australia") || 
    m.affiliation.toLowerCase().includes("usa") || 
    m.affiliation.toLowerCase().includes("uk") || 
    m.affiliation.toLowerCase().includes("fiji") || 
    m.affiliation.toLowerCase().includes("netherlands") ||
    m.affiliation.toLowerCase().includes("finland") ||
    m.affiliation.toLowerCase().includes("israel")
  ).length;

  // Filter members based on search and selected tab category
  const filteredMembers = committeeData.filter(member => {
    const matchesSearch = 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.affiliation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (member.role || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (member.track || "").toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === "all" || member.category === activeTab;
    
    return matchesSearch && matchesTab;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent">
      {/* Header Area */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#1E3A8A]/5 z-0" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-foreground"
          >
            Organizing <span className="text-gradient">Committee</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            A prestigious assembly of leading academicians and global domain experts working collectively to govern E2A&apos;27.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-16">
          
          {/* 100x BETTER: DIVERSITY STATISTICS BOARD */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Total Committee Strength",
                value: `${totalCount} Members`,
                desc: "Renowned subject-matter reviewers & chairs governing submission tracks."
              },
              {
                icon: School,
                title: "University Diversity",
                value: `${uniqueInstitutes}+ Premier Institutes`,
                desc: "Representing elite institutions including IITs, NITs, and central universities."
              },
              {
                icon: Globe2,
                title: "Global Collaboration",
                value: `${internationalCount} International Chairs`,
                desc: "Steered by advisory delegates from Australia, USA, UK, Finland, Fiji, & Netherlands."
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 border border-primary/10 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-all"
              >
                <div className="absolute top-0 right-0 p-3 opacity-5">
                  <stat.icon className="h-24 w-24 text-primary" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-500 font-semibold">{stat.title}</span>
                </div>
                <h4 className="text-2xl font-extrabold text-foreground mb-1 tracking-tight">{stat.value}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* 100x BETTER: INTERACTIVE SEARCH & CATEGORY CONTROLLERS */}
          <div className="bg-white/40 border border-primary/20 backdrop-blur-2xl rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
              
              {/* Category tabs switcher */}
              <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
                {[
                  { id: "all", label: "All Members", count: totalCount },
                  { id: "leadership", label: "Leadership Core", count: committeeData.filter(m => m.category === "leadership").length },
                  { id: "chairs", label: "Organizing & Track Chairs", count: committeeData.filter(m => m.category === "chairs").length },
                  { id: "tpc", label: "Program Committee (TPC)", count: committeeData.filter(m => m.category === "tpc").length }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      setSearchTerm("");
                    }}
                    className={`px-4.5 py-2.5 text-xs font-mono uppercase tracking-wider rounded-xl transition-all font-semibold flex items-center gap-2 border ${
                      activeTab === tab.id
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-[1.03]"
                        : "bg-white/50 text-slate-600 hover:text-primary hover:bg-white border-slate-200"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeTab === tab.id ? "bg-white/20 text-white" : "bg-slate-200/80 text-slate-600"}`}>
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Real-time search bar */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, institute..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 rounded-xl border border-slate-200 bg-white/70 focus:bg-white focus:border-primary/50 text-sm outline-none w-full"
                />
              </div>

            </div>

            {/* Results display */}
            <div className="border-t border-slate-200 pt-6">
              {filteredMembers.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <Search className="h-10 w-10 text-slate-300 mx-auto" />
                  <div>
                    <h5 className="font-semibold text-slate-600">No Committee Members Found</h5>
                    <p className="text-xs text-slate-400 max-w-[280px] mx-auto mt-1">
                      No results matched your search queries. Try entering another keyword.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence mode="popLayout">
                    {filteredMembers.map((member, i) => {
                      const initials = member.name
                        .split(" ")
                        .filter(n => n.includes(".") === false)
                        .map(n => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase();

                      return (
                        <motion.div
                          key={`${member.name}-${member.role || ""}-${i}`}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Card className="h-full border border-slate-200 bg-white/70 hover:bg-white hover:border-accent hover:shadow-[0_12px_30px_rgba(181,148,16,0.06)] rounded-2xl transition-all duration-300 overflow-hidden group relative">
                            {/* Accent gold top bar */}
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <CardContent className="p-6 flex flex-col justify-between h-full">
                              <div>
                                <div className="flex items-start gap-4 mb-4">
                                  {/* Avatar Bubble */}
                                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold font-mono text-sm shadow-md shrink-0">
                                    {initials}
                                  </div>
                                  <div>
                                    <h3 className="font-bold text-base text-foreground leading-snug tracking-tight group-hover:text-primary transition-colors">
                                      {member.name}
                                    </h3>
                                    
                                    {/* Role Badges */}
                                    <div className="flex flex-wrap gap-1.5 mt-2">
                                      {member.role && (
                                        <span className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                                          member.category === "leadership"
                                            ? "bg-accent text-white"
                                            : "bg-primary/10 text-primary"
                                        }`}>
                                          {member.role}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                                  {member.designation}
                                </p>
                              </div>

                              <div className="border-t border-slate-100 pt-4 mt-auto">
                                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider font-mono flex items-center gap-1.5">
                                  <School className="h-3.5 w-3.5 text-primary shrink-0" />
                                  <span className="truncate">{member.affiliation}</span>
                                </p>

                                {/* 100x BETTER: Track and Scope Clarification Badge */}
                                {member.track && (
                                  <div className="mt-3 flex items-center gap-2 bg-blue-50/80 border border-blue-100 p-2 rounded-lg">
                                    <BookOpen className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                                    <div className="text-left">
                                      <span className="text-[8px] font-bold text-blue-500 uppercase tracking-wider font-mono block">Track Governor</span>
                                      <span className="text-[10px] font-bold text-slate-700 block truncate max-w-[200px]">{member.track}</span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
