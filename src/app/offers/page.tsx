import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import OffersPageContent from "@/components/pages/OffersPageContent";

export const metadata: Metadata = {
  title: "العروض والخصومات - أسعار مطابخ مميزة",
  description:
    "عروض أسماء ديزاين كيتشن الحصرية. خصومات على المطابخ المودرن والكلاسيك، أنظمة تقسيط مريحة، وكوبونات خصم. أفضل أسعار مطابخ في مصر.",
  alternates: { canonical: "https://asmaadesignkitchen.com/offers" },
};

export default function OffersPage() {
  return (
    <>
      <Navbar />
      <OffersPageContent />
      <Footer />
      <FloatingActions />
    </>
  );
}
