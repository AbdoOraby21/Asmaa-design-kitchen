import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CalculatorPageContent from "@/components/pages/CalculatorPageContent";

export const metadata: Metadata = {
  title: "حاسبة تكلفة المطبخ - احسب سعر مطبخك الآن",
  description:
    "احسب تكلفة مطبخك الجديد مع حاسبة أسماء ديزاين كيتشن. أدخل المقاسات ونوع الخامة واحصل على تقدير فوري لسعر مطبخك. أسعار مطابخ مودرن وكلاسيك في مصر.",
  alternates: { canonical: "https://asmaadesignkitchen.com/calculator" },
};

export default function CalculatorPage() {
  return (
    <>
      <Navbar />
      <CalculatorPageContent />
      <Footer />
      <FloatingActions />
    </>
  );
}
