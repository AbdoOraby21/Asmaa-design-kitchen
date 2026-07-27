"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

const filters = [
  { key: "all", label: "الكل" },
  { key: "modern", label: "مودرن" },
  { key: "classic", label: "كلاسيك" },
  { key: "luxury", label: "فاخر" },
  { key: "closets", label: "كلوزيت" },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);

  const currentIndex = filtered.findIndex((item) => item.id === lightbox);
  const goNext = () => {
    if (currentIndex < filtered.length - 1) setLightbox(filtered[currentIndex + 1].id);
  };
  const goPrev = () => {
    if (currentIndex > 0) setLightbox(filtered[currentIndex - 1].id);
  };

  return (
    <section className="section-padding bg-cream" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-semibold text-sm tracking-wider mb-3 block">أعمالنا</span>
          <h2 className="text-3xl md:text-5xl font-black text-charcoal mb-4">
            معرض <span className="text-gradient-gold">المشاريع</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            شاهد مجموعة من أحدث مشاريعنا المنفذة بأعلى معايير الجودة والإتقان
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
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

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer hover-lift"
                onClick={() => openLightbox(item.id)}
              >
                <div className="aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-gold text-white font-bold shadow-xl hover:opacity-90 transition-all"
          >
            عرض جميع المشاريع
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-6 h-6" />
            </button>

            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="السابق"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {currentIndex < filtered.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="التالي"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filtered[currentIndex]?.src}
              alt={filtered[currentIndex]?.title || ""}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
