"use client";

import { motion, Variants } from "framer-motion";
import { siteConfig } from "@/data/config";

const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent">
      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Dynamic mesh gradient back support */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-500/10 z-0 animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-foreground"
          >
            About <span className="text-gradient">E2A&apos;27</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover the vision, mission, and the people behind the International Conference on Emerging Electronics and Automation.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">The Conference</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The International Conference on Emerging Electronics and Automation (E2A'27) is a premier global forum for researchers, educators, and engineers to disseminate and discuss recent advancements, trends, and challenges in the expansive fields of electronics, automation, and allied domains.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Department of Electronics and Instrumentation Engineering (EIE) at NIT Silchar was established in 2008. The department offers B.Tech, M.Tech, and Ph.D. programs. Our faculty members are actively engaged in cutting-edge research across various specializations including VLSI Design, Signal Processing, Control Systems, and Sensor Technologies.
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              National Institute of Technology Silchar is one of the 31 National Institutes of Technology of India and was established in 1967 as a Regional Engineering College in Assam. In 2002 it was upgraded to the status of National Institute of Technology and was declared as Institute of National Importance under the National Institutes of Technology Act, 2007.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
