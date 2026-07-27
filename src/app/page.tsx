import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesSection from "@/components/home/ServicesSection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ConsultationForm from "@/components/home/ConsultationForm";
import MapSection from "@/components/home/MapSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "أسماء ديزاين كيتشن | أفضل شركة مطابخ في مصر - مطابخ مودرن وكلاسيك",
  description:
    "أسماء ديزاين كيتشن - أفضل مصنع مطابخ في القاهرة الجديدة والتجمع الخامس. تصميم وتصنيع وتركيب مطابخ مودرن وكلاسيك، دريسنج روم، وحدات تلفزيون، كلوزيت. من المصنع مباشرة بأعلى جودة وأفضل الأسعار. اتصل الآن 01003994843",
  alternates: {
    canonical: "https://asmaadesignkitchen.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ProcessSection />
        <ConsultationForm />
        <MapSection />
        <NewsletterSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
