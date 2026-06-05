"use client";

import { motion, Variants } from "framer-motion";
import { siteConfig } from "@/data/config";

const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent relative overflow-hidden">
      {/* Page Header */}
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">E2A&apos;27</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover the vision, mission, and the people behind the International Conference on Emerging Electronics and Automation.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative">
        {/* Institutional Seal Watermark */}
        <div className="absolute right-0 bottom-10 opacity-[0.02] pointer-events-none select-none z-0 hidden lg:block">
          <img src="/logo.svg" alt="NIT Silchar watermark" className="w-[500px] h-[500px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-16 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">The Conference</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light text-justify">
              The International Conference on Emerging Electronics and Automation (E2A'27) is a premier global forum for researchers, educators, and engineers to disseminate and discuss recent advancements, trends, and challenges in the expansive fields of electronics, automation, and allied domains.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light text-justify">
              Organized by the esteemed Department of Electronics and Instrumentation Engineering at National Institute of Technology Silchar, this conference aims to bridge the gap between theoretical research and practical industrial applications.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">Department of Electronics & Instrumentation Engineering</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light text-justify">
              The Department of Electronics and Instrumentation Engineering (EIE) at NIT Silchar was established in 2008. The department offers B.Tech, M.Tech, and Ph.D. programs. Our faculty members are actively engaged in cutting-edge research across various specializations including VLSI Design, Signal Processing, Control Systems, Communication, Drone and Robotics Technologies, HealthCare Technologies ,  Energy Engineering and Sensor Technologies.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">National Institute of Technology Silchar</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light text-justify">
              National Institute of Technology Silchar is one of the 31 National Institutes of Technology of India and was established in 1967 as a Regional Engineering College in Assam. In 2002 it was upgraded to the status of National Institute of Technology and was declared as Institute of National Importance under the National Institutes of Technology Act, 2007.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
