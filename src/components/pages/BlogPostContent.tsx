"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

interface BlogPost {
  id: string;
  title: string;
  titleEn: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <main>
      <section className="relative py-32 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-gold mb-6 hover:text-gold-light transition-colors">
              <ArrowRight className="w-4 h-4" />
              العودة للمدونة
            </Link>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4">{post.title}</h1>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-3xl mb-10 premium-shadow-lg" loading="lazy" />
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-6">{post.excerpt}</p>
              <p className="leading-relaxed mb-6">{post.content}</p>
              <p className="leading-relaxed mb-6">
                في أسماء ديزاين كيتشن، نحرص دائماً على تقديم أفضل النصائح والإرشادات لعملائنا. نؤمن بأن المطبخ هو قلب المنزل، ولذلك نبذل كل جهدنا لجعله مكاناً مثالياً يجمع بين الجمال والعملية.
              </p>
              <p className="leading-relaxed mb-6">
                سواء كنت تبحث عن مطبخ مودرن بتصميم عصري وخطوط نظيفة، أو مطبخ كلاسيك بتفاصيل دقيقة ونقوشات أنيقة، فإن فريقنا المتخصص جاهز لمساعدتك في تحقيق رؤيتك.
              </p>
              <p className="leading-relaxed">
                لا تتردد في التواصل معنا للحصول على استشارة مجانية وعرض سعر مميز. نحن نخدم جميع مناطق القاهرة الكبرى بما في ذلك التجمع الخامس، مدينة نصر، الشروق، الرحاب، والعاصمة الإدارية الجديدة.
              </p>
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-cream text-center border border-gold/20">
              <h3 className="text-2xl font-bold text-charcoal mb-3">هل أعجبك المقال؟</h3>
              <p className="text-gray-500 mb-6">تواصل معنا الآن واحصل على استشارة مجانية لمطبخك الجديد</p>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-gold text-white font-bold hover:opacity-90 shadow-xl">
                <MessageCircle className="w-5 h-5" />
                تواصل عبر واتساب
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
