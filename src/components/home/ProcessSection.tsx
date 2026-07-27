"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Monitor, Factory, Wrench, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Phone, MessageCircle, MapPin, Monitor, Factory, Wrench, CheckCircle,
};

export default function ProcessSection() {
  return (
    <section className="section-padding bg-charcoal text-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm tracking-wider mb-3 block">خطوات العمل</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            كيف <span className="text-gradient-gold">نعمل؟</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            نتبع منهجية احترافية من أول اتصال حتى تسليم مطبخك الجديد
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon] || CheckCircle;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center group"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-3xl gradient-gold mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="w-9 h-9 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-charcoal border-2 border-gold flex items-center justify-center text-gold font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
