"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm tracking-wider mb-3 block">آراء عملائنا</span>
          <h2 className="text-3xl md:text-5xl font-black text-charcoal mb-4">
            ماذا يقول <span className="text-gradient-gold">عملاؤنا</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            نفخر بثقة أكثر من 300 عميل سعيد في مصر
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream rounded-3xl p-8 relative hover-lift border border-transparent hover:border-gold/20"
            >
              <Quote className="w-10 h-10 text-gold/20 absolute top-6 left-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
