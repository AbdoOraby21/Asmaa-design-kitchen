"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Loader2, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-olive rounded-full blur-3xl" />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            اشترك في نشرتنا البريدية
          </h2>
          <p className="text-gray-400 mb-8">
            احصل على أحدث العروض والتصاميم والنصائح مباشرة في بريدك الإلكتروني
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-3 text-green-400">
              <CheckCircle className="w-6 h-6" />
              <span className="font-medium">تم الاشتراك بنجاح!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-5 py-4 rounded-2xl bg-white/10 text-white border border-white/10 focus:border-gold outline-none placeholder:text-gray-500 transition-colors"
                dir="ltr"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-4 rounded-2xl gradient-gold text-white font-bold hover:opacity-90 transition-opacity disabled:opacity-50 shrink-0"
              >
                {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "اشترك"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm mt-3">حدث خطأ، يرجى المحاولة مرة أخرى</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
