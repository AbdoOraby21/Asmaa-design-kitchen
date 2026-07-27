import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ServicesPageContent from "@/components/pages/ServicesPageContent";

export const metadata: Metadata = {
  title: "خدماتنا - مطابخ مودرن وكلاسيك | دريسنج روم | وحدات تلفزيون | كلوزيت",
  description:
    "خدمات أسماء ديزاين كيتشن: تصميم وتصنيع مطابخ مودرن وكلاسيك، دريسنج روم، وحدات تلفزيون، كلوزيت، أثاث حسب الطلب، نجارة وتشطيبات داخلية، تصميم 3D. أفضل مصنع مطابخ في القاهرة الجديدة.",
  alternates: { canonical: "https://asmaadesignkitchen.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesPageContent />
      <Footer />
      <FloatingActions />
    </>
  );
}
