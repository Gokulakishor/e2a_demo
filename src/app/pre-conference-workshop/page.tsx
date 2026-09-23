"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, FileText, CreditCard, Plane, ChevronRight, Download } from "lucide-react";
import { School } from "lucide-react";
import { speakersData } from "@/data/speakers";
import { Card, CardContent } from "@/components/ui/card";

export default function preConference() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent relative overflow-hidden">
      {/* Dynamic Header */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-slate-950 text-white">
        {/* Parallax campus background image */}
        <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_auto,w_1600,h_900,q_auto,a_exif/v1779948840/DSC_6217_1_kpkz2x.jpg" 
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">Pre-Conference Workshop</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Everything you need to know about workshop.
          </motion.p>
        </div>
      </section>

      <section className="py-20 relative">
        {/* Institutional Seal Watermark */}
        <div className="absolute left-0 top-1/3 opacity-[0.02] pointer-events-none select-none z-0 hidden lg:block">
          <img src="/logo.svg" alt="NIT Silchar watermark" className="w-[500px] h-[500px]" />
        </div>
         <div className="space-y-8">
                     <div className="border-b border-slate-200 pb-4 text-center">
                       <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Organizer</h2>
                     </div>
                     <div className="flex justify-center">
                       {speakersData.filter((speaker) => speaker.id === "4").map((member, i) => (
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
                               
                               <p className="text-sm font-semibold text-slate-500 leading-relaxed max-w-xs">
  {member.designation.split(",").map((item, index) => (
    <span key={index}>
      {item.trim()}
      {index < member.designation.split(",").length - 1 && <br />}
    </span>
  ))}
</p>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">

          {/* Section 1: Registration */}
          <motion.div
            id="registration"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white/40 border border-slate-200 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl scroll-mt-24"
          >
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <CreditCard className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Frequently Asked Questions</h2>
            </div>
          
            {/* Fee Table */}
          

            <p className="text-xs text-slate-500 italic font-light">
               Arrangements and requirements to be provided by the conference
Projection System, Table, two chairs for participants.
            </p>

            

            {/* Frequently Asked Questions */}
            <div className="pt-8 border-t border-slate-200">
              {/* <h3 className="text-xl font-bold text-primary mb-4">Frequently Asked Questions</h3> */}
              <div className="space-y-4">
                <div className="bg-white/60 border border-slate-100 p-4 rounded-xl">
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">Title of the Workshop and duration in hours?</h5>
                  <p className="text-slate-600 font-light text-sm">Vivan-BCI (Brain-Computer Interface) as an assistive communication solution.
Live Demo time = 40 Min (20 min preparation, 20 min Demo + QA), if 1-2 candidates want to experiment on BCI system themselves that may take same 20 min respectively.</p>
                </div>
                <div className="bg-white/60 border border-slate-100 p-4 rounded-xl">
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">Who can attend and any prerequisites for participation.?</h5>
                  <p className="text-slate-600 font-light text-sm">No age and qualification constrain. Though Engineering students would be finding the implementation part more interesting.</p>
                </div>
                <div className="bg-white/60 border border-slate-100 p-4 rounded-xl">
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">Any limit on the number of participants.?</h5>
                  <p className="text-slate-600 font-light text-sm">No limit.</p>
                </div>
                <div className="bg-white/60 border border-slate-100 p-4 rounded-xl">
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">Whether the participants should bring a laptop or any other devices?</h5>
                  <p className="text-slate-600 font-light text-sm">Not required.</p>
                </div>
                
              </div>
            </div>
          </motion.div>

        

        </div>
      </section>
    </div>
  );
}