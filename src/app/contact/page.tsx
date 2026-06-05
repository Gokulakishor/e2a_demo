"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock, Landmark, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    {
      name: "Dr. Vipin Chandra Pal",
      role: "General Chair, E2A'27",
      designation: "Assistant Professor",
      department: "Dept. of Electronics & Instrumentation Engineering",
      institution: "National Institute of Technology Silchar",
      email: "vipin@ei.nits.ac.in",
      phone: "+91-7007231973",
      office: "Department building E&I, NIT Silchar"
    },
    {
      name: "Dr. Shuprajhaa T.",
      role: "Organizing Chair, E2A'27",
      designation: "Assistant Professor",
      department: "Dept. of Electronics & Instrumentation Engineering",
      institution: "National Institute of Technology Silchar",
      email: "shuprajhaa@ei.nits.ac.in",
      phone: "+91-9600467836",
      office: "Department building E&I, NIT Silchar"
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent relative overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-slate-950 text-white">
        {/* Parallax campus background image */}
        <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dprjiwgfo/image/upload/c_fill,g_auto,w_1600,h_900,q_auto/v1779298973/Screenshot_2026-05-20_231203_hfxw07.png" 
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
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Get in touch with the conference organizing committee for inquiries regarding registration, submissions, or venue logistics.
          </motion.p>
        </div>
      </section>

      <section className="py-20 relative">
        {/* Institutional Seal Watermark */}
        <div className="absolute right-0 bottom-10 opacity-[0.02] pointer-events-none select-none z-0 hidden lg:block">
          <img src="/logo.svg" alt="NIT Silchar watermark" className="w-[500px] h-[500px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: DYNAMIC CONTACT PERSONS */}
            <div className="lg:col-span-7 space-y-8">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-2xl font-bold text-primary">Conference Organizers</h3>
                <p className="text-sm text-slate-500 font-light mt-1">Please direct your queries to the governing chairs of E2A&apos;27.</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contacts.map((contact, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="border border-slate-200 bg-white/40 backdrop-blur-md hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 md:p-8 space-y-6">
                        <div>
                          <span className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold px-2.5 py-1 bg-primary/10 rounded-full w-fit block mb-3">
                            {contact.role}
                          </span>
                          <h4 className="text-xl font-bold text-slate-800">{contact.name}</h4>
                          <p className="text-xs font-semibold text-slate-500 mt-1">{contact.designation}</p>
                          <p className="text-xs text-slate-600 font-light mt-0.5">{contact.department}</p>
                          <p className="text-xs text-slate-600 font-light">{contact.institution}</p>
                        </div>

                        <div className="border-t border-slate-100 pt-5 space-y-3.5">
                          <div className="flex items-center gap-3 text-xs text-slate-600">
                            <Mail className="h-4 w-4 text-primary shrink-0" />
                            <a href={`mailto:${contact.email}`} className="font-mono hover:text-primary hover:underline transition-colors">
                              {contact.email}
                            </a>
                          </div>

                          <div className="flex items-center gap-3 text-xs text-slate-600">
                            <Phone className="h-4 w-4 text-primary shrink-0" />
                            <a href={`tel:${contact.phone.replace(/[-\s]/g, "")}`} className="font-mono hover:text-primary hover:underline transition-colors">
                              {contact.phone}
                            </a>
                          </div>

                          {contact.office && (
                            <div className="flex items-center gap-3 text-xs text-slate-600">
                              <Landmark className="h-4 w-4 text-primary shrink-0" />
                              <span className="font-light">{contact.office}</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: MAILING ADDRESS & VENUE LOCATION */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-2xl font-bold text-primary font-sans">Venue: National Institute of Technology Silchar</h3>
                <p className="text-sm text-slate-500 font-light mt-1">Secretariat correspondence address.</p>
              </div>

              {/* Address details card */}
              <Card className="border border-slate-200 bg-white/40 backdrop-blur-md">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent shrink-0 mt-1 animate-bounce" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">National Institute of Technology Silchar Campus Address</h4>
                      <p className="text-slate-600 text-xs font-light mt-2 leading-relaxed">
                        Department of Electronics and Instrumentation Engineering,<br />
                        National Institute of Technology Silchar,<br />
                        Cachar, Assam, India - 788010
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Working Hours: 9 AM - 6 PM IST</span>
                  </div>
                </CardContent>
              </Card>

              {/* Map embed */}
              <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-inner flex items-center justify-center relative backdrop-blur-md">
                <iframe
                  title="NIT Silchar Campus Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3758362678684!2d92.79036727596041!3d24.748259699268715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49d638708c35%3A0xc34be2bf4691459a!2sNational%20Institute%20of%20Technology%20Silchar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="text-center pt-2">
                <a 
                  href="https://www.google.com/maps/dir//National+Institute+of+Technology+Silchar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline font-mono"
                >
                  Get Driving Directions <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
