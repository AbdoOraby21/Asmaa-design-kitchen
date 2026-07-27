"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm tracking-wider mb-3 block">خدماتنا</span>
          <h2 className="text-3xl md:text-5xl font-black text-charcoal mb-4">
            خدمات <span className="text-gradient-gold">متكاملة</span> لمنزلك
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            نقدم جميع خدمات تصميم وتصنيع وتركيب المطابخ والأثاث الداخلي بأعلى جودة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-3xl overflow-hidden hover-lift"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-white/70 text-sm mb-3 line-clamp-2">{service.description}</p>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:text-gold-light transition-colors"
                  >
                    اعرف المزيد
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-gold text-gold font-bold hover:bg-gold hover:text-white transition-all"
          >
            عرض جميع الخدمات
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
