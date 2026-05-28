"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/config";
import { MapPin, Plane, Train, Car, Navigation, ShieldCheck, Compass, BedDouble } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Smart travel matching database
const TRAVEL_DATA = {
  kolkata: {
    air: {
      route: "1. Take direct flight from Netaji Subhash Chandra Bose Airport (CCU) to Silchar Kumbhirgram Airport (IXS) [~1 hr 15 mins].\n2. Upon arrival, take pre-paid airport taxi directly to NIT Silchar Campus [~35 km, ~50 mins].",
      duration: "approx. 2.5 hours total",
      cost: "₹5,000 - ₹8,000 flight + ₹1,000 taxi",
      tips: "Alliance Air and IndiGo operate regular daily flights on this route."
    },
    rail: {
      route: "1. Board the Kanchanjunga Express or similar train from Sealdah/Howrah station to Badarpur Junction or Silchar Station [~22-26 hrs].\n2. From station, hire local auto-rickshaw or taxi to the NIT Silchar Campus [~10 km, ~20 mins].",
      duration: "approx. 24 hours",
      cost: "₹600 (Sleeper) - ₹2,500 (3AC/2AC) + ₹250 local transport",
      tips: "Book 2-3 months in advance as train tickets fill up quickly in North-East routes."
    }
  },
  guwahati: {
    air: {
      route: "1. Fly from Lokpriya Gopinath Bordoloi Airport (GAU) to Silchar Kumbhirgram Airport (IXS) [~45 mins].\n2. Take local taxi directly to NIT Silchar Campus [~35 km].",
      duration: "approx. 1.5 hours total",
      cost: "₹3,500 - ₹5,500 flight + ₹1,000 taxi",
      tips: "Highly recommended if you want to avoid a long road journey."
    },
    rail: {
      route: "1. Board Guwahati - Silchar Express or BG Express from Guwahati Railway Station to Silchar Railway Station [~9-11 hrs].\n2. Take local auto/cab directly to NIT Silchar [~10 km].",
      duration: "approx. 10 hours",
      cost: "₹250 (Sleeper) - ₹1,100 (3AC/2AC) + ₹250 local transport",
      tips: "Overnight trains are highly convenient and cost-effective."
    }
  },
  delhi: {
    air: {
      route: "1. Take a flight from Indira Gandhi International Airport (DEL) to Silchar Airport (IXS) via Kolkata or Guwahati [~4-6 hrs].\n2. From Silchar Airport, take a pre-paid taxi to NIT Silchar [~35 km].",
      duration: "approx. 5-7 hours total",
      cost: "₹8,000 - ₹12,000 flight + ₹1,000 taxi",
      tips: "Ensure connecting transit time in CCU or GAU is at least 1.5 hours."
    },
    rail: {
      route: "1. Board a train from New Delhi to Guwahati (e.g. Rajdhani or Sampark Kranti) [~24-28 hrs].\n2. Change train from Guwahati to Silchar, or take overnight bus from Guwahati to Silchar [~10 hrs].\n3. Take local auto to NIT Silchar.",
      duration: "approx. 38 hours total",
      cost: "₹2,500 - ₹5,500 + local transit",
      tips: "Only recommended if you wish to enjoy a scenic tour of North-East foothills."
    }
  },
  bengaluru: {
    air: {
      route: "1. Fly from Kempegowda International Airport (BLR) to Silchar Airport (IXS) via Kolkata [~5-7 hrs].\n2. Take direct airport taxi from Kumbhirgram Airport to NIT Silchar [~35 km].",
      duration: "approx. 6-8 hours total",
      cost: "₹9,000 - ₹14,000 flight + ₹1,000 taxi",
      tips: "Alliance Air/IndiGo run convenient daily connecting flights."
    },
    rail: {
      route: "1. Board train from KSR Bengaluru to Guwahati [~42-46 hrs].\n2. Board connecting train or night bus from Guwahati to Silchar [~10 hrs].\n3. Hire cab to campus.",
      duration: "approx. 56 hours total",
      cost: "₹3,500 - ₹7,000 + local cab",
      tips: "Long duration; flight via Kolkata is highly recommended instead."
    }
  }
};

const HOTEL_RECOMMENDATIONS = [
  {
    name: "NIT Silchar Guest House",
    type: "On-Campus (Subject to availability)",
    distance: "0 km (Inside Campus)",
    rating: "4.8/5",
    amenities: "Wi-Fi, AC Rooms, Catering, Conference Hub Access",
    contact: "guest_house@nits.ac.in"
  },
  {
    name: "Borail View Hotel",
    type: "Premium Business Hotel",
    distance: "8.5 km from Campus (City Center)",
    rating: "4.5/5",
    amenities: "Free breakfast, High-speed Wi-Fi, Restaurant, Room Service",
    contact: "+91-3842-248111"
  },
  {
    name: "Hotel Crescent Silchar",
    type: "Comfort Stay",
    distance: "7.2 km from Campus",
    rating: "4.2/5",
    amenities: "Modern Suites, 24/7 Power back, Dining Lounge, Parking",
    contact: "+91-3842-230055"
  }
];

export default function VenuePage() {
  const [origin, setOrigin] = useState<"kolkata" | "guwahati" | "delhi" | "bengaluru">("kolkata");
  const [mode, setMode] = useState<"air" | "rail">("air");

  const travelPlan = TRAVEL_DATA[origin][mode];

  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent relative overflow-hidden">
      {/* Header */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-slate-950 text-white">
        {/* Parallax campus background image */}
        <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_auto,w_1600,h_900,q_auto/v1779298972/Screenshot_2026-05-20_231231_wundhr.png" 
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
            Conference <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">Venue</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {siteConfig.location}
          </motion.p>
        </div>
      </section>

      <section className="py-24 relative">
        {/* Institutional Seal Watermark */}
        <div className="absolute left-0 bottom-10 opacity-[0.02] pointer-events-none select-none z-0 hidden lg:block">
          <img src="/logo.svg" alt="NIT Silchar watermark" className="w-[500px] h-[500px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">
          
          {/* ABOUT & MAP */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-primary">About NIT Silchar</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                The National Institute of Technology, Silchar is situated on the banks of the river Barak and is surrounded by lush green tea gardens. The campus spans over 625 acres, offering a serene, high-tech academic environment perfect for global research discussions and engineering collaborations.
              </p>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/40 border border-slate-100 backdrop-blur-md">
                <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground">Official Address</h4>
                  <p className="text-slate-600 text-sm font-light mt-1">
                    Department of Electronics and Instrumentation Engineering,<br />
                    National Institute of Technology Silchar,<br />
                    Silchar, Assam, India - 788010
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-inner flex items-center justify-center relative backdrop-blur-md"
            >
              {/* Actual Open-Source Google Maps Embed */}
              <iframe
                title="NIT Silchar Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3758362678684!2d92.79036727596041!3d24.748259699268715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49d638708c35%3A0xc34be2bf4691459a!2sNational%20Institute%20of%20Technology%20Silchar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </motion.div>
          </div>

          {/* DYNAMIC TRAVEL & ACCOMMODATION PLANNER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-primary/20 bg-white/40 backdrop-blur-2xl rounded-3xl p-8 shadow-xl space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Compass className="h-40 w-40 text-primary animate-pulse" />
            </div>

            <div className="flex items-center gap-3 border-b pb-4">
              <div className="p-2.5 bg-primary/10 rounded-xl">
                <Navigation className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Travel &amp; Stay Smart Planner</h3>
                <p className="text-sm text-slate-500 font-light">Select your departure hub and transit style to map out optimal travel routes, cost estimates, and local hotels.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* INTERACTIVE CONTROLS */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* 1. Departure Hub */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">1. Select Departure Hub</span>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: "kolkata", label: "Kolkata (CCU)" },
                      { id: "guwahati", label: "Guwahati (GAU)" },
                      { id: "delhi", label: "Delhi (DEL)" },
                      { id: "bengaluru", label: "Bengaluru (BLR)" }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setOrigin(opt.id as any)}
                        className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                          origin === opt.id 
                            ? "bg-primary border-primary text-white shadow-md"
                            : "bg-white/60 border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Transit Mode */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">2. Select Transport Style</span>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setMode("air")}
                      className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                        mode === "air" 
                          ? "bg-slate-800 border-slate-800 text-white shadow-md"
                          : "bg-white/60 border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <Plane className="h-4 w-4" /> Flight Routes
                    </button>
                    <button
                      onClick={() => setMode("rail")}
                      className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                        mode === "rail" 
                          ? "bg-slate-800 border-slate-800 text-white shadow-md"
                          : "bg-white/60 border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <Train className="h-4 w-4" /> Rail / Trains
                    </button>
                  </div>
                </div>

                {/* 3. Stays recommendations */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4 text-primary" /> Recommended Accommodations
                  </span>
                  <div className="space-y-3">
                    {HOTEL_RECOMMENDATIONS.map((hotel, idx) => (
                      <div key={idx} className="bg-white/50 border border-slate-100 p-4 rounded-xl flex items-center justify-between gap-4">
                        <div>
                          <p className="font-bold text-sm text-slate-800">{hotel.name}</p>
                          <p className="text-[10px] text-primary font-mono uppercase font-semibold mt-0.5">{hotel.type}</p>
                          <p className="text-xs text-slate-400 font-light mt-1">Amenities: {hotel.amenities}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded font-mono font-medium">{hotel.distance}</span>
                          <p className="text-[10px] text-slate-400 mt-1">Mail: {hotel.contact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* ROUTE DISPLAY ITINERARY */}
              <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 shadow-2xl space-y-6 flex flex-col justify-between h-full min-h-[460px] relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-white/10 text-cyan-400 text-[10px] font-bold font-mono px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" /> Checked Travel Plan
                </div>

                <div className="space-y-5">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Suggested Route Summary</span>
                    <h4 className="text-xl font-bold text-white capitalize mt-1 flex items-center gap-2">
                      {origin} to NIT Silchar ({mode === "air" ? "Air Route" : "Rail Route"})
                    </h4>
                  </div>

                  {/* ITINERARY STEPS */}
                  <div className="space-y-4 text-slate-300 text-sm font-light leading-relaxed">
                    {travelPlan.route.split("\n").map((step, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                        <p>{step.replace(/^\d+\.\s*/, "")}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TRIP SPECS */}
                <div className="border-t border-white/10 pt-5 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                      <span className="text-[10px] text-slate-400 font-mono uppercase block">Estimated Duration</span>
                      <span className="text-sm font-bold text-white font-mono mt-0.5 block">{travelPlan.duration}</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                      <span className="text-[10px] text-slate-400 font-mono uppercase block">Approx. Cost Spec</span>
                      <span className="text-sm font-bold text-cyan-400 font-mono mt-0.5 block">{travelPlan.cost}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-cyan-950/30 border border-cyan-800/30 rounded-xl">
                    <p className="text-xs text-cyan-200 font-light leading-normal"><span className="font-bold text-cyan-400 font-mono">PRO TIP:</span> {travelPlan.tips}</p>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

          {/* Static Travel Details grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-8 border-b pb-4">General Transit Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/40 backdrop-blur-md">
                <CardHeader>
                  <Plane className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl font-bold text-slate-800">By Air</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 font-light">
                  The nearest airport is Kumbhirgram Airport (IXS), located about 35 km from the campus. Regular flights connect Silchar to Kolkata and Guwahati.
                </CardContent>
              </Card>
              <Card className="bg-white/40 backdrop-blur-md">
                <CardHeader>
                  <Train className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl font-bold text-slate-800">By Train</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 font-light">
                  Silchar Railway Station is about 10 km away. There are direct trains from Guwahati, Agartala, and other major cities.
                </CardContent>
              </Card>
              <Card className="bg-white/40 backdrop-blur-md">
                <CardHeader>
                  <Car className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl font-bold text-slate-800">By Road</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 font-light">
                  Silchar is well connected by road to Guwahati (340 km) and other parts of North-East India through day and night bus services.
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
