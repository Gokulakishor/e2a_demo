"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, CreditCard, Sparkles, Check, HelpCircle } from "lucide-react";

export default function RegistrationPage() {
  const feeData = [
    { category: "UG/PG/PhD Scholars", indian: "₹ 5,000", foreign: "$ 250" },
    { category: "Academicians/R&D Organizations", indian: "₹ 7,000", foreign: "$ 350" },
    { category: "Industry Professionals", indian: "₹ 10,000", foreign: "$ 500" },
    { category: "Non-Author Attendees", indian: "₹ 3,000", foreign: "$ 150" },
  ];

  // Calculator State
  const [category, setCategory] = useState("student");
  const [isForeign, setIsForeign] = useState(false);
  const [isIeeeMember, setIsIeeeMember] = useState(false);
  const [isEarlyBird, setIsEarlyBird] = useState(true);
  const [extraPapers, setExtraPapers] = useState(0);
  const [extraPages, setExtraPages] = useState(0);

  // Dynamic calculations
  const calculateTotal = () => {
    let base = 0;
    if (category === "student") {
      base = isForeign ? 250 : 5000;
    } else if (category === "academic") {
      base = isForeign ? 350 : 7000;
    } else if (category === "industry") {
      base = isForeign ? 500 : 10000;
    } else {
      base = isForeign ? 150 : 3000;
    }

    let ieeeDiscount = isIeeeMember ? Math.round(base * 0.15) : 0;
    let earlyDiscount = isEarlyBird ? Math.round(base * 0.10) : 0;
    
    const extraPaperCost = extraPapers * (isForeign ? 100 : 4000);
    const extraPageCost = extraPages * (isForeign ? 25 : 1000);

    const subtotal = base - ieeeDiscount - earlyDiscount;
    const total = subtotal + extraPaperCost + extraPageCost;

    return {
      base,
      ieeeDiscount,
      earlyDiscount,
      extraPaperCost,
      extraPageCost,
      total,
      currency: isForeign ? "$" : "₹"
    };
  };

  const invoice = calculateTotal();

  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent">
      {/* Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-500/10 z-0 animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-foreground"
          >
            Registration <span className="text-gradient">Portal</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Details regarding registration fees, deadlines, and our real-time interactive invoice planner.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">
          
          {/* DYNAMIC PACKAGE PLANNER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-primary/20 bg-white/40 backdrop-blur-2xl rounded-3xl p-8 shadow-xl space-y-6 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="p-2.5 bg-primary/10 rounded-xl">
                <Calculator className="h-6 w-6 text-primary animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Interactive Fee Calculator</h3>
                <p className="text-sm text-slate-500 font-light">Build your custom package, apply IEEE discounts, add papers, and calculate your exact dues in real-time.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* OPTIONS SELECTOR */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Category */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">1. Select Participant Category</span>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: "student", label: "Student / Scholar" },
                      { id: "academic", label: "Academic / R&D" },
                      { id: "industry", label: "Industry Pro" },
                      { id: "attendee", label: "Attendee Only" }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setCategory(opt.id)}
                        className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                          category === opt.id 
                            ? "bg-primary border-primary text-white shadow-md"
                            : "bg-white/60 border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Parameters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Nationality */}
                  <div className="bg-white/50 border border-slate-100 rounded-2xl p-4 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Nationality</span>
                    <div className="flex bg-slate-100 rounded-lg p-0.5">
                      <button
                        onClick={() => setIsForeign(false)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${!isForeign ? "bg-white text-primary shadow-sm" : "text-slate-500"}`}
                      >
                        Indian
                      </button>
                      <button
                        onClick={() => setIsForeign(true)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${isForeign ? "bg-white text-primary shadow-sm" : "text-slate-500"}`}
                      >
                        Foreign
                      </button>
                    </div>
                  </div>

                  {/* IEEE Member */}
                  <div className="bg-white/50 border border-slate-100 rounded-2xl p-4 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">IEEE Member (-15%)</span>
                    <div className="flex bg-slate-100 rounded-lg p-0.5">
                      <button
                        onClick={() => setIsIeeeMember(true)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${isIeeeMember ? "bg-white text-primary shadow-sm" : "text-slate-500"}`}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setIsIeeeMember(false)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${!isIeeeMember ? "bg-white text-primary shadow-sm" : "text-slate-500"}`}
                      >
                        No
                      </button>
                    </div>
                  </div>

                  {/* Early Bird */}
                  <div className="bg-white/50 border border-slate-100 rounded-2xl p-4 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Early Bird (-10%)</span>
                    <div className="flex bg-slate-100 rounded-lg p-0.5">
                      <button
                        onClick={() => setIsEarlyBird(true)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${isEarlyBird ? "bg-white text-primary shadow-sm" : "text-slate-500"}`}
                      >
                        Active
                      </button>
                      <button
                        onClick={() => setIsEarlyBird(false)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${!isEarlyBird ? "bg-white text-primary shadow-sm" : "text-slate-500"}`}
                      >
                        Regular
                      </button>
                    </div>
                  </div>
                </div>

                {/* 3. Add-ons sliders */}
                <div className="space-y-4 bg-white/50 border border-slate-100 rounded-2xl p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">3. Additional Papers &amp; Extra Pages</span>
                  
                  {/* Extra Papers */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-slate-700">Extra Papers Submissions</span>
                      <span className="font-bold text-primary font-mono">{extraPapers} {extraPapers === 1 ? "Paper" : "Papers"}</span>
                    </div>
                    <div className="flex gap-2">
                      {[0, 1, 2].map((num) => (
                        <button
                          key={num}
                          onClick={() => setExtraPapers(num)}
                          className={`flex-1 py-2 text-xs font-semibold rounded-lg border ${
                            extraPapers === num 
                              ? "bg-slate-800 text-white border-slate-800" 
                              : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          {num === 0 ? "None (1 Paper Incl.)" : `+${num} Paper${num > 1 ? "s" : ""}`}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Extra Pages */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-slate-700">Extra Pages (Standard is 6 pages)</span>
                      <span className="font-bold text-primary font-mono">{extraPages} {extraPages === 1 ? "Page" : "Pages"}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="4"
                      value={extraPages}
                      onChange={(e) => setExtraPages(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>0 Pages</span>
                      <span>1 Page</span>
                      <span>2 Pages</span>
                      <span>3 Pages</span>
                      <span>4 Pages Max</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* DYNAMIC GLASS RECEIPT PANEL */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Sparkles className="h-40 w-40 text-white animate-spin-slow" />
                </div>
                
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono border-b border-white/10 pb-3">Package Breakdown</h4>
                
                <div className="space-y-3.5 text-sm font-light text-slate-300">
                  <div className="flex justify-between">
                    <span>Base Registration</span>
                    <span className="font-semibold text-white font-mono">{invoice.currency} {invoice.base.toLocaleString()}</span>
                  </div>
                  
                  {isIeeeMember && (
                    <div className="flex justify-between text-cyan-400">
                      <span>IEEE Member Discount (-15%)</span>
                      <span className="font-mono">-{invoice.currency} {invoice.ieeeDiscount.toLocaleString()}</span>
                    </div>
                  )}

                  {isEarlyBird && (
                    <div className="flex justify-between text-purple-400">
                      <span>Early Bird Reward (-10%)</span>
                      <span className="font-mono">-{invoice.currency} {invoice.earlyDiscount.toLocaleString()}</span>
                    </div>
                  )}

                  {extraPapers > 0 && (
                    <div className="flex justify-between text-amber-400">
                      <span>{extraPapers} Extra Paper(s)</span>
                      <span className="font-mono">+{invoice.currency} {invoice.extraPaperCost.toLocaleString()}</span>
                    </div>
                  )}

                  {extraPages > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>{extraPages} Extra Page(s)</span>
                      <span className="font-mono">+{invoice.currency} {invoice.extraPageCost.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-white/10 pt-4 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-md text-white font-mono">Net Due Dues</span>
                    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-white font-mono tracking-tighter">
                      {invoice.currency} {invoice.total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold hover:opacity-90 font-mono py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10">
                    <CreditCard className="h-4 w-4" /> SECURE CMT / SBI COLLECT
                  </Button>
                  <p className="text-[10px] text-center text-slate-400 font-mono">
                    All transactions securely processed under NIT Silchar regulations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Registration fees table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-8 border-b pb-4">Standard Fee Matrix</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white/40 backdrop-blur-md">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="uppercase tracking-wider border-b bg-slate-50/80 text-muted-foreground font-semibold">
                  <tr>
                    <th scope="col" className="px-6 py-4">Participant Category</th>
                    <th scope="col" className="px-6 py-4">Indian Authors (INR)</th>
                    <th scope="col" className="px-6 py-4">Foreign Authors (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-foreground">
                  {feeData.map((fee, idx) => (
                    <tr key={idx} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-700">{fee.category}</td>
                      <td className="px-6 py-4 font-mono font-medium text-slate-600">{fee.indian}</td>
                      <td className="px-6 py-4 font-mono font-medium text-slate-600">{fee.foreign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-500 font-light">
              * Registration fee includes access to all technical sessions, conference kit, lunches, and the gala dinner.
            </p>
          </motion.div>

          {/* Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary border-b pb-4">Important Guidelines</h2>
            <ul className="list-disc list-inside space-y-3 text-slate-600 font-light leading-relaxed">
              <li>At least one author of each accepted paper must register at the full rate to ensure inclusion in the proceedings.</li>
              <li>A single registration covers the presentation and publication of exactly one paper.</li>
              <li>Students must upload a valid Student ID card during the registration process.</li>
              <li>Registration fees are non-refundable.</li>
            </ul>
          </motion.div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold h-14 px-8 text-lg rounded-xl shadow-lg">
              Proceed to SBI Collect Portal
            </Button>
            <p className="mt-4 text-sm text-slate-500 font-light">
              You will be redirected to the official SBI Collect portal for NIT Silchar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
