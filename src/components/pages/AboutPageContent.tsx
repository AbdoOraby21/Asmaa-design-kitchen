"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Heart, Factory, Shield, CheckCircle } from "lucide-react";
import { IMAGES, COMPANY } from "@/lib/constants";

const values = [
  { icon: Award, title: "الجودة", desc: "نلتزم بأعلى معايير الجودة في كل تفصيلة" },
  { icon: Users, title: "العملاء أولاً", desc: "رضا العميل هو أولويتنا القصوى" },
  { icon: Target, title: "الدقة", desc: "دقة في المقاسات والتصنيع والتركيب" },
  { icon: Heart, title: "الشغف", desc: "نحب ما نفعل ونضع قلبنا في كل مشروع" },
];

export default function AboutPageContent() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              من <span className="text-gradient-gold">نحن</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              تعرف على قصتنا ورؤيتنا ولماذا نحن الخيار الأفضل لمطبخ أحلامك
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-gold font-semibold text-sm mb-3 block">قصتنا</span>
            <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-6">
              أكثر من <span className="text-gradient-gold">10 سنوات</span> من التميز
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              بدأت أسماء ديزاين كيتشن كمصنع صغير في القاهرة الجديدة، وخلال أكثر من 10 سنوات من العمل الدؤوب والتطوير المستمر، أصبحنا واحدة من أبرز شركات تصميم وتصنيع المطابخ في مصر.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              نفخر بأننا أنجزنا أكثر من 500 مشروع مطبخ لعملاء سعداء في مختلف أنحاء القاهرة الكبرى، من التجمع الخامس ومدينة نصر إلى الشروق والرحاب والعاصمة الإدارية الجديدة.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "+500", label: "مشروع مكتمل" },
                { num: "+300", label: "عميل سعيد" },
                { num: "+10", label: "سنوات خبرة" },
                { num: "98%", label: "رضا العملاء" },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-2xl bg-cream text-center">
                  <div className="text-2xl font-black text-gold">{s.num}</div>
                  <div className="text-gray-500 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden premium-shadow-lg"
          >
            <img src={IMAGES.drawerDetail} alt="مصنع أسماء ديزاين كيتشن" className="w-full h-[500px] object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 premium-shadow border border-transparent hover:border-gold/20 transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-charcoal mb-4">رسالتنا</h3>
            <p className="text-gray-500 leading-relaxed">
              تقديم حلول مطابخ وأثاث داخلي عالية الجودة بأسعار تنافسية، مع التركيز على رضا العميل والتسليم في الموعد. نهدف لأن يكون كل منزل يحتوي على مطبخ يعكس شخصية صاحبه.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-10 premium-shadow border border-transparent hover:border-gold/20 transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl gradient-olive flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-charcoal mb-4">رؤيتنا</h3>
            <p className="text-gray-500 leading-relaxed">
              أن نكون الخيار الأول لكل عائلة مصرية تبحث عن مطبخ أحلامها. نسعى لأن نكون رواداً في صناعة المطابخ في مصر والمنطقة العربية من خلال الابتكار والجودة.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
              قيمنا <span className="text-gradient-gold">الأساسية</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-8 rounded-3xl bg-cream hover-lift"
                >
                  <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Factory */}
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              مصنعنا <span className="text-gradient-gold">الحديث</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
              مصنع مجهز بأحدث الماكينات والمعدات لضمان أعلى جودة في التصنيع
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[IMAGES.modernKitchen, IMAGES.classicKitchen, IMAGES.whiteKitchen].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl overflow-hidden"
              >
                <img src={img} alt={`مصنع أسماء ديزاين ${i + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
