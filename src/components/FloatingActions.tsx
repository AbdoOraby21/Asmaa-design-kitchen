"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ArrowUp, X } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [exitIntent, setExitIntent] = useState(false);
  const [exitDismissed, setExitDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitDismissed) {
        setExitIntent(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [exitDismissed]);

  return (
    <>
      {/* Sticky WhatsApp */}
      <motion.a
        href={COMPANY.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all animate-pulse-gold"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        aria-label="تواصل واتساب"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      {/* Sticky Call */}
      <motion.a
        href={`tel:${COMPANY.phone}`}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full gradient-gold text-white flex items-center justify-center shadow-2xl hover:opacity-90 transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        aria-label="اتصل الآن"
      >
        <Phone className="w-7 h-7" />
      </motion.a>

      {/* Floating Quote */}
      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-6 z-50 bg-white rounded-2xl shadow-2xl p-6 w-80 border border-gold/20"
          >
            <button onClick={() => setShowQuote(false)} className="absolute top-3 left-3 text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
            <h4 className="font-bold text-lg mb-2">احصل على عرض سعر</h4>
            <p className="text-gray-500 text-sm mb-4">تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر مميز</p>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-xl bg-green-500 text-white text-center font-medium hover:bg-green-600 transition-colors"
            >
              تواصل عبر واتساب
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-charcoal text-white flex items-center justify-center shadow-xl hover:bg-gold transition-colors"
            aria-label="الصعود للأعلى"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {exitIntent && !exitDismissed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4"
            onClick={() => { setExitIntent(false); setExitDismissed(true); }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">لحظة!</h3>
              <p className="text-gray-600 mb-6">
                احصل على خصم 10% على مطبخك الجديد عند حجز معاينة مجانية اليوم!
              </p>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl gradient-gold text-white font-bold mb-3 hover:opacity-90 transition-opacity"
              >
                احجز معاينة مجانية الآن
              </a>
              <button
                onClick={() => { setExitIntent(false); setExitDismissed(true); }}
                className="text-gray-400 text-sm hover:text-gray-600 transition-colors"
              >
                لا شكراً
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
