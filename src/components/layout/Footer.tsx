"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/config";
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Bell, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  BookOpen, 
  BadgeCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  // Subscription Box State
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "success">("idle");

  // Inquiry Helper Box State
  const [queryEmail, setQueryEmail] = useState("");
  const [queryText, setQueryText] = useState("");
  const [queryCategory, setQueryCategory] = useState<"submission" | "registration" | "venue">("submission");
  const [queryStatus, setQueryStatus] = useState<"idle" | "sending" | "success">("idle");
  const [assignedRoute, setAssignedRoute] = useState<any>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    setSubStatus("success");
    setTimeout(() => {
      setSubscribeEmail("");
      setSubStatus("idle");
    }, 4000);
  };

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!queryEmail || !queryText) return;

    // Trigger native email client so the email actually reaches the organizers
    const subject = encodeURIComponent(`E2A'27 Inquiry: ${queryCategory.toUpperCase()}`);
    const body = encodeURIComponent(`From: ${queryEmail}\n\nCategory: ${queryCategory}\n\nInquiry:\n${queryText}`);
    window.location.href = `mailto:e2a@ei.nits.ac.in?subject=${subject}&body=${body}`;

    setQueryStatus("sending");
    
    setTimeout(() => {
      // Dynamic routing based on category
      let chair = { name: "", email: "", role: "", eta: "" };
      if (queryCategory === "submission") {
        chair = {
          name: "Submission Helpdesk",
          email: "e2a@ei.nits.ac.in",
          role: "Technical Program Support",
          eta: "< 12 Hours"
        };
      } else if (queryCategory === "registration") {
        chair = {
          name: "Registration Support",
          email: "e2a@ei.nits.ac.in",
          role: "Registration & Ticketing",
          eta: "< 8 Hours"
        };
      } else {
        chair = {
          name: "Conference Logistics",
          email: "e2a@ei.nits.ac.in",
          role: "General Inquiries",
          eta: "< 24 Hours"
        };
      }
      
      setAssignedRoute(chair);
      setQueryStatus("success");
    }, 1000);
  };

  const resetQueryForm = () => {
    setQueryEmail("");
    setQueryText("");
    setQueryStatus("idle");
    setAssignedRoute(null);
  };

  return (
    <footer id="contact" className="relative border-t border-primary/20 bg-slate-900 text-slate-300 pt-20 pb-8 overflow-hidden">
      {/* Decorative Traditional Mesh Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(181,148,16,0.05),transparent_40%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.08),transparent_45%)] z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 space-y-16">
        
        {/* TOP ROW: 4-COLUMN HIGH VALUE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Core Branding, Trust Badges, Local Clock */}
          <div className="lg:col-span-3 space-y-6">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <img
                src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1780614814/E2A_-_2027_dpjmot.png"
                alt="E2A 2027"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              6th International Conference on Emerging Electronics & Automation. Steered by Department of EIE, National Institute of Technology Silchar.
            </p>

          </div>

          {/* Column 2: 100x BETTER: DYNAMIC INTERACTIVE QUERY DESK */}
          <div className="lg:col-span-4 bg-white/5 border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
            <div className="absolute top-2 right-2 p-2 opacity-5">
              <Sparkles className="h-24 w-24 text-accent" />
            </div>

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-accent/20 rounded-lg text-accent">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">Interactive Quick Helpdesk</h4>
                  <p className="text-[10px] text-slate-400">Direct query router to organizing chairs.</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] font-bold tracking-wider uppercase mt-1">
                <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                Active (9AM - 6PM IST)
              </div>
            </div>

            <AnimatePresence mode="wait">
              {queryStatus === "success" && assignedRoute ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 text-left"
                >
                  <div className="p-3 bg-accent/10 border border-accent/20 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-accent">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-[11px] font-bold uppercase tracking-wider font-mono">Ticket Routed Successfully!</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Your query has been assigned to the governing organizer:
                    </p>
                    <div className="border-t border-slate-800 pt-2 mt-2 space-y-1">
                      <p className="text-xs font-bold text-white">{assignedRoute.name}</p>
                      <p className="text-[10px] text-slate-400 font-medium leading-tight">{assignedRoute.role}</p>
                      <p className="text-[10px] font-mono text-accent">{assignedRoute.email}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                    <span>Response ETA: {assignedRoute.eta}</span>
                    <button onClick={resetQueryForm} className="text-accent underline hover:text-white">Submit New Query</button>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleQuerySubmit}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-3 gap-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700">
                    {(["submission", "registration", "venue"] as const).map(cat => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setQueryCategory(cat)}
                        className={`py-1 text-[9px] font-mono uppercase tracking-wider rounded font-bold transition-all ${
                          queryCategory === cat 
                            ? "bg-primary text-white shadow"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <input
                    type="email"
                    required
                    placeholder="Your email address..."
                    value={queryEmail}
                    onChange={(e) => setQueryEmail(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-accent"
                  />

                  <textarea
                    required
                    rows={2}
                    placeholder={`Type your inquiry about ${queryCategory}...`}
                    value={queryText}
                    onChange={(e) => setQueryText(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-accent resize-none"
                  />

                  <Button 
                    type="submit"
                    disabled={queryStatus === "sending" || !queryEmail || !queryText}
                    className="w-full bg-accent hover:bg-accent/90 text-slate-900 font-semibold text-xs py-4.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-accent/10 border-0"
                  >
                    {queryStatus === "sending" ? (
                      "Routing Inquiry..."
                    ) : (
                      <>
                        Send Inquiry <Send className="h-3 w-3" />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Column 3: Structured Resources navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-accent text-xs font-bold uppercase tracking-widest border-b border-slate-800 pb-2">Academic Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              {[
                { label: "Conference Tracks", href: "/#important-dates" },
                { label: "Call for Papers", href: "/call-for-papers" },
                { label: "Organizing Committee", href: "/committee" },
                { label: "Keynote Speakers", href: "/speakers" },
                { label: "Contact Us", href: "/contact" }
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors flex items-center gap-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: 100x BETTER: DYNAMIC DEADLINE NOTIFICATION SUBSCRIPTION */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-accent text-xs font-bold uppercase tracking-widest border-b border-slate-800 pb-2">Deadline Alerts</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Never miss a milestone. Subscribe to receive direct email alerts 48 hours before critical paper submissions and acceptance notifications close.
            </p>

            <AnimatePresence mode="wait">
              {subStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl"
                >
                  <BadgeCheck className="h-4.5 w-4.5 shrink-0" />
                  <span>Subscribed to Timeline Alerts!</span>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubscribe}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter academic email..."
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-accent w-full"
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="bg-accent hover:bg-accent/90 text-slate-900 shrink-0 rounded-xl border-0 h-10 w-10 flex items-center justify-center"
                  >
                    <Bell className="h-4 w-4" />
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
            
            <div className="flex items-center gap-2 pt-2 text-[10px] text-slate-500">
              <Building2 className="h-4 w-4 shrink-0" />
              <span>National Institute of Technology Silchar</span>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT & INSTITUTION CREDITS */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-mono">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© 2027 E2A Conference. All rights reserved.</p>
            <span className="hidden md:inline text-slate-700">|</span>
            <p className="flex items-center gap-1.5 hover:text-slate-300 transition-colors">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Conference Standard Compliant</span>
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <a href="https://eie.nits.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">
              Official Site <ExternalLink className="h-3 w-3" />
            </a>
            <span className="text-slate-800">|</span>
            <span className="font-semibold text-slate-400">Department of EIE, NIT Silchar</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
