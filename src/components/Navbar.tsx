"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { NAV_ITEMS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gold/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl gradient-gold flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="hidden sm:block">
              <h1 className={cn("text-lg font-bold leading-tight transition-colors", scrolled ? "text-charcoal" : "text-white")}>
                Asmaa Design
              </h1>
              <p className={cn("text-xs transition-colors", scrolled ? "text-gold" : "text-gold-light")}>Kitchen & Interior</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-gold/10 hover:text-gold",
                  scrolled ? "text-charcoal" : "text-white/90 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-all shadow-lg hover:shadow-green-600/25"
            >
              <MessageCircle className="w-4 h-4" />
              واتساب
            </a>
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl gradient-gold text-white text-sm font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-gold/25"
            >
              <Phone className="w-4 h-4" />
              اتصل الآن
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-xl transition-colors",
              scrolled ? "text-charcoal hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl text-charcoal font-medium hover:bg-gold/10 hover:text-gold transition-all"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex gap-3 pt-4">
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600 text-white font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                </a>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl gradient-gold text-white font-medium"
                >
                  <Phone className="w-5 h-5" />
                  اتصل الآن
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
