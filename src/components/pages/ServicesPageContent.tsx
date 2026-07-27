"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/constants";

export default function ServicesPageContent() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold font-semibold text-sm mb-3 block">خدماتنا المتكاملة</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              كل ما تحتاجه <span className="text-gradient-gold">لمنزلك</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              نقدم مجموعة شاملة من خدمات تصميم وتصنيع وتركيب المطابخ والأثاث الداخلي
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${
                i % 2 === 1 ? "lg:direction-ltr" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-gold font-semibold text-sm mb-2 block">{service.titleEn}</span>
                <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">{service.title}</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={COMPANY.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl gradient-gold text-white font-medium hover:opacity-90 transition-all shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    اطلب عرض سعر
                  </a>
                </div>
              </div>
              <div className={`rounded-3xl overflow-hidden premium-shadow-lg ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <img
                  src={service.image}
                  alt={`${service.title} - أسماء ديزاين كيتشن`}
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-gold text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4">جاهز لتصميم مطبخ أحلامك؟</h2>
          <p className="text-white/80 text-lg mb-8">تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر مميز</p>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-gold font-bold text-lg hover:bg-gray-50 transition-colors shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            تواصل عبر واتساب
          </a>
        </div>
      </section>
    </main>
  );
}
