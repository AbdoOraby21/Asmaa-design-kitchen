"use client";

import { motion } from "framer-motion";
import { Percent, CreditCard, Tag, Gift, MessageCircle, Clock } from "lucide-react";
import { COMPANY, IMAGES } from "@/lib/constants";

const offers = [
  {
    title: "خصم 15% على المطابخ المودرن",
    desc: "احصل على خصم 15% على جميع المطابخ المودرن لفترة محدودة. العرض يشمل التصميم والتصنيع والتركيب.",
    icon: Percent,
    color: "gradient-gold",
    image: IMAGES.modernKitchen,
    badge: "عرض محدود",
  },
  {
    title: "تقسيط حتى 12 شهر بدون فوائد",
    desc: "قسط مطبخك الجديد على 12 شهر بدون أي فوائد أو رسوم إضافية. متاح لجميع أنواع المطابخ.",
    icon: CreditCard,
    color: "gradient-olive",
    image: IMAGES.classicKitchen,
    badge: "تقسيط مريح",
  },
  {
    title: "تصميم 3D مجاني + معاينة مجانية",
    desc: "احصل على تصميم ثلاثي الأبعاد مجاني لمطبخك مع معاينة مجانية في منزلك. بدون أي التزام.",
    icon: Gift,
    color: "gradient-gold",
    image: IMAGES.kitchen2,
    badge: "مجاني",
  },
  {
    title: "خصم خاص على الدريسنج روم",
    desc: "خصم 10% على جميع تصاميم الدريسنج روم والكلوزيت عند طلب مطبخ. عرض حصري لعملائنا.",
    icon: Tag,
    color: "gradient-olive",
    image: IMAGES.dressingRoom,
    badge: "عرض حصري",
  },
];

export default function OffersPageContent() {
  return (
    <main>
      <section className="relative py-32 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20"><div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" /></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-5 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">🔥 عروض حصرية</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">عروض <span className="text-gradient-gold">لا تُفوّت</span></h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">استفد من عروضنا المميزة وخصوماتنا الحصرية على المطابخ والأثاث</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {offers.map((offer, i) => {
              const Icon = offer.icon;
              return (
                <motion.div
                  key={offer.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden premium-shadow-lg hover-lift group"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={offer.image} alt={offer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-gold text-white text-sm font-bold">{offer.badge}</span>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${offer.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal">{offer.title}</h3>
                    </div>
                    <p className="text-gray-500 leading-relaxed mb-6">{offer.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl gradient-gold text-white font-medium hover:opacity-90 shadow-lg">
                        <MessageCircle className="w-5 h-5" />
                        استفد من العرض
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-charcoal rounded-3xl p-10 text-center text-white"
          >
            <Clock className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">العروض لفترة محدودة!</h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">لا تفوت الفرصة. تواصل معنا الآن واحصل على أفضل عرض سعر لمطبخك الجديد</p>
            <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-gold text-white font-bold text-lg hover:opacity-90 shadow-xl">
              اتصل الآن: {COMPANY.phoneFormatted}
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
