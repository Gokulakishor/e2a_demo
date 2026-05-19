"use client";

import { motion } from "framer-motion";
import { speakersData } from "@/data/speakers";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SpeakersPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent">
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Dynamic mesh gradient back support */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-500/10 z-0 animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-foreground"
          >
            Keynote &amp; Plenary <span className="text-gradient">Speakers</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Learn from world-renowned experts pushing the boundaries of electronics, automation, and engineering.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakersData.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-[4/3] overflow-hidden relative bg-muted">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent text-accent-foreground hover:bg-accent shadow-md">
                        {speaker.type} Speaker
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <h3 className="text-2xl font-bold text-primary">{speaker.name}</h3>
                    <p className="text-sm font-medium text-foreground">{speaker.designation}</p>
                    <p className="text-sm text-muted-foreground">{speaker.affiliation}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-4 border-t pt-4">
                      {speaker.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
