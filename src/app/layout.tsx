import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://asmaadesignkitchen.com"),
  title: {
    default: "أسماء ديزاين كيتشن | أفضل شركة مطابخ في مصر - تصميم وتصنيع مطابخ مودرن وكلاسيك",
    template: "%s | أسماء ديزاين كيتشن",
  },
  description:
    "أسماء ديزاين كيتشن - أفضل مصنع مطابخ في القاهرة الجديدة والتجمع الخامس. تصميم وتصنيع وتركيب مطابخ مودرن وكلاسيك، دريسنج روم، وحدات تلفزيون، كلوزيت وأثاث حسب الطلب. مصنع مباشر بأعلى جودة وأفضل الأسعار.",
  keywords: [
    "مطابخ مودرن", "مطابخ كلاسيك", "مطابخ خشب", "مطابخ MDF", "مطابخ HPL", "مطابخ PVC",
    "أفضل شركة مطابخ", "تصميم مطابخ", "تشطيب مطابخ", "تفصيل مطابخ",
    "مطابخ القاهرة", "مطابخ القاهرة الجديدة", "مطابخ مصر",
    "دريسنج روم", "غرف ملابس", "وحدات تلفزيون", "كلوزيت",
    "أثاث حسب الطلب", "أفضل مطابخ في مصر", "مصنع مطابخ",
    "Kitchen Design Egypt", "Modern Kitchens Egypt", "Kitchen Manufacturer Egypt",
  ],
  authors: [{ name: "Asmaa Design Kitchen" }],
  creator: "Asmaa Design Kitchen",
  publisher: "Asmaa Design Kitchen",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
    url: "https://asmaadesignkitchen.com",
    siteName: "Asmaa Design Kitchen - أسماء ديزاين كيتشن",
    title: "أسماء ديزاين كيتشن | أفضل شركة تصميم وتصنيع مطابخ في مصر",
    description:
      "من المصنع مباشرة إلى منزلك. تصميم وتصنيع مطابخ مودرن وكلاسيك بأعلى جودة وأفضل الأسعار. القاهرة الجديدة - التجمع الخامس.",
    images: [
      {
        url: "https://images.pexels.com/photos/36511381/pexels-photo-36511381.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
        width: 1200,
        height: 630,
        alt: "أسماء ديزاين كيتشن - مطابخ مودرن وكلاسيك",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "أسماء ديزاين كيتشن | أفضل مطابخ في مصر",
    description: "تصميم وتصنيع مطابخ مودرن وكلاسيك بأعلى جودة. مصنع مباشر - القاهرة الجديدة",
    images: [
      "https://images.pexels.com/photos/36511381/pexels-photo-36511381.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://asmaadesignkitchen.com",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://asmaadesignkitchen.com/#business",
      name: "Asmaa Design Kitchen - أسماء ديزاين كيتشن",
      alternateName: "أسماء ديزاين كيتشن",
      description:
        "أفضل مصنع مطابخ في القاهرة الجديدة. تصميم وتصنيع وتركيب مطابخ مودرن وكلاسيك، دريسنج روم، وحدات تلفزيون، كلوزيت وأثاث حسب الطلب.",
      url: "https://asmaadesignkitchen.com",
      telephone: "+201003994843",
      email: "asmaahossam97@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "التجمع الخامس",
        addressLocality: "القاهرة الجديدة",
        addressRegion: "القاهرة",
        addressCountry: "EG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "30.0274",
        longitude: "31.4913",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:00",
          closes: "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "14:00",
          closes: "21:00",
        },
      ],
      priceRange: "$$",
      image:
        "https://images.pexels.com/photos/36511381/pexels-photo-36511381.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "300",
        bestRating: "5",
      },
      areaServed: [
        { "@type": "City", name: "القاهرة الجديدة" },
        { "@type": "City", name: "التجمع الخامس" },
        { "@type": "City", name: "مدينة نصر" },
        { "@type": "City", name: "الشروق" },
        { "@type": "City", name: "الرحاب" },
        { "@type": "City", name: "العاصمة الإدارية الجديدة" },
      ],
      sameAs: [
        "https://facebook.com/asmaadesignkitchen",
        "https://instagram.com/asmaadesignkitchen",
        "https://tiktok.com/@asmaadesignkitchen",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://asmaadesignkitchen.com/#organization",
      name: "Asmaa Design Kitchen",
      url: "https://asmaadesignkitchen.com",
      logo: "https://asmaadesignkitchen.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+201003994843",
        contactType: "customer service",
        availableLanguage: ["Arabic", "English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://asmaadesignkitchen.com/#website",
      url: "https://asmaadesignkitchen.com",
      name: "Asmaa Design Kitchen",
      inLanguage: ["ar", "en"],
      publisher: { "@id": "https://asmaadesignkitchen.com/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://asmaadesignkitchen.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "ما هي أفضل خامة للمطابخ؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "يعتمد اختيار الخامة على الميزانية والاستخدام. HPL يتميز بالمتانة ومقاومة الرطوبة، MDF مناسب للتصاميم العصرية، والأكريليك يعطي لمعان فاخر.",
          },
        },
        {
          "@type": "Question",
          name: "كم يستغرق تصنيع المطبخ؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "عادة يستغرق تصنيع وتركيب المطبخ من 15 إلى 30 يوم عمل حسب حجم المطبخ وتعقيد التصميم.",
          },
        },
        {
          "@type": "Question",
          name: "هل تقدمون ضمان على المطابخ؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، نقدم ضمان شامل على جميع منتجاتنا يشمل الخامات والتركيب والإكسسوارات.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-charcoal antialiased" style={{ fontFamily: "'Cairo', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
