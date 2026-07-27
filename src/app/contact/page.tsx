import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "تواصل معنا - أسماء ديزاين كيتشن | احجز معاينة مجانية",
  description:
    "تواصل مع أسماء ديزاين كيتشن لحجز معاينة مجانية أو طلب عرض سعر. هاتف: 01003994843. القاهرة الجديدة - التجمع الخامس. واتساب، هاتف، بريد إلكتروني.",
  alternates: { canonical: "https://asmaadesignkitchen.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactPageContent />
      <Footer />
      <FloatingActions />
    </>
  );
}
