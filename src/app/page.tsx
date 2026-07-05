"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/config";
import { CalendarDays, MapPin, Users, BookOpen, Presentation, GraduationCap, ChevronRight, ArrowRight, Award, Zap, Sparkles } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/shared/Magnetic";
import { PhotoGallery } from "@/components/shared/Gallery";

const FADE_DOWN_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 15 } },
};

const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 15 } },
};

const SLIDES = [
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779950042/Screenshot_2026-05-28_120336_ipmju6.png",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779298973/Screenshot_2026-05-20_231203_hfxw07.png",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779298972/Screenshot_2026-05-20_231231_wundhr.png",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948841/DSC_5343_c11mwh.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948841/DSC_5333_pyiqc7.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948840/DSC_6217_1_kpkz2x.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948840/DSC_5389_ps547t.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948840/DSC_5400_sgrkhs.jpg"
];

function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={SLIDES[index].replace('/upload/', '/upload/c_fill,g_auto:faces,w_1200,h_800,q_auto/')}
            alt="Conference Slide"
            className="w-full h-full object-cover object-[center_20%] transition-transform duration-[5000ms] ease-out scale-105"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* overlay mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10 pointer-events-none" />

      {/* Pagination indicators */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === i 
                ? "bg-gradient-to-r from-primary to-cyan-400 scale-125" 
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-09-14T23:59:59+05:30").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto mb-16 bg-white/40 border border-primary/20 backdrop-blur-2xl rounded-3xl p-6 shadow-xl relative overflow-hidden text-center"
    >
      <div className="absolute top-0 right-0 p-3 opacity-5">
        <CalendarDays className="h-24 w-24 text-primary" />
      </div>
      
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono mb-4 flex items-center justify-center gap-1.5">
        <Sparkles className="h-4 w-4 text-primary animate-pulse" /> LIVE COUNTDOWN TO SUBMISSIONS CLOSE
      </p>

      <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-sm mx-auto">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Mins", value: timeLeft.minutes },
          { label: "Secs", value: timeLeft.seconds }
        ].map((unit, i) => (
          <div key={i} className="bg-slate-900/90 text-white border border-white/10 rounded-2xl p-3 flex flex-col items-center shadow-lg relative overflow-hidden">
            <span className="text-2xl md:text-3xl font-extrabold font-mono tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono mt-1 font-medium">{unit.label}</span>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-slate-400 font-mono mt-4">
        Paper Submission Deadline: September 14, 2026 (11:59 PM IST)
      </p>
    </motion.div>
  );
}

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Home() {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 60]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-transparent">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-foreground overflow-hidden pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN: Premium Constant Auto-Playing Slideshow */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="col-span-1 lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[1.35] w-full rounded-2xl overflow-hidden glass-card shadow-[0_12px_40px_rgba(37,99,235,0.15)] group border border-white/60"
            >
              <div className="absolute inset-0 z-0">
                <Slideshow />
              </div>
              
              {/* Live Status Label */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                <span className="font-mono text-[9px] text-white tracking-widest uppercase font-semibold">NIT SILCHAR</span>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Floating Glassmorphic Details Card */}
            <motion.div
              style={{ y: heroY, opacity: opacityFade }}
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              className="col-span-1 lg:col-span-6 flex flex-col justify-center"
            >
              <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/5 text-primary font-mono text-[10px] mb-6 border border-primary/10 tracking-widest uppercase font-semibold">
                  <Zap className="h-3.5 w-3.5 text-accent" />
                  <span>6th International Conference 2027</span>
                </div>
              </motion.div>

              <motion.h1 
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tighter leading-[1.1] mb-6 text-foreground"
              >
                Emerging <span className="text-gradient">Electronics</span> <br /> 
                <span className="font-mono text-primary/40 font-light font-sans">&amp;</span> <span className="text-gradient">Automation</span>
              </motion.h1>

              <motion.p 
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="text-lg text-muted-foreground mb-8 font-light leading-relaxed max-w-xl"
              >
                Department of Electronics and Instrumentation Engineering, <br />
                National Institute of Technology Silchar.
              </motion.p>
              
              <motion.div 
                variants={FADE_DOWN_ANIMATION_VARIANTS} 
                className="flex flex-wrap gap-4 mb-10"
              >
                <motion.div whileHover={{ y: -3 }} className="flex items-center gap-3 text-foreground glass-card py-2.5 px-6 rounded-xl border border-white/80">
                  <CalendarDays className="h-4.5 w-4.5 text-accent" />
                  <span className="font-mono text-xs tracking-wider uppercase font-semibold text-slate-700">{siteConfig.dates}</span>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} className="flex items-center gap-3 text-foreground glass-card py-2.5 px-6 rounded-xl border border-white/80">
                  <MapPin className="h-4.5 w-4.5 text-accent" />
                  <span className="font-mono text-xs tracking-wider uppercase font-semibold text-slate-700">{siteConfig.location}</span>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} className="flex items-center gap-3 text-foreground glass-card py-2.5 px-6 rounded-xl border border-primary/20 bg-primary/5">
                  <Users className="h-4.5 w-4.5 text-primary" />
                  <span className="font-mono text-xs tracking-wider uppercase font-extrabold text-primary">In-Person Mode</span>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={FADE_UP_ANIMATION_VARIANTS} 
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Magnetic>
                  <Link href="/call-for-papers" className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-[#B59410] text-white hover:opacity-95 px-8 h-14 text-xs font-mono uppercase tracking-widest shadow-xl shadow-primary/20 rounded-xl transition-all hover:scale-105 duration-300 w-full sm:w-auto border-0">
                    Call for Papers
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link href="/registration" className="inline-flex items-center justify-center border border-slate-200 text-slate-700 hover:text-primary px-8 h-14 text-xs font-mono uppercase tracking-widest rounded-xl glass-card transition-all hover:scale-105 duration-300 w-full sm:w-auto">
                    Register Now
                  </Link>
                </Magnetic>
                <Magnetic>
                  <a href="https://cmt3.research.microsoft.com/EEA2027/Submission/Index" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1E3A8A] to-[#B59410] text-white hover:opacity-95 px-8 h-14 text-xs font-mono uppercase tracking-widest shadow-xl shadow-primary/20 rounded-xl transition-all hover:scale-105 duration-300 w-full sm:w-auto border-0">
                    Submit Paper <ArrowRight className="h-4 w-4" />
                  </a>
                </Magnetic>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CONFERENCE STATS / IMPACT SECTION */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-primary text-xs font-bold uppercase tracking-widest mb-4"
            >
              Conference Impact & Reach
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            >
              E2A   <span className="text-gradient">By The Numbers</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground mt-4 max-w-xl mx-auto font-light"
            >
              Fostering academic excellence, global peer-to-peer collaboration, and pioneering electronics research.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                value: 700,
                suffix: "+",
                label: "Accepted Research Papers",
                desc: "Covering a diverse range of topics across electronics and automation.",
              },
              {
                icon: Users,
                value: 100,
                suffix: "+",
                label: "Keynotes & Expert Speakers",
                desc: "Distinguished Fellows, industry executives, and global scientists.",
              },
              {
                icon: Award,
                value: 50,
                suffix: "+",
                label: "Technical Sessions & Tracks",
                desc: "To present and showcase state-of-the-art research.",
              }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-stone-200/60 to-stone-300/40 hover:from-[#1E3A8A] hover:to-[#B59410] transition-all duration-500 shadow-sm"
              >
                {/* Glow Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-stone-50/90 rounded-2xl z-0" />
                
                {/* Custom Fine Dot Grid for Scientific Aura */}
                <div className="absolute inset-0 bg-dot-matrix opacity-20 group-hover:opacity-40 transition-opacity rounded-2xl z-0 pointer-events-none" />

                <div className="relative z-10 glass-card rounded-[15px] p-8 flex flex-col justify-between h-full bg-white/80 group-hover:bg-white/90 transition-colors">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-stone-100 rounded-xl group-hover:bg-primary/10 transition-colors shrink-0">
                      <stat.icon className="h-6 w-6 text-primary group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight text-foreground flex items-baseline">
                      <span className="text-gradient">
                        <AnimatedCounter value={stat.value} />
                        {stat.suffix}
                      </span>
                    </h3>
                    <p className="text-base font-semibold tracking-tight text-slate-800 mt-3 group-hover:text-primary transition-colors">
                      {stat.label}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - The Data Core */}
      <section className="py-32 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-150px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="font-mono text-primary text-xs font-bold uppercase tracking-widest mb-4">
                CONFERENCE INITIATIVE
              </motion.div>
              <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Shaping the future <br/> of <span className="text-gradient">Technology</span>
              </motion.h2>
              <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-lg text-muted-foreground/80 leading-relaxed mb-8">
                The International Conference on Emerging Electronics and Automation (E2A) is organized by the Department of Electronics and Instrumentation Engineering, NIT Silchar. The conference aims to bring together researchers, academicians, and industry professionals to share their research findings and explore new areas of collaboration.
              </motion.p>
              <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-lg text-muted-foreground/80 leading-relaxed mb-10">
                The conference covers a wide range of topics in electronics, instrumentation, and automation, providing a platform for the exchange of ideas and the dissemination of knowledge.
              </motion.p>
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
                <Link href="/about">
                  <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto font-mono text-sm uppercase tracking-widest group">
                    Learn More About E2A <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-150px" }}
              className="relative aspect-square rounded-2xl overflow-hidden glass-card shadow-2xl group"
            >
              <img src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948840/DSC_6297_1_ilo7ja.jpg" alt="NIT Silchar Campus" className="object-cover w-full h-full opacity-90 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
              <div className="absolute bottom-8 left-8 text-white z-20">
                 <div className="flex items-center gap-3 mb-4 bg-white/10 backdrop-blur px-3 py-1.5 w-fit border border-white/20 rounded-full">
                   <GraduationCap className="h-5 w-5 text-accent" />
                   <span className="font-mono text-xs text-white tracking-widest uppercase">VENUE & HOST</span>
                 </div>
                 <h3 className="text-3xl font-bold tracking-tight">
                   Dept. of EIE <br />
                   NIT Silchar
                 </h3>
                 <p className="text-xs text-white/80 mt-2 tracking-wide italic">(Institute of National Importance)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRACKS SECTION - Data Panels */}
      <section className="py-32 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-slate-200 pb-8">
            <div className="max-w-2xl">
              <div className="font-mono text-primary text-xs font-bold uppercase tracking-widest mb-4">
                ACADEMIC DISCIPLINES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Conference Tracks
              </h2>
            </div>
            <Link href="/call-for-papers">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-mono uppercase tracking-widest text-xs h-10 px-6 rounded-none">
                View Guidelines
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {[
              { 
                icon: Award, 
                title: "Track 1: Control And Robotics", 
                desc: "Linear Control, Non-linear Control, Robust Control, Robotics, Automation",
                topics: [
                  "Linear Control", "Non-linear Control", "Robust Control", "Decentralized Control", 
                  "Robotics", "Industrial Automation", "Stability Analysis", "Fractional Order Control"
                ]
              },
              { 
                icon: Presentation, 
                title: "Track 2: Signal and Image Processing", 
                desc: "Image and Video, Multimedia, Speech, Computer Vision",
                topics: [
                  "Image and Video Signal Processing", "Multimedia Applications", "Signal Processing for Big Data", 
                  "Speech and Audio Processing", "Computer Vision", "Biomedical Applications, Bio-Signal Analysis", 
                  "Language Identification", "Information Forensics & Security", "Sparse Signal Processing", 
                  "Time-Frequency Analysis", "Active Noise Control", "Adapative Signal Processing", "Array Signal Processing"
                ]
              },
              { 
                icon: MapPin, 
                title: "Track 3: Communication Systems", 
                desc: "5G & beyond, IoT, RF & Microwave, Antennas",
                topics: [
                  "5G & beyond Communication", "IoT & IIoT Communication", "UDN", "MIMO", "D2D", 
                  "RF & Microwave", "Antennas", "THz Communication", "Small Cells", "mmWave communication", 
                  "Quantum Communication", "Radar Systems", "Optical Communication etc"
                ]
              },
              { 
                icon: CalendarDays, 
                title: "Track 4: Sensors and Instrumentation", 
                desc: "Measurements, Sensors, Bio-Medical, NDT",
                topics: [
                  "Methods of Measurements", "Electromagnetics, Digital Holography, Laser based Instrumentation for Measurement and Monitoring systems", 
                  "Sensors and Sensing Technology", "Non-Destructive Testing", "Smart and Intelligent Sensors", 
                  "Biomedical Sensors, Signal Analysis & Health Monitoring Applications", "IoT Applications in Instrumentation", 
                  "Sensors & Sensor Data Fusion", "Robotics & Mechatronics Systems", "Process Control & Instrumentation."
                ]
              },
              { 
                icon: BookOpen, 
                title: "Track 5: MEMS & VLSI", 
                desc: "MEMS, Nanotechnology, Photonics, VLSI Design",
                topics: [
                  "NEMS & MEMS, Nanotechnology", "Solar Cells, Photonics & Energy", "2D Materials, Organic Semiconductors & Flexible Electronics", 
                  "Advanced Materials, Characterization and Applications", "Device Simulation & Modelling", "Memory Devices & Logic for Storage and Computing", 
                  "FinFET Technology, VLSI Circuits & System Design", "FPGA & Embedded System"
                ]
              },
              { 
                icon: Sparkles, 
                title: "Track 6: AI & Soft Computing", 
                desc: "Machine Learning, Deep Learning, Healthcare AI",
                topics: [
                  "AI and Machine Learning", "CAD System", "Deep Learning Applications", "AI in Healthcare", 
                  "Pattern Recognition", "Biometrics", "Evolutionary Computing", "Hybrid Intelligent Systems", 
                  "E-commerce, E-medicine", "Morphic Computing", "Pervasive computing and Ambient Intelligence", "Data Visualization."
                ]
              },
              { 
                icon: Zap, 
                title: "Track 7: Energy, Power System and Power Electronics", 
                desc: "Power Systems, Renewable Energy, Micro Grids",
                topics: [
                  "Modelling of power and energy systems", "Electrical, thermal, ageing model and estimation of energy storage", 
                  "Power electronic converters for power or energy systems", "Energy/power management", "Battery management", 
                  "Renewable energy", "Electrified transportation", "Energy storage sizing", "EV Charging", 
                  "Energy efficient building", "Micro grid", "Vehicle-to-grid integration", "Grid integration of renewable energy"
                ]
              },
            ].map((track, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative h-full flex flex-col justify-between"
                onClick={() => setActiveTrack(activeTrack === i ? null : i)}
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
                
                <div className="relative h-full flex flex-col justify-between glass-card p-8 cursor-pointer rounded-xl group-hover:bg-white/80 transition-all duration-300">
                  <div>
                    <div className="font-mono text-xs text-primary mb-6 tracking-widest px-3 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit">
                      Track 0{i + 1}
                    </div>
                    <track.icon className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold tracking-tight mb-4 text-foreground">{track.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">{track.desc}</p>
                    
                    {/* Erupted Sub-domains list */}
                    <AnimatePresence initial={false}>
                      {activeTrack === i && (
                        <motion.div
                          key="topics"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="mt-6 pt-6 border-t border-primary/10 space-y-4 w-full text-left"
                        >
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 font-mono block">Subtopics</span>
                          <div className="grid grid-cols-1 gap-2.5">
                            {track.topics.map((topic, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 hover:text-primary transition-colors">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                <span className="font-light">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary font-mono group-hover:underline">
                    <span>{activeTrack === i ? "Collapse Subtopics" : "View Subtopics"}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 border-b border-slate-200 pb-8"
          >
            <div className="font-mono text-primary text-xs font-bold uppercase tracking-widest mb-4">
                CONFERENCE GALLERY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Moments & Memories
            </h2>
          </motion.div>
          <PhotoGallery />
        </div>
      </section>

      {/* IMPORTANT DATES (TIMELINE & COUNTDOWN) */}
      <section id="important-dates" className="py-32 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative">
          
          <div className="text-center mb-16">
            <div className="font-mono text-primary text-xs font-bold uppercase tracking-widest mb-4">
              IMPORTANT TIMELINE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Important Dates
            </h2>
          </div>

          {/* DYNAMIC MILSESTONE TIMER */}
          <CountdownTimer />

          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
            {[
              { date: "July 01, 2026", event: "Paper Submission Starts", highlight: true, id: "T-00" },
              { date: "September 14, 2026", event: "Paper Submission Deadline", highlight: true, id: "T-01" },
              { date: "November 25, 2026", event: "Notification of Acceptance", highlight: false, id: "T-02" },
              { date: "December 31, 2026", event: "Camera Ready Paper Submission", highlight: false, id: "T-03" },
              { date: "November 15, 2026", event: "Early Bird Registration", highlight: true, id: "T-04" },
              { date: "January 20-22, 2027", event: "Conference Dates", highlight: false, id: "T-05" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-none border bg-white z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-primary transition-colors duration-300 ${item.highlight ? 'border-primary shadow-[0_0_15px_rgba(30,58,138,0.2)]' : 'border-slate-300'}`}>
                  <div className={`w-2 h-2 ${item.highlight ? 'bg-primary' : 'bg-slate-300'} group-hover:bg-primary group-hover:animate-pulse`} />
                </div>
                
                <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 border-l-4 ${item.highlight ? 'border-l-primary shadow-lg glow-primary' : 'border-l-slate-300 shadow-sm'} transition-all duration-300 relative overflow-hidden group-hover:-translate-y-2 rounded-xl`}>
                  {item.highlight && (
                    <div className="absolute top-0 right-0 p-2 opacity-5 text-primary">
                      <Zap className="w-16 h-16" />
                    </div>
                  )}
                  <div className="flex flex-col relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-muted-foreground bg-slate-100 px-2 py-1 rounded-md">{item.id}</span>
                      <span className={`font-mono text-sm uppercase tracking-widest ${item.highlight ? 'text-primary font-bold bg-primary/10 px-3 py-1 rounded-full' : 'text-slate-500'}`}>
                        {item.date}
                      </span>
                    </div>
                    <span className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">{item.event}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS & PARTNERS SECTION */}
      <section id="sponsors" className="py-24 relative z-20">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-primary text-xs font-bold uppercase tracking-widest mb-4"
            >
              Collaborations & Support
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            >
              Sponsors <span className="text-gradient">&amp; Partners</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground mt-4 max-w-xl mx-auto font-light"
            >
              Proudly supported by leading publishers, research foundations, and healthcare instrumentation companies.
            </motion.p>
          </div>

          {/* Active Sponsors Grid */}
          <div className="flex justify-center mb-20">
            {[
              { name: "Springer", role: "Publication Partner", desc: "Lecture Notes in Electrical Engineering", status: "(Approval pending )" }
            ].map((sponsor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="max-w-sm w-full text-center p-6 bg-white/40 border border-slate-200 backdrop-blur-md rounded-2xl flex flex-col justify-between items-center h-full hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="h-10 flex items-center justify-center mb-3">
                  <span className="font-extrabold text-lg text-slate-700 tracking-tight font-sans uppercase">{sponsor.name}</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-wider font-mono">{sponsor.role}</p>
                  <p className="text-[9px] text-slate-400 font-light mt-0.5">{sponsor.desc}</p>
                  {sponsor.status && (
                    <p className="text-[8px] text-slate-400 font-light italic mt-1">{sponsor.status}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sponsorship Opportunities (Gold/Silver Tiers etc.) */}
          <div className="border-t border-slate-200 pt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-800">Sponsorship Packages</h3>
              <p className="text-xs text-slate-500 font-light mt-1">Promote your brand to global engineering researchers and practitioners.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  tier: "Platinum Sponsor",
                  cost: "₹ 50,000",
                  color: "from-blue-500/10 to-indigo-500/15 border-blue-200",
                  benefits: [
                    "Logo recognition on the conference website with a link to your website.",
                    "Logo recognition in the conference brochure, banners, proceedings, and sessions.",
                    "A promotional video of the sponsor will be webcast during the general online sessions of the conference.",
                    "A space for exhibiting your product will be provided as required.",
                    "The registration fee for the two (02) persons from your side will be waived.",
                    "A session of 15 minutes duration will be arranged with the participants."
                  ]
                },
                {
                  tier: "Gold Sponsor",
                  cost: "₹ 30,000",
                  color: "from-amber-500/10 to-[#B59410]/15 border-amber-200",
                  benefits: [
                    "Logo recognition on the conference website with a link to your website.",
                    "Logo recognition in the conference brochure, banners, proceedings, and sessions.",
                    "A promotional video of the sponsor will be webcast during the general online sessions of the conference.",
                    "The registration fee for one (01) person from your side will be waived."
                  ]
                },
                {
                  tier: "Silver Sponsor",
                  cost: "₹ 20,000",
                  color: "from-stone-400/10 to-stone-500/15 border-stone-200",
                  benefits: [
                    "Logo recognition on the conference website with a link to your website.",
                    "Logo recognition in the conference brochure, banners, proceedings, and sessions."
                  ]
                }
              ].map((tier, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-gradient-to-br ${tier.color} border p-6 rounded-2xl flex flex-col justify-between`}
                >
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">{tier.tier}</h4>
                    <p className="text-md font-bold text-primary font-mono mt-1">{tier.cost}</p>
                    <div className="h-px bg-slate-200 my-4" />
                    <ul className="space-y-2.5">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span className="font-light leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span>Contact: e2a@ei.nits.ac.in</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-primary to-[#B59410] text-white">
        {/* Animated floating orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
          >
            <div className="font-mono text-white/70 text-xs font-bold uppercase tracking-widest mb-6">
                CONFERENCE ENGAGEMENT
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to Join Us?</h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Submit your research papers or register as an attendee to be part of the premier automation and electronics conference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Magnetic>
                 <Link href="/registration" className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 h-16 px-12 text-sm font-mono uppercase tracking-widest rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.2)] w-full sm:w-auto transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] border-0">
                  Register Now
                </Link>
               </Magnetic>
               <Magnetic>
                 <Link href="/contact" className="inline-flex items-center justify-center border border-white/30 text-white bg-transparent hover:bg-white/10 h-16 px-12 text-sm font-mono uppercase tracking-widest rounded-xl w-full sm:w-auto backdrop-blur-lg transition-all hover:scale-105 hover:border-white/60">
                    Contact Organizers
                  </Link>
               </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
