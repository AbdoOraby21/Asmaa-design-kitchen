import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import BlogPageContent from "@/components/pages/BlogPageContent";

export const metadata: Metadata = {
  title: "المدونة - نصائح وأفكار تصميم المطابخ",
  description:
    "مدونة أسماء ديزاين كيتشن: أحدث صيحات المطابخ، نصائح اختيار الخامات، أفكار ألوان المطابخ، مقارنة بين MDF و HPL و PVC، ونصائح صيانة المطابخ.",
  alternates: { canonical: "https://asmaadesignkitchen.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <BlogPageContent />
      <Footer />
      <FloatingActions />
    </>
  );
}
