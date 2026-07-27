import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import GalleryPageContent from "@/components/pages/GalleryPageContent";

export const metadata: Metadata = {
  title: "معرض الأعمال - مشاريع مطابخ مودرن وكلاسيك",
  description:
    "شاهد معرض أعمال أسماء ديزاين كيتشن. مشاريع مطابخ مودرن وكلاسيك، دريسنج روم، كلوزيت ووحدات تلفزيون. أكثر من 500 مشروع مكتمل في القاهرة الجديدة والتجمع الخامس.",
  alternates: { canonical: "https://asmaadesignkitchen.com/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <GalleryPageContent />
      <Footer />
      <FloatingActions />
    </>
  );
}
