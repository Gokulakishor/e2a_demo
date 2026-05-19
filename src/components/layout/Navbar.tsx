"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Calendar, 
  Download, 
  ExternalLink, 
  Sparkles, 
  Clock, 
  Users, 
  Award, 
  FileText, 
  CheckCircle2, 
  Compass,
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Advanced Dropdown States
  const [activeDropdown, setActiveDropdown] = useState<"none" | "papers" | "committee" | "submit">("none");
  const [countdownOpen, setCountdownOpen] = useState(false);
  const closeTimeout = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Safe hover handlers to prevent jitter
  const handleMouseEnter = (menu: "papers" | "committee" | "submit") => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown("none");
    }, 150);
  };

  // Dynamic Deadline Days Calculation
  // We assume a real deadline of July 15, 2027 for submissions.
  const submissionDeadline = new Date("2027-07-15T23:59:59");
  const today = new Date();
  const diffTime = Math.abs(submissionDeadline.getTime() - today.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-white/70 backdrop-blur-2xl border-primary/10 shadow-[0_8px_32px_rgba(30,58,138,0.04)] py-2.5" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        
        {/* BRAND LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.span 
            whileHover={{ scale: 1.02 }}
            className="font-bold text-2xl tracking-tighter text-foreground group-hover:text-primary transition-colors"
          >
            E2A<span className="text-accent font-mono text-xl">&apos;27</span>
          </motion.span>
        </Link>

        {/* 100x BETTER: DYNAMIC MILESTONE TICKER BADGE */}
        <div className="hidden xl:flex items-center gap-2.5 relative">
          <button 
            onClick={() => setCountdownOpen(!countdownOpen)}
            onBlur={() => setTimeout(() => setCountdownOpen(false), 200)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-all text-xs font-mono font-semibold text-slate-700 animate-pulse active:scale-95"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>SUBMISSIONS OPEN: {diffDays} DAYS LEFT</span>
            <ChevronDown className={`h-3 w-3 transition-transform ${countdownOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Countdown Timeline Popover Menu */}
          <AnimatePresence>
            {countdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full mt-3 left-0 w-80 bg-white border border-slate-200 shadow-2xl rounded-2xl p-5 space-y-4 text-left z-50"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                  <Clock className="h-4.5 w-4.5 text-primary" />
                  <span className="text-xs uppercase font-bold tracking-wider font-mono text-slate-500">Milestone Deadlines</span>
                </div>
                
                <div className="space-y-3">
                  {[
                    { label: "Paper Submissions Close", date: "July 15, 2027", status: "Active Countdown", active: true },
                    { label: "Acceptance Notifications", date: "Sept 15, 2027", status: "Pending", active: false },
                    { label: "Registration Deadline", date: "Oct 15, 2027", status: "Pending", active: false }
                  ].map((milestone, idx) => (
                    <div key={idx} className="flex justify-between items-start text-xs">
                      <div>
                        <p className={`font-semibold ${milestone.active ? "text-primary" : "text-slate-600"}`}>{milestone.label}</p>
                        <p className="text-[10px] text-slate-400 font-mono mt-0.5">{milestone.date}</p>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold font-mono uppercase tracking-wider ${
                        milestone.active ? "bg-accent/20 text-slate-700" : "bg-slate-100 text-slate-400"
                      }`}>
                        {milestone.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>Standard Review Cycle</span>
                  <Link href="/#important-dates" className="text-primary underline hover:text-accent font-bold">View Timeline</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DESKTOP INTERACTIVE NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-1.5">
          
          {/* Home Link */}
          <Link href="/" className="text-xs font-semibold text-slate-600 hover:text-primary transition-all uppercase tracking-wider px-3.5 py-2.5 rounded-xl hover:bg-slate-100">
            Home
          </Link>
          
          {/* About Link */}
          <Link href="/about" className="text-xs font-semibold text-slate-600 hover:text-primary transition-all uppercase tracking-wider px-3.5 py-2.5 rounded-xl hover:bg-slate-100">
            About
          </Link>

          {/* 100x BETTER: CALL FOR PAPERS MEGA MENU TRIGGER */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter("papers")}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className={`text-xs font-semibold uppercase tracking-wider px-3.5 py-2.5 rounded-xl transition-all flex items-center gap-1 ${
                activeDropdown === "papers" ? "bg-slate-100 text-primary" : "text-slate-600 hover:text-primary hover:bg-slate-100"
              }`}
            >
              <span>Call For Papers</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDropdown === "papers" ? "rotate-180" : ""}`} />
            </button>

            {/* Papers Dropdown Mega Menu */}
            <AnimatePresence>
              {activeDropdown === "papers" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2.5 w-[480px] bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 grid grid-cols-2 gap-6 z-50"
                >
                  {/* Left Column: Submission Quick Desk */}
                  <div className="space-y-4 border-r border-slate-100 pr-6">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <Compass className="h-4 w-4 text-primary" />
                      <span className="text-[10px] font-extrabold uppercase tracking-wider font-mono text-slate-500">Submission Desk</span>
                    </div>

                    <div className="space-y-3">
                      {[
                        { label: "CMT Submissions Portal ↗", href: "https://cmt3.research.microsoft.com/", desc: "Official peer-reviewing portal" },
                        { label: "Smart Track Matcher ✨", href: "/call-for-papers#matcher", desc: "Interactive AI track validator" },
                        { label: "IEEE Author Guidelines", href: "/call-for-papers", desc: "Formatting regulations & compliance" }
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="block group/item">
                          <p className="text-xs font-bold text-slate-800 group-hover/item:text-primary transition-colors">{item.label}</p>
                          <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">{item.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Templates & Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-[10px] font-extrabold uppercase tracking-wider font-mono text-slate-500">Downloads</span>
                    </div>

                    <div className="space-y-3">
                      {[
                        { label: "IEEE MS-Word Template", href: "https://www.ieee.org/conferences/publishing/templates.html", desc: "Pre-formatted double-column format" },
                        { label: "IEEE LaTeX Template", href: "https://www.ieee.org/conferences/publishing/templates.html", desc: "Recommended for mathematical formulas" }
                      ].map((item, idx) => (
                        <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="block group/item">
                          <p className="text-xs font-bold text-slate-800 group-hover/item:text-primary transition-colors flex items-center gap-1">
                            <span>{item.label}</span>
                            <Download className="h-3 w-3 text-slate-400 shrink-0" />
                          </p>
                          <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">{item.desc}</p>
                        </a>
                      ))}
                    </div>

                    <div className="pt-2 mt-2 bg-slate-50 border border-slate-100 p-2.5 rounded-xl flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-[9px] font-mono font-bold text-slate-600 leading-tight">Double-Blind Peer Review compliant.</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dates Link */}
          <Link href="/#important-dates" className="text-xs font-semibold text-slate-600 hover:text-primary transition-all uppercase tracking-wider px-3.5 py-2.5 rounded-xl hover:bg-slate-100">
            Dates
          </Link>

          {/* 100x BETTER: COMMITTEE MEGA MENU TRIGGER */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter("committee")}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className={`text-xs font-semibold uppercase tracking-wider px-3.5 py-2.5 rounded-xl transition-all flex items-center gap-1 ${
                activeDropdown === "committee" ? "bg-slate-100 text-primary" : "text-slate-600 hover:text-primary hover:bg-slate-100"
              }`}
            >
              <span>Committee</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDropdown === "committee" ? "rotate-180" : ""}`} />
            </button>

            {/* Committee Hover Dropdown */}
            <AnimatePresence>
              {activeDropdown === "committee" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2.5 w-[380px] bg-white border border-slate-200 shadow-2xl rounded-2xl p-5 space-y-4 z-50"
                >
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                    <Users className="h-4.5 w-4.5 text-primary" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider font-mono text-slate-500">Core leadership delegates</span>
                  </div>

                  <div className="space-y-3 text-left">
                    {[
                      { name: "Prof. Dilip Kumar Baidya", role: "Director, NIT Silchar & Conference Patron" },
                      { name: "Prof. Ramjee Prasad", role: "Founder, CTIF Global Capsule & Honorary Chair" },
                      { name: "Dr. Munmun Khanra", role: "HOD, Dept of EIE & Organizing Convenor" }
                    ].map((member, idx) => (
                      <div key={idx} className="text-xs">
                        <p className="font-bold text-slate-800">{member.name}</p>
                        <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{member.role}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Link href="/committee" className="w-full py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-[10px] font-mono uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-all">
                      <span>Search All 132 Members</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Registration Link */}
          <Link href="/registration" className="text-xs font-semibold text-slate-600 hover:text-primary transition-all uppercase tracking-wider px-3.5 py-2.5 rounded-xl hover:bg-slate-100">
            Registration
          </Link>

          {/* Speakers Link */}
          <Link href="/speakers" className="text-xs font-semibold text-slate-600 hover:text-primary transition-all uppercase tracking-wider px-3.5 py-2.5 rounded-xl hover:bg-slate-100">
            Speakers
          </Link>

          {/* Venue & Travel Link */}
          <Link href="/venue" className="text-xs font-semibold text-slate-600 hover:text-primary transition-all uppercase tracking-wider px-3.5 py-2.5 rounded-xl hover:bg-slate-100">
            Venue
          </Link>

          {/* Contact Link */}
          <Link href="/#contact" className="text-xs font-semibold text-slate-600 hover:text-primary transition-all uppercase tracking-wider px-3.5 py-2.5 rounded-xl hover:bg-slate-100">
            Contact
          </Link>

          {/* 100x BETTER: DYNAMIC SUBMISSION ROUTER ACTION */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter("submit")}
            onMouseLeave={handleMouseLeave}
          >
            <Button 
              className="ml-3 bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-mono uppercase tracking-wider text-[11px] px-5 py-5.5 shadow-lg shadow-primary/10 transition-all duration-300 rounded-xl hover:shadow-xl hover:scale-[1.03] flex items-center gap-1 border-0"
            >
              <span>Submit Paper</span>
              <ChevronDown className="h-3.5 w-3.5 shrink-0" />
            </Button>

            {/* Submit Paper CTA Dropdown */}
            <AnimatePresence>
              {activeDropdown === "submit" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute right-0 mt-2.5 w-72 bg-white border border-slate-200 shadow-2xl rounded-2xl p-4 space-y-2.5 z-50 text-left"
                >
                  <a 
                    href="https://cmt3.research.microsoft.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-all group/item"
                  >
                    <div className="p-1.5 bg-primary/10 rounded-lg text-primary group-hover/item:scale-105 transition-transform shrink-0">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 group-hover/item:text-primary">Open CMT Portal ↗</p>
                      <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">Redirects to Microsoft peer review tool.</p>
                    </div>
                  </a>

                  <Link 
                    href="/call-for-papers#matcher"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-all group/item"
                  >
                    <div className="p-1.5 bg-accent/20 rounded-lg text-accent group-hover/item:scale-105 transition-transform shrink-0">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 group-hover/item:text-primary">Track Matcher Assistant</p>
                      <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">Verify your abstract's compatibility.</p>
                    </div>
                  </Link>

                  <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-[9px] text-slate-400 justify-center font-mono font-medium">
                    <Award className="h-3.5 w-3.5 text-primary" />
                    <span>IEEE Submissions Protocol Support</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </nav>

        {/* MOBILE MENU TOGGLE */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-foreground p-2 rounded-xl hover:bg-primary/5 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6" />}
        </motion.button>

      </div>

      {/* MOBILE RESPONSIVE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-primary/10 shadow-[0_20px_60px_rgba(30,58,138,0.08)] py-6 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-1 px-6">
              {[
                { label: "Home", href: "/" },
                { label: "About E2A'27", href: "/about" },
                { label: "Call for Papers", href: "/call-for-papers" },
                { label: "Smart Track Matcher", href: "/call-for-papers#matcher" },
                { label: "Important Dates", href: "/#important-dates" },
                { label: "Organizing Committee", href: "/committee" },
                { label: "Registration & Fee", href: "/registration" },
                { label: "Keynote Speakers", href: "/speakers" },
                { label: "Venue & Travel Details", href: "/venue" },
                { label: "Contact Organizers", href: "/#contact" }
              ].map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  className="text-base font-semibold text-slate-700 py-3.5 px-4 rounded-xl hover:bg-primary/5 hover:text-primary transition-all border-b border-slate-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <a 
                href="https://cmt3.research.microsoft.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full mt-4"
              >
                <Button className="w-full bg-gradient-to-r from-primary to-accent text-white font-mono uppercase tracking-wider rounded-xl shadow-lg py-6.5 border-0">
                  Open Submissions Portal (CMT)
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
