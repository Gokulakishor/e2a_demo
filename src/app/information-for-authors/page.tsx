"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, FileText, CreditCard, Plane, ChevronRight, Download } from "lucide-react";

export default function InformationForAuthorsPage() {
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
            Information for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">Authors</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Everything you need to know about registration, paper submission, travel support, and awards.
          </motion.p>
        </div>
      </section>

      <section className="py-20 relative">
        {/* Institutional Seal Watermark */}
        <div className="absolute left-0 top-1/3 opacity-[0.02] pointer-events-none select-none z-0 hidden lg:block">
          <img src="/logo.svg" alt="NIT Silchar watermark" className="w-[500px] h-[500px]" />
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
              <h2 className="text-3xl font-bold text-primary">Registration</h2>
            </div>

            {/* Fee Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary/5">
                    <th className="text-left p-3 font-semibold text-slate-800 border-b border-slate-200 rounded-tl-xl">Category</th>
                    <th className="text-center p-3 font-semibold text-slate-800 border-b border-slate-200">Indian Authors (INR)<br/><span className="text-xs font-normal">Early Bird</span></th>
                    <th className="text-center p-3 font-semibold text-slate-800 border-b border-slate-200">Foreign Authors (USD)<br/><span className="text-xs font-normal">Early Bird</span></th>
                    <th className="text-center p-3 font-semibold text-slate-800 border-b border-slate-200">Indian Authors (INR)<br/><span className="text-xs font-normal">Late Registration</span></th>
                    <th className="text-center p-3 font-semibold text-slate-800 border-b border-slate-200 rounded-tr-xl">Foreign Authors (USD)<br/><span className="text-xs font-normal">Late Registration</span></th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {[
                    { category: "Students", old: "₹5,000", early: "₹6,000", earlyUSD: "$250", late: "₹7,000", lateUSD: "$275" },
                    { category: "Academia/Scientists", old: "₹6,000", early: "₹8,000", earlyUSD: "$350", late: "₹9,000", lateUSD: "$375" },
                    { category: "Industry Professionals", old: "₹7,000", early: "₹9,000", earlyUSD: "$450", late: "₹10,000", lateUSD: "$475" },
                    { category: "Conference Attendees (Without Paper Presentation)", old: "₹3,000", early: "₹2,000", earlyUSD: "$150", late: "₹3,000", lateUSD: "$175" },
                  ].map((row, idx) => (
                    <tr key={idx} className={`${idx % 2 === 0 ? "bg-white/60" : "bg-slate-50/60"} hover:bg-primary/5 transition-colors`}>
                      <td className="p-3 border-b border-slate-100 font-medium">{row.category}</td>
                      <td className="p-3 border-b border-slate-100 text-center font-mono font-semibold text-slate-800">{row.early}</td>
                      <td className="p-3 border-b border-slate-100 text-center font-mono font-semibold text-slate-800">{row.earlyUSD}</td>
                      <td className="p-3 border-b border-slate-100 text-center font-mono font-semibold text-slate-800">{row.late}</td>
                      <td className="p-3 border-b border-slate-100 text-center font-mono font-semibold text-slate-800">{row.lateUSD}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 italic font-light">
              * Registration fee includes access to all technical sessions, conference kit, lunches, and the conference dinner.
            </p>

            {/* Registration Guidelines */}
            <div className="pt-2">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Important Registration Guidelines</h4>
              <ol className="list-decimal list-inside space-y-2.5 text-sm text-slate-600 font-light leading-relaxed">
                <li>At least one author of each accepted paper must register at the full rate to ensure inclusion in the proceedings.</li>
                <li>The authors can register for a maximum of 3 accepted papers. For each extra paper, an additional fee of INR 3,000 is to be paid.</li>
                <li>Students can upload a maximum of 1 paper with a single registration.</li>
                <li>The final camera-ready paper should have a maximum of 8 pages.</li>
                <li>Registration fees are non-refundable.</li>
                <li>Papers that are not presented at the conference will not be included in the proceedings.</li>
              </ol>
            </div>

            {/* Frequently Asked Questions */}
            <div className="pt-8 border-t border-slate-200">
              <h3 className="text-xl font-bold text-primary mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="bg-white/60 border border-slate-100 p-4 rounded-xl">
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">Do all participants have to register for the conference?</h5>
                  <p className="text-slate-600 font-light text-sm">Yes, all participants must register for the conference.</p>
                </div>
                <div className="bg-white/60 border border-slate-100 p-4 rounded-xl">
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">What is the preferred mode of paying registration fees for Indian participants in INR?</h5>
                  <p className="text-slate-600 font-light text-sm">Electronic fund transfer to the conference bank account.</p>
                </div>
                <div className="bg-white/60 border border-slate-100 p-4 rounded-xl">
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">Is registration mandatory before final submission?</h5>
                  <p className="text-slate-600 font-light text-sm">Yes, registration is mandatory before final submission.</p>
                </div>
                <div className="bg-white/60 border border-slate-100 p-4 rounded-xl">
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">Can an author upload the final paper without paying the registration fees?</h5>
                  <p className="text-slate-600 font-light text-sm">No, authors cannot upload the final paper without paying the registration fees.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Paper Submission */}
          <motion.div
            id="paper-submission"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white/40 border border-slate-200 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl scroll-mt-24"
          >
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Paper Submission</h2>
            </div>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-md text-slate-700 font-light leading-relaxed text-justify">
              <li>All submissions must be made electronically via the Microsoft CMT portal.</li>
              <li>Papers must follow <strong className="font-semibold text-slate-800">Springer formatting guidelines</strong>.</li>
              <li>Maximum <strong className="font-semibold text-slate-800">8 pages</strong> including figures, tables, and references.</li>
              <li>All submitted papers will undergo a rigorous peer review process.</li>
            </ul>

            <div className="pt-4 flex flex-wrap gap-4">
              <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary hover:bg-primary/95 text-white shrink-0 font-mono tracking-wide py-6 px-8 rounded-xl shadow-md border-0">
                Submit via CMT <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="https://www.springer.com/gp/authors-editors/conference-proceedings/conference-proceedings-guidelines" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-xl px-5 py-6">
                  <Download className="mr-2 h-4 w-4" /> Springer Template
                </Button>
              </a>
            </div>

            <div className="pt-4">
              <p className="text-sm text-slate-700 font-light leading-relaxed text-justify">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>
            </div>
          </motion.div>

          {/* Section 3: Travel Support */}
          <motion.div
            id="travel-support"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white/40 border border-slate-200 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl scroll-mt-24"
          >
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Plane className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Travel Support</h2>
            </div>

            <div className="relative p-[1px] bg-gradient-to-b from-stone-200/60 to-stone-300/40 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-stone-50/90 rounded-2xl z-0" />
              <div className="relative z-10 rounded-[15px] p-8 text-center bg-white/80">
                <p className="text-lg text-primary font-mono tracking-widest uppercase font-extrabold mb-2">
                  Coming Soon
                </p>
                <p className="text-sm text-slate-500 font-light max-w-md mx-auto leading-relaxed">
                  Details regarding travel support will be updated soon.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Best Presentation Award */}
          <motion.div
            id="best-presentation-award"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white/40 border border-slate-200 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl scroll-mt-24"
          >
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Best Presentation Award</h2>
            </div>

            <p className="text-md text-slate-700 leading-relaxed text-justify">
              Best paper/presentation awards will be given in each track based on the quality of the paper and presentation. The awards will be announced during the valedictory session of the conference.
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
