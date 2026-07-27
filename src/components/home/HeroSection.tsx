"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, CalendarCheck, ChevronDown } from "lucide-react";
import { COMPANY, IMAGES } from "@/lib/constants";
import Link from "next/link";

const stats = [
  { value: "+500", label: "مشروع مكتمل", labelEn: "Completed Projects" },
  { value: "+300", label: "عميل سعيد", labelEn: "Happy Clients" },
  { value: "+10", label: "سنوات خبرة", labelEn: "Years Experience" },
  { value: "98%", label: "رضا العملاء", labelEn: "Customer Satisfaction" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="مطبخ مودرن فاخر - أسماء ديزاين كيتشن"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-olive/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-5 py-2 rounded-full glass text-white/90 text-sm font-medium border border-gold/30 mb-6">
            ✨ من المصنع مباشرة إلى منزلك
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
        >
          صمم مطبخ أحلامك مع
          <br />
          <span className="text-gradient-gold">Asmaa Design Kitchen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          من المصنع مباشرة إلى منزلك بأعلى جودة وأفضل الأسعار.
          <br className="hidden sm:block" />
          تصميم وتصنيع وتركيب مطابخ مودرن وكلاسيك في القاهرة الجديدة
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl gradient-gold text-white font-bold text-lg shadow-2xl hover:opacity-90 transition-all hover:scale-105"
          >
            <CalendarCheck className="w-5 h-5" />
            احجز معاينة
          </Link>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-green-600 text-white font-bold text-lg shadow-2xl hover:bg-green-700 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            تواصل واتساب
          </a>
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl glass text-white font-bold text-lg hover:bg-white/20 transition-all hover:scale-105 border border-white/20"
          >
            <Phone className="w-5 h-5" />
            اتصل الآن
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelEn}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="glass rounded-2xl p-6 text-center border border-white/10 hover:border-gold/30 transition-all"
            >
              <div className="text-3xl md:text-4xl font-black text-gold mb-1">{stat.value}</div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
