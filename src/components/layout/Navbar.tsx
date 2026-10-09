"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Megaphone } from "lucide-react";

const NAV_LINKS: Array<{
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
}> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Call for Papers", href: "/call-for-papers" },
  { label: "Important Dates", href: "/#important-dates" },
  { label: "Special Session", href: "/special-session" },
  { label: "Pre-Conference Workshop", href: "/pre-conference-workshop" },
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

/* Separate component so the 1-second clock tick doesn't re-render the whole navbar */
function IstClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }) + " IST"
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="text-[10px] font-mono tabular-nums text-amber-400/90 tracking-tight">
      {time}
    </span>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Highlights a link when on its own page or any of its children's pages
  const isActive = (link: (typeof NAV_LINKS)[number]) =>
    pathname === link.href ||
    !!link.children?.some((c) => pathname === c.href.split("#")[0]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
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

  const linkBase =
    "relative px-2.5 py-2 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap";
  const linkColor = (active: boolean) =>
    active
      ? "text-[#1E3A8A]"
      : "text-slate-500 hover:text-[#1E3A8A] hover:bg-slate-100/70";

  const ActiveUnderline = () => (
    <motion.span
      layoutId="activeUnderline"
      className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#C9A227]"
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    />
  );

  return (
    <>
      {/* ── Institutional Top Bar ── */}
      <div className="fixed top-0 inset-x-0 z-50 h-9 bg-[#0f172a] border-b border-white/5 flex items-center justify-between px-4 md:px-8 select-none pointer-events-auto">
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
          <span className="text-[10px] font-mono tracking-wider text-white/60 truncate">
            <span className="text-white/80 font-semibold">
              NATIONAL INSTITUTE OF TECHNOLOGY SILCHAR
            </span>
            <span className="hidden sm:inline text-white/40">
              {" "}
              — An Institute of National Importance
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://endearing-duckanoo-cef30f.netlify.app/"
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
          <IstClock />
        </div>
      </div>
      {/* Scrolling Deadline Announcement */}
<div className="fixed top-9 inset-x-0 z-30 h-8 overflow-hidden bg-[#1E3A8A] text-white">
  <Link
    href="/#important-dates"
    className="flex h-full items-center overflow-hidden"
    aria-label="Submission deadline extended. View important dates."
  >
    <div className="flex min-w-max animate-marquee items-center gap-3 px-4">
      <Megaphone className="h-4 w-4 shrink-0 text-amber-300" />

      <span className="text-xs font-semibold uppercase tracking-wider">
        Submission Deadline Extended — Click Here to View Important Dates
      </span>

      <span className="text-amber-300">✦</span>

      <span className="text-xs font-semibold uppercase tracking-wider">
        Submission Deadline Extended — Click Here to View Important Dates
      </span>
    </div>
  </Link>
</div>
      {/* ── Main Navbar (always white) ── */}
      <header className="fixed inset-x-0 top-[4.5rem] z-40 border-b border-slate-200 bg-white shadow-sm py-0">
        <div className="w-full px-4 md:px-6 flex items-center justify-between gap-2">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group shrink-0 ">
            <img
              src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1780614814/E2A_-_2027_dpjmot.png"
              alt="E2A 2027"
              className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-0.5" ref={dropdownRef}>
            {NAV_LINKS.map((link) => {
              const active = isActive(link);
              const hasChildren = !!link.children?.length;

              return (
                <div key={link.href} className="relative">
                  {hasChildren ? (
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                      className={`${linkBase} ${linkColor(active)} flex items-center gap-1`}
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                      {active && <ActiveUnderline />}
                    </button>
                  ) : (
                    <Link href={link.href} className={`${linkBase} ${linkColor(active)}`}>
                      {link.label}
                      {active && <ActiveUnderline />}
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
                        className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden z-[100]"
                      >
                        {link.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-5 py-3.5 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#1E3A8A] transition-colors uppercase tracking-wide border-b border-slate-100 last:border-b-0"
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

          {/* NIT Silchar Logo + Department */}
          <div className="hidden md:flex flex-col items-center gap-1.5 shrink-0">
  <img src="/logo.png" alt="NIT Silchar" className="h-20 w-auto object-contain" />
  <span className="text-[9px] font-mono font-bold tracking-widest uppercase whitespace-nowrap leading-tight text-slate-600 text-center">
    Dept. of EIE
    <br />
    NIT Silchar
  </span>
</div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 rounded-xl transition-colors text-slate-600 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
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
              className="xl:hidden overflow-hidden bg-white border-t border-slate-200 shadow-lg max-h-[70vh] overflow-y-auto"
            >
              <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const active = isActive(link);
                  const hasChildren = !!link.children?.length;

                  return (
                    <div key={link.href}>
                      {hasChildren ? (
                        <>
                          <button
                            onClick={() =>
                              setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                            }
                            aria-expanded={mobileExpanded === link.label}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                              active
                                ? "bg-[#1E3A8A]/10 text-[#1E3A8A]"
                                : "text-slate-700 hover:bg-slate-50 hover:text-[#1E3A8A]"
                            }`}
                          >
                            {link.label}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${
                                mobileExpanded === link.label ? "rotate-180" : ""
                              }`}
                            />
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
                          className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                            active
                              ? "bg-[#1E3A8A]/10 text-[#1E3A8A]"
                              : "text-slate-600 hover:bg-slate-50 hover:text-[#1E3A8A]"
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}