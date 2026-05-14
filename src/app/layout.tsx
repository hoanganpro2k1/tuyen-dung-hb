import BaseLayout from "@/components/layout/BaseLayout";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "An Hưng Education - Hệ thống giáo dục Hán ngữ trực tuyến uy tín số 1 Việt Nam",
  description:
    "An Hưng cung cấp các khóa học Tiếng Trung trực tuyến chất lượng cao, từ HSK1 đến HSK6, Tiếng Trung giao tiếp cho người đi làm.",
  keywords: [
    "An Hưng",
    "Tiếng Trung",
    "HSK",
    "Luyện thi HSK",
    "Tiếng Trung giao tiếp",
  ],
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
