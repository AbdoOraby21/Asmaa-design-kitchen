"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const filters = [
  { key: "all", label: "الكل" },
  { key: "modern", label: "مودرن" },
  { key: "classic", label: "كلاسيك" },
  { key: "luxury", label: "فاخر" },
  { key: "closets", label: "كلوزيت ودريسنج" },
];

export default function GalleryPageContent() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const currentIndex = filtered.findIndex((item) => item.id === lightbox);
  const goNext = () => {
    if (currentIndex < filtered.length - 1) setLightbox(filtered[currentIndex + 1].id);
  };
  const goPrev = () => {
    if (currentIndex > 0) setLightbox(filtered[currentIndex - 1].id);
  };

  return (
    <main>
      <section className="relative py-32 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              معرض <span className="text-gradient-gold">أعمالنا</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              أكثر من 500 مشروع مطبخ مكتمل بأعلى معايير الجودة والإتقان
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
                  activeFilter === f.key
                    ? "gradient-gold text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gold/10 hover:text-gold border border-gray-200"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer hover-lift"
                  onClick={() => setLightbox(item.id)}
                >
                  <div className="aspect-square">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                      <h3 className="text-white font-bold">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && currentIndex !== -1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20" aria-label="إغلاق">
              <X className="w-6 h-6" />
            </button>
            {currentIndex > 0 && (
              <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20" aria-label="السابق">
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
            {currentIndex < filtered.length - 1 && (
              <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20" aria-label="التالي">
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={filtered[currentIndex]?.src}
              alt={filtered[currentIndex]?.title || ""}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
