"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Calculator, Sparkles } from "lucide-react";

export default function RegistrationPage() {
  const feeData = [
    { category: "Students", old: "₹5,000", early: "₹6,000", late: "₹7,000" },
    { category: "Academia/Scientists", old: "₹6,000", early: "₹8,000", late: "₹9,000" },
    { category: "Industry Professionals", old: "₹7,000", early: "₹9,000", late: "₹10,000" },
    { category: "Conference Attendees (Without Paper Presentation)", old: "₹3,000", early: "₹2,000", late: "₹3,000" },
  ];

  // Calculator State
  const [category, setCategory] = useState("students");
  const [isForeign, setIsForeign] = useState(false);
  const [isEarlyBird, setIsEarlyBird] = useState(true);
  const [extraPapers, setExtraPapers] = useState(0);

  // Dynamic calculations
  const calculateTotal = () => {
    const prices: Record<string, { indian: number }> = {
      students: { indian: 7000 },
      academician: { indian: 9000 },
      industry: { indian: 10000 },
      attendee: { indian: 3000 },
    };
    const sel = prices[category] ?? prices.students;
    const base = sel.indian;

    let earlyDiscount = isEarlyBird ? 1000 : 0;
    const extraPaperCost = extraPapers * 3000;

    const subtotal = base - earlyDiscount;
    const total = subtotal + extraPaperCost;

    return {
      base,
      earlyDiscount,
      extraPaperCost,
      total,
      currency: "₹",
      baseInr: base,
      earlyDiscountInr: earlyDiscount,
      extraPaperCostInr: extraPaperCost,
      totalInr: total
    };
  };

  const invoice = calculateTotal();

  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent relative overflow-hidden">
      {/* Header */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-slate-950 text-white">
        {/* Parallax campus background image */}
        <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_auto,w_1600,h_900,q_auto/v1779298973/Screenshot_2026-05-20_231150_afrlhp.png" 
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
            Registration <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">Portal</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Details regarding registration fees, deadlines, and our real-time interactive invoice planner.
          </motion.p>
        </div>
      </section>

      <section className="py-24 relative">
        {/* Institutional Seal Watermark */}
        <div className="absolute left-0 top-1/4 opacity-[0.02] pointer-events-none select-none z-0 hidden lg:block">
          <img src="/logo.svg" alt="NIT Silchar watermark" className="w-[500px] h-[500px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">
          
          {/* Registration fees table (NOW ABOVE THE CALCULATOR) */}
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
                    <th scope="col" className="px-6 py-4">Old Fees</th>
                    <th scope="col" className="px-6 py-4">Revised Early Bird Fees</th>
                    <th scope="col" className="px-6 py-4">Late Registration Fees</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-foreground">
                  {feeData.map((fee, idx) => (
                    <tr key={idx} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-700">{fee.category}</td>
                      <td className="px-6 py-4 font-mono font-medium text-slate-600">{fee.old}</td>
                      <td className="px-6 py-4 font-mono font-medium text-slate-600">{fee.early}</td>
                      <td className="px-6 py-4 font-mono font-medium text-slate-600">{fee.late}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-500 font-light">
              * Registration fee includes access to all technical sessions, conference kit, lunches, and the gala dinner.
            </p>
          </motion.div>

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
                <p className="text-sm text-slate-500 font-light font-sans">Build your custom package, apply discounts, add papers, and calculate your exact dues in real-time.</p>
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
                      { id: "students", label: "Students" },
                      { id: "academician", label: "Academia/Scientists" },
                      { id: "industry", label: "Industry Professionals" },
                      { id: "attendee", label: "Attendees" }
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* Early Bird */}
                  <div className="bg-white/50 border border-slate-100 rounded-2xl p-4 space-y-2 md:col-span-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Early Bird (-₹1,000)</span>
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

                {/* 3. Add-ons selector */}
                <div className="space-y-4 bg-white/50 border border-slate-100 rounded-2xl p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">2. Additional Papers</span>
                  
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
                </div>

              </div>

              {/* DYNAMIC GLASS RECEIPT PANEL */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Sparkles className="h-40 w-40 text-white animate-spin-slow" />
                </div>
                
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono border-b border-white/10 pb-3">Package Breakdown</h4>
                        <div className="space-y-3.5 text-sm font-light text-slate-300">
                  <div className="flex justify-between items-start">
                    <span>Base Registration</span>
                    <div className="text-right">
                      <span className="font-semibold text-white font-mono">{invoice.currency} {invoice.base.toLocaleString()}</span>
                      {isForeign && <span className="block text-[10px] text-slate-400 font-mono">Approx. ₹ {invoice.baseInr.toLocaleString()}</span>}
                    </div>
                  </div>

                  {isEarlyBird && (
                    <div className="flex justify-between items-start text-purple-400">
                      <span>Early Bird Reward (-10%)</span>
                      <div className="text-right">
                        <span className="font-mono">-{invoice.currency} {invoice.earlyDiscount.toLocaleString()}</span>
                        {isForeign && <span className="block text-[10px] text-purple-300/70 font-mono">Approx. -₹ {invoice.earlyDiscountInr.toLocaleString()}</span>}
                      </div>
                    </div>
                  )}

                  {extraPapers > 0 && (
                    <div className="flex justify-between items-start text-amber-400">
                      <span>{extraPapers} Extra Paper(s)</span>
                      <div className="text-right">
                        <span className="font-mono">+{invoice.currency} {invoice.extraPaperCost.toLocaleString()}</span>
                        {isForeign && <span className="block text-[10px] text-amber-300/70 font-mono">Approx. +₹ {invoice.extraPaperCostInr.toLocaleString()}</span>}
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-white/10 pt-4 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-md text-white font-mono">Net Due Dues</span>
                    <div className="text-right">
                      <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-white font-mono tracking-tighter block">
                        {invoice.currency} {invoice.total.toLocaleString()}
                      </span>
                      {isForeign && <span className="text-xs text-cyan-300/80 font-mono font-medium block mt-1">Approx. ₹ {invoice.totalInr.toLocaleString()}</span>}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-center text-slate-400 font-mono mt-4">Payment portal details will be updated soon.</p>
              </div>
            </div>
          </motion.div>

          {/* Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary border-b pb-4">Important Guidelines</h2>
            <ol className="list-decimal list-inside space-y-3 text-slate-600 font-light leading-relaxed">
              <li>At least one author of each accepted paper must register at the full rate to ensure inclusion in the proceedings.</li>
              <li>The authors can register for a maximum of 3 accepted papers. For each extra paper, an additional fee of INR 3,000 is to be paid.</li>
              <li>Students can upload a maximum of 1 paper with a single registration.</li>
              <li>The final camera-ready paper should have a maximum of 8 pages.</li>
              <li>Registration fees are non-refundable.</li>
              <li>Papers that are not presented at the conference will not be included in the proceedings.</li>
            </ol>
          </motion.div>

          <div className="text-center">
            <p className="text-sm text-slate-500 font-light">
              Payment details and portal link will be updated soon. For queries, please contact e2a@ei.nits.ac.in
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
