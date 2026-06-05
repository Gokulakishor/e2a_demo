"use client";

import { motion } from "framer-motion";
import { Award, Star, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BestAwardsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent relative overflow-hidden">
      {/* Header Area */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-slate-950 text-white">
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
            Best Presentation <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">Award</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            To encourage high-quality presentations and active participation, the conference will recognize one presenter in each track with the Best Presentation Award.
          </motion.p>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">
          
          {/* Main Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/40 border border-primary/20 backdrop-blur-2xl rounded-3xl p-8 shadow-xl space-y-6"
          >
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
              <div className="p-4 bg-amber-500/10 rounded-2xl text-amber-500">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Maj. Ashish Kumar Roy Memorial Award</h2>
                <p className="text-slate-500 mt-1">Presented by the Maj. Ashish Kumar Roy Foundation (MAKRF)</p>
              </div>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-justify md:text-lg">
              This Award will be presented in the memory of Major Ashish Kumar Roy. The award will be based on the quality of research, clarity of presentation, and ability to engage with the audience.
            </p>
          </motion.div>

          {/* Award Constitution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-slate-200 bg-white/50 backdrop-blur-md hover:border-amber-400/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Star className="h-5 w-5 text-amber-500" />
                    Award Constitution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "Award plaque",
                      "T-Shirt with emblem depicting the award",
                      "Cash of Rs. 2,500/- in an envelope",
                      "A Certificate"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700">
                        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-amber-100 text-amber-600 text-xs font-bold shrink-0">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Evaluation Criteria */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-slate-200 bg-white/50 backdrop-blur-md hover:border-blue-400/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Target className="h-5 w-5 text-blue-500" />
                    Evaluation Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      { icon: Star, text: "Quality and originality of the research" },
                      { icon: Award, text: "Clarity and structure of the presentation" },
                      { icon: Users, text: "Effectiveness in engaging and responding to the audience" }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700">
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-500 shrink-0">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
