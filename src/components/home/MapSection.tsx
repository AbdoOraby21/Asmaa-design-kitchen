"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function MapSection() {
  return (
    <section className="section-padding bg-white" id="map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-semibold text-sm tracking-wider mb-3 block">موقعنا</span>
          <h2 className="text-3xl md:text-5xl font-black text-charcoal mb-4">
            <span className="text-gradient-gold">زورونا</span> في مقرنا
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-3xl overflow-hidden premium-shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37!2d31.4!3d30.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d1af35bdd79%3A0x6bc7eeb44e86dd74!2sNew%20Cairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع أسماء ديزاين كيتشن على الخريطة"
            />
          </div>
          <div className="space-y-6">
            {[
              { icon: MapPin, label: "العنوان", value: COMPANY.address },
              { icon: Phone, label: "الهاتف", value: COMPANY.phoneFormatted, href: `tel:${COMPANY.phone}` },
              { icon: Mail, label: "البريد", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
              { icon: Clock, label: "مواعيد العمل", value: `السبت - الخميس: ${COMPANY.hours.weekdays}\nالجمعة: ${COMPANY.hours.friday}` },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream border border-gray-100 hover:border-gold/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                    <p className="text-charcoal font-medium text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="block">{content}</a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
