"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS: Array<{
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
}> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Call for Papers", href: "/call-for-papers" },
  { label: "Special Session", href: "/special-session" },
  {
    label: "For Authors",
    href: "/information-for-authors",
    children: [
      { label: "Registration", href: "/information-for-authors#registration" },
      { label: "Paper Submission", href: "/information-for-authors#paper-submission" },
      { label: "Travel Support", href: "/information-for-authors#travel-support" },
      { label: "Best Presentation Award", href: "/best-awards" },
    ],
  },
  { label: "Committee", href: "/committee" },
  { label: "Speakers", href: "/speakers" },
  { label: "Sponsors", href: "/#sponsors" },
  { label: "Venue", href: "/venue" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      };
      setTimeStr(now.toLocaleTimeString("en-IN", options) + " IST");
    };
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ── Institutional Top Bar ── */}
      <div className="fixed top-0 inset-x-0 z-50 h-9 bg-[#0f172a] border-b border-white/5 flex items-center justify-between px-4 md:px-8 select-none pointer-events-auto">
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
          <span className="text-[10px] font-mono tracking-wider text-white/60 truncate">
            <span className="text-white/80 font-semibold">NATIONAL INSTITUTE OF TECHNOLOGY SILCHAR</span>
            <span className="hidden sm:inline text-white/40"> — An Institute of National Importance</span>
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="http://endearing-duckanoo-cef30f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline text-[10px] font-mono text-white/50 hover:text-amber-400 transition-colors"
          >
            E2A 25 ↗
          </a>
          <span className="hidden md:inline text-white/20 text-xs">|</span>
          <a
            href="https://www.nits.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline text-[10px] font-mono text-white/50 hover:text-amber-400 transition-colors"
          >
            NIT PORTAL ↗
          </a>
          <span className="hidden md:inline text-white/20 text-xs">|</span>
          <span className="text-[10px] font-mono tabular-nums text-amber-400/90 tracking-tight">
            {timeStr}
          </span>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <header
        className={`fixed inset-x-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "top-9 bg-white/97 backdrop-blur-2xl border-b border-slate-200/80 shadow-[0_4px_24px_rgba(30,58,138,0.08)] py-2"
            : "top-9 bg-gradient-to-b from-black/60 via-black/30 to-transparent border-b border-transparent py-4"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 xl:px-8 flex items-center justify-between gap-4">

          {/* Brand */}
<Link href="/" className="flex items-center gap-3 group shrink-0">
  {/* E2A 2027 Logo */}
  <img
    src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1780614814/E2A_-_2027_dpjmot.png"
    alt="E2A 2027"
    className={`h-11 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
      !isScrolled ? "brightness-0 invert" : ""
    }`}
  />

  {/* NIT Silchar Logo + Department */}
  <div className="flex flex-col items-center justify-center leading-none">
    <img
      src="logo.svg"
      alt="NIT Silchar"
      className={`h-7 w-7 object-contain mb-1 transition-all duration-300 ${
        !isScrolled ? "brightness-0 invert" : ""
      }`}
    />

    <span
      className={`text-[9px] font-mono font-bold tracking-widest uppercase whitespace-nowrap ${
        isScrolled ? "text-slate-600" : "text-white/80"
      }`}
    >
      Dept. of EIE · NIT Silchar
    </span>
  </div>
</Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-0.5" ref={dropdownRef}>
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || (link.children && pathname.startsWith("/information-for-authors"));
              const hasChildren = link.children && link.children.length > 0;

              return (
                <div key={link.href} className="relative">
                  {hasChildren ? (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className={`relative px-2.5 py-2 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap flex items-center gap-1 ${
                        isScrolled
                          ? active
                            ? "text-[#1E3A8A]"
                            : "text-slate-500 hover:text-[#1E3A8A] hover:bg-slate-100/70"
                          : active
                            ? "text-white font-bold"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`} />
                      {active && (
                        <motion.span
                          layoutId="activeUnderline"
                          className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full ${
                            isScrolled
                              ? "bg-gradient-to-r from-[#1E3A8A] to-[#C9A227]"
                              : "bg-amber-300"
                          }`}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative px-2.5 py-2 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                        isScrolled
                          ? active
                            ? "text-[#1E3A8A]"
                            : "text-slate-500 hover:text-[#1E3A8A] hover:bg-slate-100/70"
                          : active
                            ? "text-white font-bold"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                      {active && (
                        <motion.span
                          layoutId="activeUnderline"
                          className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full ${
                            isScrolled
                              ? "bg-gradient-to-r from-[#1E3A8A] to-[#C9A227]"
                              : "bg-amber-300"
                          }`}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {hasChildren && openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white/98 backdrop-blur-2xl border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50"
                      >
                        {link.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-3 text-[11px] font-semibold text-slate-600 hover:bg-primary/5 hover:text-[#1E3A8A] transition-colors uppercase tracking-wider border-b border-slate-100 last:border-b-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA removed as per user request */}

          {/* Mobile hamburger */}
          <button
            className={`xl:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* ── Mobile Drawer ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="xl:hidden overflow-hidden bg-white/98 backdrop-blur-2xl border-t border-slate-200/80 shadow-lg max-h-[70vh] overflow-y-auto"
            >
              <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  const hasChildren = link.children && link.children.length > 0;

                  return (
                    <div key={link.href}>
                      {hasChildren ? (
                        <>
                          <button
                            onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                              active
                                ? "bg-[#1E3A8A]/8 text-[#1E3A8A]"
                                : "text-slate-600 hover:bg-slate-50 hover:text-[#1E3A8A]"
                            }`}
                          >
                            {link.label}
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {mobileExpanded === link.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-6 py-1 space-y-1">
                                  {link.children!.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block px-4 py-2.5 rounded-lg text-sm text-slate-500 hover:bg-slate-50 hover:text-[#1E3A8A] transition-colors"
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                            active
                              ? "bg-[#1E3A8A]/8 text-[#1E3A8A]"
                              : "text-slate-600 hover:bg-slate-50 hover:text-[#1E3A8A]"
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
                {/* Mobile CTA removed as per user request */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
