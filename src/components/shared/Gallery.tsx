"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948840/DSC_6292_olfi2i.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948840/DSC_6297_1_ilo7ja.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948839/DSC_5406_v9wcbo.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948838/DSC_5427_qncpnz.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948838/DSC_6296_fqqlr1.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948838/DSC_5395_1_ogi38e.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948837/DSC_5434_pnvc6t.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948837/DSC_5375_1_ajert3.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948837/DSC_5403_xer2y0.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948836/DSC_5355_eowcmy.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948836/DSC_5334_1_z5ljwk.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948836/DSC_5370_daygeo.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948836/DSC_5420_1_q4uijm.jpg",
  "https://res.cloudinary.com/dprjiwgfo/image/upload/v1779948835/DSC_5424_tongdq.jpg"
];

export function PhotoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (idx % 4) * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={`relative overflow-hidden rounded-xl cursor-pointer group bg-muted ${
              idx === 0 || idx === 7 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
            }`}
            onClick={() => openLightbox(idx)}
          >
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
            <img
              src={src.replace('/upload/', '/upload/c_fill,g_auto:faces,w_800,h_800,q_auto/')}
              alt="Conference Photo"
              className="object-cover object-top w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
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
              src={images[currentIndex]}
              alt="Conference Photo"
              className="max-h-[85vh] w-auto rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
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
