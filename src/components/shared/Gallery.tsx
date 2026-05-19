"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop", alt: "Conference Hall" },
  { src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop", alt: "NIT Silchar Campus" },
  { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop", alt: "Audience Interaction" },
  { src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1200&auto=format&fit=crop", alt: "Networking Session" },
  { src: "https://images.unsplash.com/photo-1475721025870-2460665d4062?q=80&w=1200&auto=format&fit=crop", alt: "Keynote Speech" },
  { src: "https://images.unsplash.com/photo-1523580494112-071d41218683?q=80&w=1200&auto=format&fit=crop", alt: "Technical Paper Presentation" },
];

export function PhotoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={`relative overflow-hidden rounded-xl cursor-pointer group bg-muted ${
              idx === 0 || idx === 3 ? 'md:col-span-2 aspect-video' : 'aspect-square'
            }`}
            onClick={() => openLightbox(idx)}
          >
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-6 right-6 text-foreground hover:bg-muted rounded-full w-12 h-12"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-foreground hover:bg-muted rounded-full w-14 h-14"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="relative w-full max-w-5xl px-4 md:px-0 flex flex-col items-center">
             <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-h-[80vh] w-auto rounded-lg shadow-2xl object-contain"
                onClick={(e) => e.stopPropagation()}
             />
             <p className="mt-6 text-muted-foreground font-medium text-lg">
               {images[currentIndex].alt}
             </p>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-foreground hover:bg-muted rounded-full w-14 h-14"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      )}
    </>
  );
}
