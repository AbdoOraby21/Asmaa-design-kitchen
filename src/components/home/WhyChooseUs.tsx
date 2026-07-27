"use client";

import { motion } from "framer-motion";
import { Factory, Gem, DollarSign, Monitor, Wrench, Shield, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Factory, title: "مصنع مباشر", desc: "من المصنع مباشرة بدون وسيط لأفضل الأسعار" },
  { icon: Gem, title: "أفضل الخامات", desc: "نستخدم أجود أنواع الخشب والخامات المستوردة" },
  { icon: DollarSign, title: "أسعار تنافسية", desc: "أسعار لا تُنافس مع الحفاظ على أعلى جودة" },
  { icon: Monitor, title: "تصميم 3D", desc: "شاهد مطبخك بتصميم ثلاثي الأبعاد قبل التنفيذ" },
  { icon: Wrench, title: "تركيب احترافي", desc: "فنيون متخصصون في التركيب والتشطيب" },
  { icon: Shield, title: "ضمان الجودة", desc: "ضمان شامل على جميع منتجاتنا وخدماتنا" },
  { icon: Clock, title: "تسليم في الموعد", desc: "نلتزم بالمواعيد المحددة دائماً" },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-cream" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm tracking-wider mb-3 block">لماذا نحن</span>
          <h2 className="text-3xl md:text-5xl font-black text-charcoal mb-4">
            لماذا تختار <span className="text-gradient-gold">أسماء ديزاين؟</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            نقدم لك تجربة متكاملة من التصميم حتى التسليم بأعلى معايير الجودة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-3xl p-8 premium-shadow hover-lift cursor-default border border-transparent hover:border-gold/20"
              >
                <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
