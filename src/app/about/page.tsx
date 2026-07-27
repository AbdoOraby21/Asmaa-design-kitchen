import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AboutPageContent from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "من نحن - أسماء ديزاين كيتشن | قصتنا ورؤيتنا",
  description:
    "تعرف على أسماء ديزاين كيتشن. أكثر من 10 سنوات خبرة في تصميم وتصنيع المطابخ في مصر. مصنع مباشر في القاهرة الجديدة مع فريق متخصص لتحقيق رؤيتك.",
  alternates: { canonical: "https://asmaadesignkitchen.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutPageContent />
      <Footer />
      <FloatingActions />
    </>
  );
}
