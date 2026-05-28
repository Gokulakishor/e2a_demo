"use client";

import { motion } from "framer-motion";
import { tracksData } from "@/data/tracks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  ChevronRight, 
  Cpu, 
  ImageIcon, 
  Bot, 
  Zap, 
  Wifi, 
  Activity, 
  Sparkles,
  BookOpen,
  FileText
} from "lucide-react";

// Map track indexes to icons for high-fidelity UI
const TRACK_ICONS = [
  Cpu,          // Track 1
  ImageIcon,    // Track 2
  Bot,          // Track 3
  Zap,          // Track 4
  Wifi,         // Track 5
  Activity,     // Track 6
  Sparkles      // Track 7
];

export default function CallForPapersPage() {
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
            Call for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">Papers</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            We invite original and high-quality research contributions to be presented at E2A&apos;27.
          </motion.p>
        </div>
      </section>

      <section className="py-20 relative">
        {/* Institutional Seal Watermark */}
        <div className="absolute left-0 top-1/3 opacity-[0.02] pointer-events-none select-none z-0 hidden lg:block">
          <img src="/logo.svg" alt="NIT Silchar watermark" className="w-[500px] h-[500px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">
          
          {/* Submission Main Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Submit Your Research</h3>
              <p className="text-slate-600 font-light max-w-lg leading-relaxed">
                All submissions must be made electronically via the Microsoft CMT portal.
              </p>
            </div>
            <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/95 text-white shrink-0 font-mono tracking-wide py-6 px-8 rounded-xl shadow-md border-0">
                Submit via CMT <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>

          {/* Author Guidelines Section (Springer Alignment & Rules) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white/40 border border-slate-200 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-primary border-b pb-4">Author Guidelines</h2>
            <p className="text-md text-slate-700 leading-relaxed text-justify">
              Authors are invited to submit original, unpublished research papers not currently under review by another conference or journal. Papers must be written in English and formatted according to the standard Springer conference template.
            </p>
            <ul className="list-disc list-inside space-y-3.5 text-slate-650 font-light text-sm md:text-md text-justify">
              <li className="text-justify leading-relaxed">All papers must be original and not simultaneously submitted to another journal or conference.</li>
              <li className="text-justify leading-relaxed">Papers must be written in English and should follow the Springer formatting guidelines.</li>
              <li className="text-justify leading-relaxed">The paper should be a maximum of <strong className="font-semibold text-slate-800">5 pages</strong> (including figures, tables, and references).</li>
              <li className="text-justify leading-relaxed">All submissions will be made through the Microsoft CMT portal.</li>
              <li className="text-justify leading-relaxed">All papers will undergo a <strong className="font-semibold text-slate-800">double-blind peer review</strong> process.</li>
              <li className="text-justify leading-relaxed">Accepted and presented papers will be published in the Springer Lecture Notes in Electrical Engineering (LNEE) series proceedings.</li>
              <li className="text-justify leading-relaxed">All submitted papers will be checked for plagiarism. The similarity index must be <strong className="font-semibold text-slate-800">below 15%</strong> (with less than 5% from a single source).</li>
              <li className="text-justify leading-relaxed">At least one author of each accepted paper must register at the full rate to ensure inclusion in the proceedings.</li>
              <li className="text-justify leading-relaxed">Papers that are not presented at the conference will not be included in the proceedings.</li>
              <li className="text-justify leading-relaxed">The Springer template must be strictly followed.</li>
            </ul>
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="https://www.springer.com/gp/authors-editors/conference-proceedings/conference-proceedings-guidelines" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-xl px-5 py-6">
                  <Download className="mr-2 h-4 w-4" /> Download Springer Template
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Previous Publications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight text-center">Previous Publications</h2>
              <p className="text-sm text-slate-500 mt-2 text-center max-w-lg mx-auto font-light">
                Browse official proceedings of the E2A conference series published under Springer Lecture Notes in Electrical Engineering (LNEE).
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Visual Styled Book Cover Mockup */}
              <div className="lg:col-span-5 flex flex-col justify-center items-center p-8 bg-gradient-to-br from-slate-550/5 to-slate-500/5 border border-slate-200 rounded-3xl relative overflow-hidden min-h-[350px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                {/* CSS Book Mockup */}
                <div className="w-[180px] h-[260px] bg-[#E75B12] rounded-r-lg shadow-2xl border-l-[10px] border-black/20 flex flex-col justify-between p-4 text-white relative group-hover:scale-105 transition-transform duration-300">
                  <div className="space-y-1">
                    <p className="text-[7px] tracking-widest uppercase font-mono text-white/80">Lecture Notes in Electrical Engineering</p>
                    <p className="text-[5px] text-white/55 font-mono">Volume 1088</p>
                    <div className="h-px bg-white/20 my-2" />
                    <h4 className="text-xs font-bold font-sans tracking-tight">Emerging Electronics and Automation</h4>
                    <p className="text-[6px] text-white/80 font-light italic mt-1">Select Proceedings of E2A 2022</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-[5px] text-white/70 font-mono">
                      <p>Moncef Gabbouj</p>
                      <p>Shyam Sudhir Pandey</p>
                      <p>Hari Krishna Garg</p>
                      <p>Ranjay Hazra</p>
                    </div>
                    <span className="text-[8px] font-bold tracking-tighter font-serif uppercase">Springer</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 font-mono mt-4 text-center">Featured Cover: 2nd Edition Proceedings (LNEE Vol. 1088)</p>
              </div>

              {/* Right Column: Interactive Editions List */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                {[
                  {
                    edition: "1st Edition (E2A 2021)",
                    series: "Lecture Notes in Electrical Engineering (LNEE, Vol. 937)",
                    isbn: "ISBN: 978-981-19-4299-0",
                    url: "https://link.springer.com/book/10.1007/978-981-19-4300-3",
                    status: "Published",
                    active: true
                  },
                  {
                    edition: "2nd Edition (E2A 2022)",
                    series: "Lecture Notes in Electrical Engineering (LNEE, Vol. 1088)",
                    isbn: "ISBN: 978-981-99-6854-1",
                    url: "https://link.springer.com/book/10.1007/978-981-99-6855-8",
                    status: "Published",
                    active: true
                  },
                  {
                    edition: "3rd Edition (E2A 2023 - Vol. 1)",
                    series: "Lecture Notes in Electrical Engineering (LNEE, Vol. 1237)",
                    isbn: "ISBN: 978-981-97-6802-8",
                    url: "https://link.springer.com/book/10.1007/978-981-97-6802-8",
                    status: "Published",
                    active: true
                  },
                  {
                    edition: "3rd Edition (E2A 2023 - Vol. 2)",
                    series: "Lecture Notes in Electrical Engineering (LNEE, Vol. 1202)",
                    isbn: "ISBN: 978-981-97-3090-2",
                    url: "https://link.springer.com/book/10.1007/978-981-97-3090-2",
                    status: "Published",
                    active: true
                  },
                  {
                    edition: "4th Edition (E2A 2024)",
                    series: "Lecture Notes in Electrical Engineering (LNEE)",
                    isbn: "ISBN: Under Process (springer approval pending)",
                    url: "#",
                    status: "Pending",
                    active: false
                  },
                  {
                    edition: "5th Edition (E2A 2025)",
                    series: "Lecture Notes in Electrical Engineering (LNEE)",
                    isbn: "ISBN: Under Process (springer approval pending)",
                    url: "#",
                    status: "Pending",
                    active: false
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all duration-300 ${
                      item.active
                        ? "bg-white/50 border-slate-200 hover:border-primary/40 hover:shadow-md"
                        : "bg-slate-50/50 border-slate-100 opacity-80"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[9px] uppercase font-mono font-bold px-2 py-0.5 rounded-full ${
                            item.active ? "bg-primary/10 text-primary" : "bg-slate-200 text-slate-500"
                          }`}>
                            {item.edition.split(" ")[0] + " " + item.edition.split(" ")[1]}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">{item.edition.substring(item.edition.indexOf("("))}</span>
                        </div>
                        <p className="text-sm font-semibold text-slate-800 mt-2">{item.series}</p>
                        <p className="text-xs text-slate-500 font-mono mt-1">{item.isbn}</p>
                      </div>
                      
                      {item.active ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-primary/5 hover:bg-primary/10 rounded-xl text-primary transition-colors shrink-0"
                          title="Open Springer Link"
                        >
                          <BookOpen className="h-4 w-4" />
                        </a>
                      ) : (
                        <div className="p-2.5 bg-slate-100 rounded-xl text-slate-400 shrink-0 cursor-not-allowed">
                          <BookOpen className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Conference Tracks List */}
          <div className="space-y-8 pt-8">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight text-center">Conference Tracks</h2>
              <p className="text-sm text-slate-500 mt-2 text-center max-w-lg mx-auto font-light">
                Explore the technical scope of E2A&apos;27. Our conference features 7 tracks covering cutting-edge domains in automation, sensors, and computing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tracksData.map((track, idx) => {
                const Icon = TRACK_ICONS[idx] || Cpu;
                return (
                  <Card key={idx} className="border-slate-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-md relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                      <Icon className="h-28 w-28 text-primary" />
                    </div>
                    <CardHeader className="flex flex-row items-center gap-4 border-b border-slate-100 pb-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold">Track 0{idx + 1}</span>
                        <CardTitle className="text-lg text-foreground font-bold mt-0.5">{track.title.split(":").pop()?.trim()}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="grid grid-cols-1 gap-2.5">
                        {track.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 hover:text-primary transition-colors">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            <span className="font-light leading-relaxed">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
