import BaseLayout from "@/components/layout/BaseLayout";
import { SITE_SETTINGS } from "@/lib/constants/site-config";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_SETTINGS.site_url),
  title: {
    default: SITE_SETTINGS.meta_title,
    template: `%s | ${SITE_SETTINGS.site_name}`,
  },
  description: SITE_SETTINGS.meta_description,
  keywords: [...SITE_SETTINGS.meta_keywords],
  openGraph: {
    title: SITE_SETTINGS.meta_title,
    description: SITE_SETTINGS.meta_description,
    url: SITE_SETTINGS.site_url,
    siteName: SITE_SETTINGS.site_name,
    images: [
      {
        url: "/site-logo.png",
        width: 1200,
        height: 630,
        alt: `${SITE_SETTINGS.site_name} Logo`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_SETTINGS.meta_title,
    description: SITE_SETTINGS.meta_description,
    images: [SITE_SETTINGS.site_logo_meta],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased scroll-smooth">
      <body className="min-h-full">
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
