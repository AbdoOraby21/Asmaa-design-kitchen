"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2, CheckCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function ContactPageContent() {
  const [formData, setFormData] = useState({ name: "", phone: "", city: "", kitchenSize: "", preferredDate: "", notes: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (res.ok) { setStatus("success"); setFormData({ name: "", phone: "", city: "", kitchenSize: "", preferredDate: "", notes: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <main>
      <section className="relative py-32 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20"><div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" /></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">تواصل <span className="text-gradient-gold">معنا</span></h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">نحن هنا لمساعدتك. تواصل معنا بأي طريقة تناسبك</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Phone, label: "اتصل بنا", value: COMPANY.phoneFormatted, href: `tel:${COMPANY.phone}`, color: "gradient-gold" },
              { icon: MessageCircle, label: "واتساب", value: "تواصل عبر واتساب", href: COMPANY.whatsapp, color: "bg-green-500" },
              { icon: Mail, label: "البريد الإلكتروني", value: COMPANY.email, href: `mailto:${COMPANY.email}`, color: "gradient-gold" },
              { icon: Clock, label: "مواعيد العمل", value: `${COMPANY.hours.weekdays}`, href: undefined, color: "gradient-olive" },
            ].map((item, i) => {
              const Icon = item.icon;
              const card = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 text-center premium-shadow hover-lift"
                >
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-2">{item.label}</h3>
                  <p className="text-gray-500 text-sm">{item.value}</p>
                </motion.div>
              );
              return item.href ? <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>{card}</a> : <div key={item.label}>{card}</div>;
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden premium-shadow-lg h-[500px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37!2d31.4!3d30.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d1af35bdd79%3A0x6bc7eeb44e86dd74!2sNew%20Cairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sar!2seg" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="الموقع" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {status === "success" ? (
                <div className="bg-white rounded-3xl p-10 text-center premium-shadow-lg h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mb-6"><CheckCircle className="w-10 h-10 text-white" /></div>
                  <h3 className="text-2xl font-bold mb-2">تم إرسال رسالتك بنجاح!</h3>
                  <p className="text-gray-500 mb-6">سنتواصل معك خلال 24 ساعة</p>
                  <button onClick={() => setStatus("idle")} className="px-6 py-3 rounded-xl gradient-gold text-white font-medium">إرسال رسالة أخرى</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 premium-shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-charcoal mb-6">أرسل لنا رسالة</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الاسم *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-cream/50" placeholder="الاسم" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الهاتف *</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-cream/50" placeholder="01xxxxxxxxx" dir="ltr" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">المدينة</label>
                      <select value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-cream/50">
                        <option value="">اختر المدينة</option>
                        <option value="القاهرة الجديدة">القاهرة الجديدة</option>
                        <option value="التجمع الخامس">التجمع الخامس</option>
                        <option value="مدينة نصر">مدينة نصر</option>
                        <option value="الشروق">الشروق</option>
                        <option value="الرحاب">الرحاب</option>
                        <option value="العاصمة الإدارية">العاصمة الإدارية</option>
                        <option value="أخرى">أخرى</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">مساحة المطبخ</label>
                      <select value={formData.kitchenSize} onChange={(e) => setFormData({ ...formData, kitchenSize: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-cream/50">
                        <option value="">اختر المساحة</option>
                        <option value="صغير">صغير (أقل من 6 متر)</option>
                        <option value="متوسط">متوسط (6-12 متر)</option>
                        <option value="كبير">كبير (أكثر من 12 متر)</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">رسالتك</label>
                    <textarea value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-cream/50 resize-none" placeholder="اكتب رسالتك هنا..." />
                  </div>
                  <button type="submit" disabled={status === "loading"} className="w-full py-4 rounded-2xl gradient-gold text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 shadow-xl disabled:opacity-50">
                    {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5" /> إرسال</>}
                  </button>
                  {status === "error" && <p className="text-red-500 text-sm text-center mt-3">حدث خطأ، يرجى المحاولة مرة أخرى</p>}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
