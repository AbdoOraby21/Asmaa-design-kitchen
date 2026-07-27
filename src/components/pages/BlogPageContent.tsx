"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import Link from "next/link";

export default function BlogPageContent() {
  return (
    <main>
      <section className="relative py-32 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20"><div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" /></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">المدونة و<span className="text-gradient-gold">النصائح</span></h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">أحدث المقالات والنصائح حول تصميم المطابخ والديكور الداخلي</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden premium-shadow hover-lift group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })}
                  </div>
                  <h2 className="text-xl font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">{post.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-gold font-medium text-sm hover:text-gold-dark transition-colors">
                    اقرأ المزيد <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
