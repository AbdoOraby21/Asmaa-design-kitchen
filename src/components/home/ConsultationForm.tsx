"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    kitchenSize: "",
    preferredDate: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", city: "", kitchenSize: "", preferredDate: "", notes: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="section-padding bg-cream" id="consultation">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-2">تم إرسال طلبك بنجاح!</h3>
          <p className="text-gray-500">سنتواصل معك خلال 24 ساعة إن شاء الله</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 px-6 py-3 rounded-xl gradient-gold text-white font-medium"
          >
            إرسال طلب آخر
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-cream" id="consultation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-semibold text-sm tracking-wider mb-3 block">احجز الآن</span>
            <h2 className="text-3xl md:text-5xl font-black text-charcoal mb-4">
              احجز <span className="text-gradient-gold">معاينة مجانية</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              املأ النموذج وسيتواصل معك فريقنا خلال 24 ساعة لحجز موعد معاينة مجانية في منزلك. نقدم لك استشارة شاملة مع تصميم 3D مجاني.
            </p>
            <div className="space-y-4">
              {["معاينة مجانية في المنزل", "تصميم 3D مجاني", "عرض سعر تنافسي", "استشارة متخصصة"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full gradient-gold flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 premium-shadow-lg border border-gray-100"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الاسم *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/50"
                  placeholder="الاسم الكامل"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الهاتف *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/50"
                  placeholder="01xxxxxxxxx"
                  dir="ltr"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">المدينة</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/50"
                >
                  <option value="">اختر المدينة</option>
                  <option value="القاهرة الجديدة">القاهرة الجديدة</option>
                  <option value="التجمع الخامس">التجمع الخامس</option>
                  <option value="مدينة نصر">مدينة نصر</option>
                  <option value="الشروق">الشروق</option>
                  <option value="الرحاب">الرحاب</option>
                  <option value="العاصمة الإدارية">العاصمة الإدارية</option>
                  <option value="مدينة بدر">مدينة بدر</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">مساحة المطبخ</label>
                <select
                  value={formData.kitchenSize}
                  onChange={(e) => setFormData({ ...formData, kitchenSize: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/50"
                >
                  <option value="">اختر المساحة</option>
                  <option value="صغير (أقل من 6 متر)">صغير (أقل من 6 متر)</option>
                  <option value="متوسط (6-12 متر)">متوسط (6-12 متر)</option>
                  <option value="كبير (أكثر من 12 متر)">كبير (أكثر من 12 متر)</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">الموعد المفضل</label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/50"
                dir="ltr"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">ملاحظات إضافية</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-cream/50 resize-none"
                placeholder="أخبرنا عن مطبخ أحلامك..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-2xl gradient-gold text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl disabled:opacity-50"
            >
              {status === "loading" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  احجز معاينة مجانية
                </>
              )}
            </button>
            {status === "error" && (
              <p className="text-red-500 text-sm text-center mt-3">حدث خطأ، يرجى المحاولة مرة أخرى</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
