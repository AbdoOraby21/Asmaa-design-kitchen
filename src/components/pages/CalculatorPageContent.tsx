"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, MessageCircle, Loader2, CheckCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const materials = [
  { id: "mdf", name: "MDF", pricePerMeter: 3500 },
  { id: "hpl", name: "HPL", pricePerMeter: 4500 },
  { id: "pvc", name: "PVC", pricePerMeter: 4000 },
  { id: "acrylic", name: "أكريليك", pricePerMeter: 6000 },
  { id: "wood", name: "خشب طبيعي", pricePerMeter: 8000 },
  { id: "aluminum", name: "ألمنيوم", pricePerMeter: 5000 },
];

const countertops = [
  { id: "granite", name: "جرانيت", price: 2000 },
  { id: "marble", name: "رخام", price: 3000 },
  { id: "quartz", name: "كوارتز", price: 4500 },
  { id: "corian", name: "كوريان", price: 5000 },
];

const accessoryOptions = [
  { id: "soft-close", name: "مفصلات سوفت كلوز", price: 1500 },
  { id: "pull-out", name: "أدراج سحب كاملة", price: 2000 },
  { id: "corner", name: "وحدة ركن دوارة", price: 3000 },
  { id: "lighting", name: "إضاءة LED داخلية", price: 1000 },
  { id: "waste", name: "وحدة فرز نفايات", price: 800 },
];

export default function CalculatorPageContent() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [material, setMaterial] = useState("");
  const [countertop, setCountertop] = useState("");
  const [accessories, setAccessories] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const calculatePrice = () => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const perimeter = 2 * (l + w);
    const mat = materials.find((m) => m.id === material);
    const ct = countertops.find((c) => c.id === countertop);
    const basePrice = perimeter * (mat?.pricePerMeter || 3500);
    const ctPrice = perimeter * (ct?.price || 2000);
    const accPrice = accessories.reduce((sum, acc) => {
      const a = accessoryOptions.find((o) => o.id === acc);
      return sum + (a?.price || 0);
    }, 0);
    return Math.round(basePrice + ctPrice + accPrice);
  };

  const estimated = calculatePrice();

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch("/api/calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, phone, length, width, material, countertop,
          accessories: accessories.join(", "),
          estimatedPrice: estimated,
        }),
      });
    } catch { /* ignore */ }
    setSaving(false);
  };

  return (
    <main>
      <section className="relative py-32 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20"><div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" /></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Calculator className="w-16 h-16 text-gold mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">حاسبة <span className="text-gradient-gold">تكلفة المطبخ</span></h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">احسب تكلفة مطبخك الجديد بسهولة واحصل على تقدير فوري للسعر</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 premium-shadow-lg">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">طول المطبخ (متر)</label>
                <input type="number" step="0.1" min="1" value={length} onChange={(e) => setLength(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-cream/50" placeholder="مثال: 4" dir="ltr" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">عرض المطبخ (متر)</label>
                <input type="number" step="0.1" min="1" value={width} onChange={(e) => setWidth(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-cream/50" placeholder="مثال: 3" dir="ltr" />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">نوع الخامة</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {materials.map((m) => (
                  <button key={m.id} onClick={() => setMaterial(m.id)} className={`p-4 rounded-2xl border-2 transition-all text-center ${material === m.id ? "border-gold bg-gold/5 text-gold" : "border-gray-200 hover:border-gold/50"}`}>
                    <div className="font-bold text-sm">{m.name}</div>
                    <div className="text-xs text-gray-400 mt-1">{m.pricePerMeter.toLocaleString()} ج.م/م</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">نوع الرخام / السطح</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {countertops.map((c) => (
                  <button key={c.id} onClick={() => setCountertop(c.id)} className={`p-4 rounded-2xl border-2 transition-all text-center ${countertop === c.id ? "border-gold bg-gold/5 text-gold" : "border-gray-200 hover:border-gold/50"}`}>
                    <div className="font-bold text-sm">{c.name}</div>
                    <div className="text-xs text-gray-400 mt-1">{c.price.toLocaleString()} ج.م/م</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">الإكسسوارات (اختياري)</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {accessoryOptions.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setAccessories((prev) => prev.includes(a.id) ? prev.filter((x) => x !== a.id) : [...prev, a.id])}
                    className={`p-4 rounded-2xl border-2 transition-all text-right flex items-center justify-between ${accessories.includes(a.id) ? "border-gold bg-gold/5" : "border-gray-200 hover:border-gold/50"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center ${accessories.includes(a.id) ? "border-gold bg-gold" : "border-gray-300"}`}>
                        {accessories.includes(a.id) && <CheckCircle className="w-3 h-3 text-white" />}
                      </div>
                      <span className="font-medium text-sm">{a.name}</span>
                    </div>
                    <span className="text-xs text-gray-400">{a.price.toLocaleString()} ج.م</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowResult(true)}
              disabled={!length || !width || !material}
              className="w-full py-4 rounded-2xl gradient-gold text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 shadow-xl disabled:opacity-50 mb-8"
            >
              <Calculator className="w-5 h-5" />
              احسب التكلفة
            </button>

            {showResult && length && width && material && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-cream rounded-3xl p-8 text-center border border-gold/20">
                <h3 className="text-lg font-medium text-gray-600 mb-2">التكلفة التقديرية لمطبخك</h3>
                <div className="text-5xl font-black text-gold mb-2">{estimated.toLocaleString()}</div>
                <p className="text-gray-400 text-sm mb-6">جنيه مصري (تقدير أولي)</p>
                <p className="text-xs text-gray-400 mb-6">* السعر تقديري ويمكن أن يختلف حسب التفاصيل الدقيقة والمعاينة</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="اسمك" className="px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none bg-white" />
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="رقم الهاتف" className="px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none bg-white" dir="ltr" />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={handleSave} disabled={saving} className="flex-1 py-3 rounded-xl gradient-gold text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50">
                    {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : "احفظ واحصل على عرض سعر"}
                  </button>
                  <a href={`${COMPANY.whatsapp}?text=${encodeURIComponent(`مرحباً، أريد عرض سعر لمطبخ بمقاس ${length}×${width} متر، خامة ${material}، التكلفة التقديرية: ${estimated.toLocaleString()} جنيه`)}`} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-xl bg-green-600 text-white font-medium flex items-center justify-center gap-2 hover:bg-green-700">
                    <MessageCircle className="w-5 h-5" />
                    تواصل واتساب
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
